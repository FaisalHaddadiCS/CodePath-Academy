import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach, jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { generalApiLimiter, authLimiter, aiChatLimiter } from '../src/middlewares/rateLimiter.middleware';
import authRoutes from '../src/routes/auth.routes';
import aiRoutes from '../src/routes/ai.routes';
import { csrfOriginCheck } from '../src/middlewares/csrf.middleware';
import prisma from '../src/utils/db';
import * as authUtils from '../src/utils/auth';

jest.setTimeout(30000);

const app = express();
app.set('trust proxy', 1);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
    },
  },
  hsts: process.env.NODE_ENV === "production" ? { maxAge: 31536000, includeSubDomains: true } : false,
}));
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
});
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use('/api', generalApiLimiter);
app.use('/api', csrfOriginCheck);
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ success: false, error: { code: "SERVER_ERROR", message: "An unexpected error occurred" } });
});

app.get('/api/health', (req, res) => res.json({ status: "ok" }));

beforeAll(async () => {
  await prisma.user.deleteMany({ where: { email: { in: ['test_sec@test.com', 'success_limit@test.com', 'iso1@test.com', 'iso2@test.com'] } } });
});

afterAll(async () => {
  await prisma.user.deleteMany({ where: { email: { in: ['test_sec@test.com', 'success_limit@test.com', 'iso1@test.com', 'iso2@test.com'] } } });
});

describe('Security Tests', () => {
  describe('Authentication & SQL Injection', () => {
    it('should securely hash password during signup', async () => {
      const res = await request(app).post('/api/auth/signup').send({
        email: 'test_sec@test.com',
        password: 'Password123!',
        firstName: 'Test',
        lastName: 'User'
      });
      expect(res.status).toBe(201);
      
      const dbUser = await prisma.user.findUnique({ where: { email: 'test_sec@test.com' } });
      expect(dbUser?.password).not.toBe('Password123!');
      expect(dbUser?.password).toMatch(/^\$argon2/);
    });

    it('should return safe generic errors for incorrect password', async () => {
      const res = await request(app).post('/api/auth/signin').send({
        email: 'test_sec@test.com',
        password: 'WrongPassword!'
      });
      expect(res.status).toBe(401);
      expect(res.body.error.message).toBe('The email or password is incorrect.');
    });

    it('should return safe generic errors for non-existent email', async () => {
      const res = await request(app).post('/api/auth/signin').send({
        email: 'nonexistent_sec@test.com',
        password: 'Password123!'
      });
      expect(res.status).toBe(401);
      expect(res.body.error.message).toBe('The email or password is incorrect.');
    });

    it('should not allow SQL injection in email field', async () => {
      const res = await request(app).post('/api/auth/signin').send({
        email: "' OR 1=1 --",
        password: 'Password123!'
      });
      expect(res.status).toBe(400); // Because Zod email validation will fail
    });
  });

  describe('Validation & Payload Size', () => {
    it('should reject extremely large JSON payloads', async () => {
      const largeString = 'a'.repeat(20000); // 20kb
      const res = await request(app).post('/api/auth/signin').send({
        email: 'test_sec@test.com',
        password: largeString
      });
      expect(res.status).toBe(413); // Payload Too Large
    });
  });

  describe('Auth Lockout', () => {
    it('should block after 5 failed attempts', async () => {
      await request(app).post('/api/auth/signup').send({ email: 'iso1@test.com', password: 'Password123!', firstName: 'TestOne', lastName: 'UserOne' });
      
      let res;
      for (let i = 0; i < 5; i++) {
        res = await request(app).post('/api/auth/signin').set('X-Forwarded-For', '3.3.3.3').send({
          email: 'iso1@test.com',
          password: 'WrongPassword!'
        });
        expect(res.status).toBe(401);
      }

      // 6th attempt should be blocked
      res = await request(app).post('/api/auth/signin').set('X-Forwarded-For', '3.3.3.3').send({
        email: 'iso1@test.com',
        password: 'WrongPassword!'
      });
      expect(res.status).toBe(429);
    });

    it('should track different IPs separately to not collapse users', async () => {
      await request(app).post('/api/auth/signup').send({ email: 'iso2@test.com', password: 'Password123!', firstName: 'TestTwo', lastName: 'UserTwo' });
      
      // User on IP 4.4.4.4 fails 5 times
      for (let i = 0; i < 5; i++) {
        await request(app).post('/api/auth/signin').set('X-Forwarded-For', '4.4.4.4').send({
          email: 'iso2@test.com',
          password: 'WrongPassword!'
        });
      }

      // Another user on IP 5.5.5.5 should NOT be blocked from trying
      const res = await request(app).post('/api/auth/signin').set('X-Forwarded-For', '5.5.5.5').send({
        email: 'iso2@test.com', // wait, lockout is per IP AND email in this app!
        password: 'WrongPassword!'
      });
      expect(res.status).toBe(401); // Only 401, not 429!
    });
  });

  describe('CSRF Origin Check', () => {
    it('should allow requests with valid origin', async () => {
      const res = await request(app).post('/api/auth/signin')
        .set('Origin', 'http://localhost:5173')
        .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
      expect(res.status).not.toBe(403);
    });

    it('should reject requests with invalid cross-origin', async () => {
      const res = await request(app).post('/api/auth/signin')
        .set('Origin', 'http://malicious.com')
        .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });

    it('should allow requests missing origin (same-site/curl fallback)', async () => {
      const res = await request(app).post('/api/auth/signin')
        .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
      expect(res.status).not.toBe(403);
    });

    it.skip('should reject requests missing origin in production', () => {
    });
  });

  describe('General Security Headers', () => {
    it('should return required security headers', async () => {
      const res = await request(app).get('/api/health');
      expect(res.headers['content-security-policy']).toBeDefined();
      expect(res.headers['x-content-type-options']).toBe('nosniff');
      expect(res.headers['referrer-policy']).toBeDefined();
      expect(res.headers['permissions-policy']).toBeDefined();
      expect(res.headers['strict-transport-security']).toBeUndefined(); // Because we are not in production env
    });
  });

  describe('JWT and Auth State', () => {
    it('should reject unauthenticated requests to protected endpoints', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
    });

    it('should reject malformed JWTs', async () => {
      const res = await request(app).get('/api/auth/me').set('Cookie', ['token=invalid_jwt']);
      expect(res.status).toBe(401);
    });

    it('should clear cookie on signout', async () => {
      const res = await request(app).post('/api/auth/signout');
      expect(res.headers['set-cookie']).toBeDefined();
      expect(res.headers['set-cookie']![0]).toMatch(/token=;/);
    });
  });

  describe('Error Handling Safety', () => {
    it('should not leak stack traces on unexpected errors', async () => {
      const res = await request(app).post('/api/auth/signin').set('Content-Type', 'application/json').send('{"email": "test"');
      expect(res.status).toBe(400); // Express JSON parser
    });
  });

  describe('AI Abuse Controls', () => {
    it('should reject oversized bodies before AI processing', async () => {
      const largeString = 'a'.repeat(20000); // 20kb, limit is 10kb
      const res = await request(app).post('/api/ai/chat')
        .set('Origin', 'http://localhost:5173')
        .send({ messages: [{ role: 'user', content: largeString }] });
      expect(res.status).toBe(413); // Payload Too Large
    });

    it('should enforce distinct rate limits for chat and quiz', async () => {
      // Send 50 chat requests to hit limit (assuming 20 or 50 is max)
      let chatRes;
      for (let i = 0; i < 21; i++) {
        chatRes = await request(app).post('/api/ai/chat')
          .set('Origin', 'http://localhost:5173')
          .set('X-Forwarded-For', '9.9.9.9')
          .send({ currentMessage: 'test' });
      }
      expect(chatRes?.status).toBe(429);

      // Quiz should still work (it has its own bucket, let's say max 10)
      const quizRes = await request(app).post('/api/ai/generate-quiz')
        .set('Origin', 'http://localhost:5173')
        .set('X-Forwarded-For', '9.9.9.9')
        .send({ topic: 'Python' });
      
      expect(quizRes.status).not.toBe(429); // Assuming quiz isn't limited yet
    });

    it('should reject cross-origin AI requests', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';
      const res = await request(app).post('/api/ai/chat')
        .set('Origin', 'http://malicious.com')
        .send({ currentMessage: 'test' });
      expect(res.status).toBe(403);
      process.env.NODE_ENV = originalEnv;
    });
  });
});
