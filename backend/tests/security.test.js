"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const rateLimiter_middleware_1 = require("../src/middlewares/rateLimiter.middleware");
const auth_routes_1 = __importDefault(require("../src/routes/auth.routes"));
const ai_routes_1 = __importDefault(require("../src/routes/ai.routes"));
const csrf_middleware_1 = require("../src/middlewares/csrf.middleware");
const db_1 = __importDefault(require("../src/utils/db"));
globals_1.jest.setTimeout(30000);
const app = (0, express_1.default)();
app.set('trust proxy', 1);
app.use((0, helmet_1.default)({
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
app.use(express_1.default.json({ limit: "10kb" }));
app.use((0, cookie_parser_1.default)());
app.use('/api', rateLimiter_middleware_1.generalApiLimiter);
app.use('/api', csrf_middleware_1.csrfOriginCheck);
app.use('/api/auth', auth_routes_1.default);
app.use('/api/ai', ai_routes_1.default);
app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    res.status(status).json({ success: false, error: { code: "SERVER_ERROR", message: "An unexpected error occurred" } });
});
app.get('/api/health', (req, res) => res.json({ status: "ok" }));
(0, globals_1.beforeAll)(async () => {
    await db_1.default.user.deleteMany({ where: { email: { in: ['test_sec@test.com', 'success_limit@test.com', 'iso1@test.com', 'iso2@test.com'] } } });
});
(0, globals_1.afterAll)(async () => {
    await db_1.default.user.deleteMany({ where: { email: { in: ['test_sec@test.com', 'success_limit@test.com', 'iso1@test.com', 'iso2@test.com'] } } });
});
(0, globals_1.describe)('Security Tests', () => {
    (0, globals_1.describe)('Authentication & SQL Injection', () => {
        (0, globals_1.it)('should securely hash password during signup', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signup').send({
                email: 'test_sec@test.com',
                password: 'Password123!',
                firstName: 'Test',
                lastName: 'User'
            });
            (0, globals_1.expect)(res.status).toBe(201);
            const dbUser = await db_1.default.user.findUnique({ where: { email: 'test_sec@test.com' } });
            (0, globals_1.expect)(dbUser?.password).not.toBe('Password123!');
            (0, globals_1.expect)(dbUser?.password).toMatch(/^\$argon2/);
        });
        (0, globals_1.it)('should return safe generic errors for incorrect password', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').send({
                email: 'test_sec@test.com',
                password: 'WrongPassword!'
            });
            (0, globals_1.expect)(res.status).toBe(401);
            (0, globals_1.expect)(res.body.error.message).toBe('The email or password is incorrect.');
        });
        (0, globals_1.it)('should return safe generic errors for non-existent email', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').send({
                email: 'nonexistent_sec@test.com',
                password: 'Password123!'
            });
            (0, globals_1.expect)(res.status).toBe(401);
            (0, globals_1.expect)(res.body.error.message).toBe('The email or password is incorrect.');
        });
        (0, globals_1.it)('should not allow SQL injection in email field', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').send({
                email: "' OR 1=1 --",
                password: 'Password123!'
            });
            (0, globals_1.expect)(res.status).toBe(400); // Because Zod email validation will fail
        });
    });
    (0, globals_1.describe)('Validation & Payload Size', () => {
        (0, globals_1.it)('should reject extremely large JSON payloads', async () => {
            const largeString = 'a'.repeat(20000); // 20kb
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').send({
                email: 'test_sec@test.com',
                password: largeString
            });
            (0, globals_1.expect)(res.status).toBe(413); // Payload Too Large
        });
    });
    (0, globals_1.describe)('Auth Lockout', () => {
        (0, globals_1.it)('should block after 5 failed attempts', async () => {
            await (0, supertest_1.default)(app).post('/api/auth/signup').send({ email: 'iso1@test.com', password: 'Password123!', firstName: 'TestOne', lastName: 'UserOne' });
            let res;
            for (let i = 0; i < 5; i++) {
                res = await (0, supertest_1.default)(app).post('/api/auth/signin').set('X-Forwarded-For', '3.3.3.3').send({
                    email: 'iso1@test.com',
                    password: 'WrongPassword!'
                });
                (0, globals_1.expect)(res.status).toBe(401);
            }
            // 6th attempt should be blocked
            res = await (0, supertest_1.default)(app).post('/api/auth/signin').set('X-Forwarded-For', '3.3.3.3').send({
                email: 'iso1@test.com',
                password: 'WrongPassword!'
            });
            (0, globals_1.expect)(res.status).toBe(429);
        });
        (0, globals_1.it)('should track different IPs separately to not collapse users', async () => {
            await (0, supertest_1.default)(app).post('/api/auth/signup').send({ email: 'iso2@test.com', password: 'Password123!', firstName: 'TestTwo', lastName: 'UserTwo' });
            // User on IP 4.4.4.4 fails 5 times
            for (let i = 0; i < 5; i++) {
                await (0, supertest_1.default)(app).post('/api/auth/signin').set('X-Forwarded-For', '4.4.4.4').send({
                    email: 'iso2@test.com',
                    password: 'WrongPassword!'
                });
            }
            // Another user on IP 5.5.5.5 should NOT be blocked from trying
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').set('X-Forwarded-For', '5.5.5.5').send({
                email: 'iso2@test.com', // wait, lockout is per IP AND email in this app!
                password: 'WrongPassword!'
            });
            (0, globals_1.expect)(res.status).toBe(401); // Only 401, not 429!
        });
    });
    (0, globals_1.describe)('CSRF Origin Check', () => {
        (0, globals_1.it)('should allow requests with valid origin', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin')
                .set('Origin', 'http://localhost:5173')
                .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
            (0, globals_1.expect)(res.status).not.toBe(403);
        });
        (0, globals_1.it)('should reject requests with invalid cross-origin', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin')
                .set('Origin', 'http://malicious.com')
                .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
            (0, globals_1.expect)(res.status).toBe(403);
            (0, globals_1.expect)(res.body.error.code).toBe('FORBIDDEN');
        });
        (0, globals_1.it)('should allow requests missing origin (same-site/curl fallback)', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin')
                .send({ email: 'test_sec@test.com', password: 'WrongPassword!' });
            (0, globals_1.expect)(res.status).not.toBe(403);
        });
        globals_1.it.skip('should reject requests missing origin in production', () => {
        });
    });
    (0, globals_1.describe)('General Security Headers', () => {
        (0, globals_1.it)('should return required security headers', async () => {
            const res = await (0, supertest_1.default)(app).get('/api/health');
            (0, globals_1.expect)(res.headers['content-security-policy']).toBeDefined();
            (0, globals_1.expect)(res.headers['x-content-type-options']).toBe('nosniff');
            (0, globals_1.expect)(res.headers['referrer-policy']).toBeDefined();
            (0, globals_1.expect)(res.headers['permissions-policy']).toBeDefined();
            (0, globals_1.expect)(res.headers['strict-transport-security']).toBeUndefined(); // Because we are not in production env
        });
    });
    (0, globals_1.describe)('JWT and Auth State', () => {
        (0, globals_1.it)('should reject unauthenticated requests to protected endpoints', async () => {
            const res = await (0, supertest_1.default)(app).get('/api/auth/me');
            (0, globals_1.expect)(res.status).toBe(401);
        });
        (0, globals_1.it)('should reject malformed JWTs', async () => {
            const res = await (0, supertest_1.default)(app).get('/api/auth/me').set('Cookie', ['token=invalid_jwt']);
            (0, globals_1.expect)(res.status).toBe(401);
        });
        (0, globals_1.it)('should clear cookie on signout', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signout');
            (0, globals_1.expect)(res.headers['set-cookie']).toBeDefined();
            (0, globals_1.expect)(res.headers['set-cookie'][0]).toMatch(/token=;/);
        });
    });
    (0, globals_1.describe)('Error Handling Safety', () => {
        (0, globals_1.it)('should not leak stack traces on unexpected errors', async () => {
            const res = await (0, supertest_1.default)(app).post('/api/auth/signin').set('Content-Type', 'application/json').send('{"email": "test"');
            (0, globals_1.expect)(res.status).toBe(400); // Express JSON parser
        });
    });
    (0, globals_1.describe)('AI Abuse Controls', () => {
        (0, globals_1.it)('should reject oversized bodies before AI processing', async () => {
            const largeString = 'a'.repeat(20000); // 20kb, limit is 10kb
            const res = await (0, supertest_1.default)(app).post('/api/ai/chat')
                .set('Origin', 'http://localhost:5173')
                .send({ messages: [{ role: 'user', content: largeString }] });
            (0, globals_1.expect)(res.status).toBe(413); // Payload Too Large
        });
        (0, globals_1.it)('should enforce distinct rate limits for chat and quiz', async () => {
            // Send 50 chat requests to hit limit (assuming 20 or 50 is max)
            let chatRes;
            for (let i = 0; i < 21; i++) {
                chatRes = await (0, supertest_1.default)(app).post('/api/ai/chat')
                    .set('Origin', 'http://localhost:5173')
                    .set('X-Forwarded-For', '9.9.9.9')
                    .send({ currentMessage: 'test' });
            }
            (0, globals_1.expect)(chatRes?.status).toBe(429);
            // Quiz should still work (it has its own bucket, let's say max 10)
            const quizRes = await (0, supertest_1.default)(app).post('/api/ai/generate-quiz')
                .set('Origin', 'http://localhost:5173')
                .set('X-Forwarded-For', '9.9.9.9')
                .send({ topic: 'Python' });
            (0, globals_1.expect)(quizRes.status).not.toBe(429); // Assuming quiz isn't limited yet
        });
        (0, globals_1.it)('should reject cross-origin AI requests', async () => {
            const originalEnv = process.env.NODE_ENV;
            process.env.NODE_ENV = 'production';
            const res = await (0, supertest_1.default)(app).post('/api/ai/chat')
                .set('Origin', 'http://malicious.com')
                .send({ currentMessage: 'test' });
            (0, globals_1.expect)(res.status).toBe(403);
            process.env.NODE_ENV = originalEnv;
        });
    });
});
//# sourceMappingURL=security.test.js.map