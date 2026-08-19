import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';


// ============================================================
// Types
// ============================================================

export interface QuizResult {
  lessonId: string;
  lessonTitle: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: number;
  answers: Record<string, number>; // questionId -> selectedIndex
}

export interface LearningState {
  currentCourseId: string | null;
  currentLessonId: string | null;
  currentSlideIndex: number;
  completedLessonIds: Set<string>;
  quizResults: QuizResult[];
  lastVisited: { courseId: string; lessonId: string; slideIndex: number } | null;
}

export interface LearningContextType extends LearningState {
  setCurrentCourse: (courseId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
  setCurrentSlide: (index: number) => void;
  markLessonComplete: (lessonId: string) => void;
  saveQuizResult: (result: QuizResult) => void;
  getCourseProgress: (_courseId: string, lessonIds: string[]) => number;
  getQuizResult: (lessonId: string) => QuizResult | undefined;
  isLessonComplete: (lessonId: string) => boolean;
  resetProgress: () => void;
}

// ============================================================
// localStorage persistence
// ============================================================

const STORAGE_KEYS = {
  completedLessons: 'cs_learning_completed_lessons',
  quizResults: 'cs_learning_quiz_results',
  lastVisited: 'cs_learning_last_visited',
};

function loadCompletedLessons(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.completedLessons);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    // ignore
  }
  return new Set();
}

function saveCompletedLessons(ids: Set<string>): void {
  localStorage.setItem(STORAGE_KEYS.completedLessons, JSON.stringify([...ids]));
}

function loadQuizResults(): QuizResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.quizResults);
    if (raw) return JSON.parse(raw) as QuizResult[];
  } catch {
    // ignore
  }
  return [];
}

function saveQuizResultsToStorage(results: QuizResult[]): void {
  localStorage.setItem(STORAGE_KEYS.quizResults, JSON.stringify(results));
}

function loadLastVisited(): LearningState['lastVisited'] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.lastVisited);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
}

function saveLastVisited(lv: LearningState['lastVisited']): void {
  if (lv) {
    localStorage.setItem(STORAGE_KEYS.lastVisited, JSON.stringify(lv));
  }
}

// ============================================================
// Context
// ============================================================

const LearningContext = createContext<LearningContextType | null>(null);

export const LearningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCourseId, setCurrentCourseIdState] = useState<string | null>(null);
  const [currentLessonId, setCurrentLessonIdState] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndexState] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(loadCompletedLessons);
  const [quizResults, setQuizResults] = useState<QuizResult[]>(loadQuizResults);
  const [lastVisited, setLastVisitedState] = useState<LearningState['lastVisited']>(loadLastVisited);

  const setCurrentCourse = useCallback((courseId: string) => {
    setCurrentCourseIdState(courseId);
  }, []);

  const setCurrentLesson = useCallback((lessonId: string) => {
    setCurrentLessonIdState(lessonId);
    setCurrentSlideIndexState(0);
  }, []);

  const setCurrentSlide = useCallback((index: number) => {
    setCurrentSlideIndexState(index);
    // update last visited
    setCurrentCourseIdState(prev => {
      setCurrentLessonIdState(lessonId => {
        const lv = { courseId: prev || '', lessonId: lessonId || '', slideIndex: index };
        setLastVisitedState(lv);
        saveLastVisited(lv);
        return lessonId;
      });
      return prev;
    });
  }, []);



  const markLessonComplete = useCallback((id: string) => {
    setCompletedLessonIds(prev => {
      const next = new Set(prev);
      next.add(id);
      saveCompletedLessons(next);
      return next;
    });
  }, []);

  const saveQuizResult = useCallback((result: QuizResult) => {
    setQuizResults(prev => {
      const filtered = prev.filter(r => r.lessonId !== result.lessonId);
      const next = [result, ...filtered];
      saveQuizResultsToStorage(next);
      return next;
    });
    markLessonComplete(result.lessonId);
  }, [markLessonComplete]);

  const getCourseProgress = useCallback((_courseId: string, lessonIds: string[]): number => {
    if (lessonIds.length === 0) return 0;
    const completed = lessonIds.filter(id => completedLessonIds.has(id)).length;
    return Math.round((completed / lessonIds.length) * 100);
  }, [completedLessonIds]);

  const getQuizResult = useCallback((lessonId: string): QuizResult | undefined => {
    return quizResults.find(r => r.lessonId === lessonId);
  }, [quizResults]);

  const isLessonComplete = useCallback((lessonId: string): boolean => {
    return completedLessonIds.has(lessonId);
  }, [completedLessonIds]);

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.completedLessons);
    localStorage.removeItem(STORAGE_KEYS.quizResults);
    localStorage.removeItem(STORAGE_KEYS.lastVisited);
    setCompletedLessonIds(new Set());
    setQuizResults([]);
    setLastVisitedState(null);
  }, []);

  const value: LearningContextType = {
    currentCourseId,
    currentLessonId,
    currentSlideIndex,
    completedLessonIds,
    quizResults,
    lastVisited,
    setCurrentCourse,
    setCurrentLesson,
    setCurrentSlide,
    markLessonComplete,
    saveQuizResult,
    getCourseProgress,
    getQuizResult,
    isLessonComplete,
    resetProgress,
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = (): LearningContextType => {
  const ctx = useContext(LearningContext);
  if (!ctx) throw new Error('useLearning must be used within LearningProvider');
  return ctx;
};
