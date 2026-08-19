# CS Academy

CS Academy is a production-quality, scalable full-stack interactive educational platform designed for Computer Science students. It features structured courses, interactive slide-based lessons with code animations, dynamic quizzes, and an AI educational assistant powered by Google Gemini.

## Features

- **Interactive Lesson Player**: Slide-based microlearning with code animations.
- **AI Tutor**: Context-aware AI assistant that explains concepts, debugs code, and generates practice quizzes.
- **Dynamic Quizzes**: Test your knowledge and track your progress.
- **Secure Authentication**: JWT-based authentication with Argon2 password hashing.
- **Robust Architecture**: Layered backend (Express + Prisma + SQLite), scalable React frontend (Vite).
- **Security Best Practices**: Helmet, CORS, Input Validation (Zod), and Rate Limiting.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, React Router DOM, Zustand, Vanilla CSS.
- **Backend**: Node.js, Express, TypeScript, Prisma ORM, SQLite.
- **AI Integration**: Google Gemini API (`@google/genai`).

## Setup Instructions

### 1. Clone & Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Environment Variables

Create `.env` files in both the frontend (if needed) and backend directories.

**Backend `.env`:**
```env
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secure_random_string"
AI_API_KEY="your_google_gemini_api_key"
```

### 3. Database Setup

The project uses SQLite for easy local setup. Apply the schema and seed the initial curriculum:

```bash
cd backend
npx prisma db push
npx prisma generate
npx tsx src/seed.ts
```

### 4. Running the Application

**Start Backend (Development Mode):**
```bash
cd backend
npm run dev
```

**Start Frontend (Development Mode):**
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` (or similar) and the backend at `http://localhost:5000`.

## Security Notes

- The AI API key is strictly kept server-side and never exposed to the client.
- Strict rate limiting is applied to authentication and AI endpoints to prevent abuse.
- Input validation is handled via Zod schemas.
- Express is hardened using Helmet.
