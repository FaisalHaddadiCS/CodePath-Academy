import type { LocalizedText, LocalizedArray } from '../utils/language';

export type SlideType = 'concept' | 'example' | 'code' | 'analogy' | 'mistakes' | 'takeaways';

export interface CodeExample {
  title: LocalizedText | string;
  code: string;
  expectedOutput: string;
  explanation?: LocalizedText | string;
  language?: string;
}

export interface Slide {
  id: string;
  title: LocalizedText | string;
  type: SlideType;
  content?: LocalizedText | string;
  codeExample?: CodeExample;
  bulletPoints?: LocalizedArray | string[];
}

export interface QuizQuestion {
  id: string;
  question: LocalizedText | string;
  options: LocalizedArray | string[];
  correctAnswer: number;
  explanation: LocalizedText | string;
}

export interface Lesson {
  id: string;
  title: LocalizedText | string;
  description: LocalizedText | string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: LocalizedArray | string[];
  slides: Slide[];
  quiz: QuizQuestion[];
}

import { COURSES } from './courses';
export const courses = COURSES;
import { python_fundamentals_lessons } from './courses/python-fundamentals';
import { oop_lessons } from './courses/oop';
import { dsa_lessons } from './courses/dsa';
import { databases_lessons } from './courses/databases';
import { networking_lessons } from './courses/networking';
import { cybersecurity_lessons } from './courses/cybersecurity';
import { ai_ml_lessons } from './courses/ai-ml';
import { js_fundamentals_lessons } from './courses/js-fundamentals';
import { web_dev_lessons } from './courses/web-dev';
import { os_lessons } from './courses/os';
import { comp_arch_lessons } from './courses/comp-arch';
import { swe_git_lessons } from './courses/swe-git';
import { cloud_lessons } from './courses/cloud';
import { linux_lessons } from './courses/linux';
import { discrete_math_lessons } from './courses/discrete-math';
import { theory_comp_lessons } from './courses/theory-comp';
import { api_backend_lessons } from './courses/api-backend';
import { devops_lessons } from './courses/devops';
import { mobile_app_lessons } from './courses/mobile-app';
import { computer_graphics_lessons } from './courses/computer-graphics';

export const LESSONS: Lesson[] = [
  ...python_fundamentals_lessons,
  ...oop_lessons,
  ...dsa_lessons,
  ...databases_lessons,
  ...networking_lessons,
  ...cybersecurity_lessons,
  ...ai_ml_lessons,
  ...js_fundamentals_lessons,
  ...web_dev_lessons,
  ...os_lessons,
  ...comp_arch_lessons,
  ...swe_git_lessons,
  ...cloud_lessons,
  ...linux_lessons,
  ...discrete_math_lessons,
  ...theory_comp_lessons,
  ...api_backend_lessons,
  ...devops_lessons,
  ...mobile_app_lessons,
  ...computer_graphics_lessons,
];

export const getLessonById = (id: string): Lesson | undefined => LESSONS.find(l => l.id === id);
