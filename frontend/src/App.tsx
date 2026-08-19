import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import LessonPage from './pages/LessonPage';
import ProgressPage from './pages/ProgressPage';
import AITutorPage from './pages/AITutorPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
        
        {/* Auth Routes */}
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        
        {/* Protected Routes */}
        <Route path="/progress" element={
          <ProtectedRoute>
            <ProgressPage />
          </ProtectedRoute>
        } />
        
        {/* We can choose to protect AI Tutor or let it run in Demo mode if unauthenticated.
            The requirements say: 'Require sign-in before: Saving AI-generated quiz attempts to the account.'
            For now, AI Tutor stays accessible, but saving requires auth. */}
        <Route path="/ai-tutor" element={<AITutorPage />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
