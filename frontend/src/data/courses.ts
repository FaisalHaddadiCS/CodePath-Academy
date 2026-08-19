import type { LocalizedText, LocalizedArray } from '../utils/language';

export interface Course {
  id: string;
  title: LocalizedText | string;
  description: LocalizedText | string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonIds: string[];
  color: string;
  estimatedHours: number;
  outcomes: LocalizedArray | string[];
}

export const COURSES: Course[] = [
  {
    id: 'python-fundamentals',
    title: { en: 'Programming Fundamentals with Python', ar: 'أساسيات البرمجة باستخدام بايثون' },
    description: { 
      en: 'Master the fundamentals of Programming Fundamentals with Python across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات البرمجة باستخدام بايثون عبر 10 وحدات شاملة.'
    },
    icon: '🐍',
    difficulty: 'Beginner',
    lessonIds: ['python-fundamentals-l1', 'python-fundamentals-l2', 'python-fundamentals-l3', 'python-fundamentals-l4', 'python-fundamentals-l5', 'python-fundamentals-l6', 'python-fundamentals-l7', 'python-fundamentals-l8', 'python-fundamentals-l9', 'python-fundamentals-l10'],
    color: '#3b82f6',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Programming Fundamentals with Python',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات البرمجة باستخدام بايثون',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'oop',
    title: { en: 'Object-Oriented Programming', ar: 'البرمجة كائنية التوجه' },
    description: { 
      en: 'Master the fundamentals of Object-Oriented Programming across 10 comprehensive modules.',
      ar: 'أتقن أساسيات البرمجة كائنية التوجه عبر 10 وحدات شاملة.'
    },
    icon: '📦',
    difficulty: 'Beginner',
    lessonIds: ['oop-l1', 'oop-l2', 'oop-l3', 'oop-l4', 'oop-l5', 'oop-l6', 'oop-l7', 'oop-l8', 'oop-l9', 'oop-l10'],
    color: '#8b5cf6',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Object-Oriented Programming',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ البرمجة كائنية التوجه',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'dsa',
    title: { en: 'Data Structures and Algorithms', ar: 'هياكل البيانات والخوارزميات' },
    description: { 
      en: 'Master the fundamentals of Data Structures and Algorithms across 10 comprehensive modules.',
      ar: 'أتقن أساسيات هياكل البيانات والخوارزميات عبر 10 وحدات شاملة.'
    },
    icon: '🌲',
    difficulty: 'Beginner',
    lessonIds: ['dsa-l1', 'dsa-l2', 'dsa-l3', 'dsa-l4', 'dsa-l5', 'dsa-l6', 'dsa-l7', 'dsa-l8', 'dsa-l9', 'dsa-l10'],
    color: '#10b981',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Data Structures and Algorithms',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ هياكل البيانات والخوارزميات',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'databases',
    title: { en: 'Databases and SQL', ar: 'قواعد البيانات و SQL' },
    description: { 
      en: 'Master the fundamentals of Databases and SQL across 10 comprehensive modules.',
      ar: 'أتقن أساسيات قواعد البيانات و SQL عبر 10 وحدات شاملة.'
    },
    icon: '🗄️',
    difficulty: 'Intermediate',
    lessonIds: ['databases-l1', 'databases-l2', 'databases-l3', 'databases-l4', 'databases-l5', 'databases-l6', 'databases-l7', 'databases-l8', 'databases-l9', 'databases-l10'],
    color: '#f59e0b',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Databases and SQL',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ قواعد البيانات و SQL',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'networking',
    title: { en: 'Networking Fundamentals', ar: 'أساسيات الشبكات' },
    description: { 
      en: 'Master the fundamentals of Networking Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات الشبكات عبر 10 وحدات شاملة.'
    },
    icon: '🌐',
    difficulty: 'Intermediate',
    lessonIds: ['networking-l1', 'networking-l2', 'networking-l3', 'networking-l4', 'networking-l5', 'networking-l6', 'networking-l7', 'networking-l8', 'networking-l9', 'networking-l10'],
    color: '#06b6d4',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Networking Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات الشبكات',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'cybersecurity',
    title: { en: 'Defensive Cybersecurity Fundamentals', ar: 'الأمن السيبراني الدفاعي' },
    description: { 
      en: 'Master the fundamentals of Defensive Cybersecurity Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات الأمن السيبراني الدفاعي عبر 10 وحدات شاملة.'
    },
    icon: '🛡️',
    difficulty: 'Intermediate',
    lessonIds: ['cybersecurity-l1', 'cybersecurity-l2', 'cybersecurity-l3', 'cybersecurity-l4', 'cybersecurity-l5', 'cybersecurity-l6', 'cybersecurity-l7', 'cybersecurity-l8', 'cybersecurity-l9', 'cybersecurity-l10'],
    color: '#ef4444',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Defensive Cybersecurity Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ الأمن السيبراني الدفاعي',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'ai-ml',
    title: { en: 'Artificial Intelligence and Machine Learning Basics', ar: 'الذكاء الاصطناعي وتعلم الآلة' },
    description: { 
      en: 'Master the fundamentals of Artificial Intelligence and Machine Learning Basics across 10 comprehensive modules.',
      ar: 'أتقن أساسيات الذكاء الاصطناعي وتعلم الآلة عبر 10 وحدات شاملة.'
    },
    icon: '🤖',
    difficulty: 'Intermediate',
    lessonIds: ['ai-ml-l1', 'ai-ml-l2', 'ai-ml-l3', 'ai-ml-l4', 'ai-ml-l5', 'ai-ml-l6', 'ai-ml-l7', 'ai-ml-l8', 'ai-ml-l9', 'ai-ml-l10'],
    color: '#ec4899',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Artificial Intelligence and Machine Learning Basics',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ الذكاء الاصطناعي وتعلم الآلة',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'js-fundamentals',
    title: { en: 'JavaScript Fundamentals', ar: 'أساسيات جافا سكريبت' },
    description: { 
      en: 'Master the fundamentals of JavaScript Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات جافا سكريبت عبر 10 وحدات شاملة.'
    },
    icon: '⚡',
    difficulty: 'Advanced',
    lessonIds: ['js-fundamentals-l1', 'js-fundamentals-l2', 'js-fundamentals-l3', 'js-fundamentals-l4', 'js-fundamentals-l5', 'js-fundamentals-l6', 'js-fundamentals-l7', 'js-fundamentals-l8', 'js-fundamentals-l9', 'js-fundamentals-l10'],
    color: '#f97316',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of JavaScript Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات جافا سكريبت',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'web-dev',
    title: { en: 'Web Development Fundamentals', ar: 'أساسيات تطوير الويب' },
    description: { 
      en: 'Master the fundamentals of Web Development Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات تطوير الويب عبر 10 وحدات شاملة.'
    },
    icon: '🕸️',
    difficulty: 'Advanced',
    lessonIds: ['web-dev-l1', 'web-dev-l2', 'web-dev-l3', 'web-dev-l4', 'web-dev-l5', 'web-dev-l6', 'web-dev-l7', 'web-dev-l8', 'web-dev-l9', 'web-dev-l10'],
    color: '#14b8a6',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Web Development Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات تطوير الويب',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'os',
    title: { en: 'Operating Systems Fundamentals', ar: 'أساسيات نظم التشغيل' },
    description: { 
      en: 'Master the fundamentals of Operating Systems Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات نظم التشغيل عبر 10 وحدات شاملة.'
    },
    icon: '💻',
    difficulty: 'Advanced',
    lessonIds: ['os-l1', 'os-l2', 'os-l3', 'os-l4', 'os-l5', 'os-l6', 'os-l7', 'os-l8', 'os-l9', 'os-l10'],
    color: '#6366f1',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Operating Systems Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات نظم التشغيل',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'comp-arch',
    title: { en: 'Computer Architecture and Digital Logic', ar: 'هيكلية الحاسب والمنطق الرقمي' },
    description: { 
      en: 'Master the fundamentals of Computer Architecture and Digital Logic across 10 comprehensive modules.',
      ar: 'أتقن أساسيات هيكلية الحاسب والمنطق الرقمي عبر 10 وحدات شاملة.'
    },
    icon: '⚙️',
    difficulty: 'Advanced',
    lessonIds: ['comp-arch-l1', 'comp-arch-l2', 'comp-arch-l3', 'comp-arch-l4', 'comp-arch-l5', 'comp-arch-l6', 'comp-arch-l7', 'comp-arch-l8', 'comp-arch-l9', 'comp-arch-l10'],
    color: '#eab308',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Computer Architecture and Digital Logic',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ هيكلية الحاسب والمنطق الرقمي',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'swe-git',
    title: { en: 'Software Engineering and Git', ar: 'هندسة البرمجيات و Git' },
    description: { 
      en: 'Master the fundamentals of Software Engineering and Git across 10 comprehensive modules.',
      ar: 'أتقن أساسيات هندسة البرمجيات و Git عبر 10 وحدات شاملة.'
    },
    icon: '🛠️',
    difficulty: 'Advanced',
    lessonIds: ['swe-git-l1', 'swe-git-l2', 'swe-git-l3', 'swe-git-l4', 'swe-git-l5', 'swe-git-l6', 'swe-git-l7', 'swe-git-l8', 'swe-git-l9', 'swe-git-l10'],
    color: '#84cc16',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Software Engineering and Git',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ هندسة البرمجيات و Git',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'cloud',
    title: { en: 'Cloud Computing Fundamentals', ar: 'أساسيات الحوسبة السحابية' },
    description: { 
      en: 'Master the fundamentals of Cloud Computing Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات الحوسبة السحابية عبر 10 وحدات شاملة.'
    },
    icon: '☁️',
    difficulty: 'Advanced',
    lessonIds: ['cloud-l1', 'cloud-l2', 'cloud-l3', 'cloud-l4', 'cloud-l5', 'cloud-l6', 'cloud-l7', 'cloud-l8', 'cloud-l9', 'cloud-l10'],
    color: '#0ea5e9',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Cloud Computing Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات الحوسبة السحابية',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'linux',
    title: { en: 'Linux and Command Line Fundamentals', ar: 'أساسيات لينكس وسطر الأوامر' },
    description: { 
      en: 'Master the fundamentals of Linux and Command Line Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات لينكس وسطر الأوامر عبر 10 وحدات شاملة.'
    },
    icon: '🐧',
    difficulty: 'Advanced',
    lessonIds: ['linux-l1', 'linux-l2', 'linux-l3', 'linux-l4', 'linux-l5', 'linux-l6', 'linux-l7', 'linux-l8', 'linux-l9', 'linux-l10'],
    color: '#d946ef',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Linux and Command Line Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات لينكس وسطر الأوامر',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'discrete-math',
    title: { en: 'Discrete Mathematics for Computer Science', ar: 'الرياضيات المتقطعة لعلوم الحاسب' },
    description: { 
      en: 'Master the fundamentals of Discrete Mathematics for Computer Science across 10 comprehensive modules.',
      ar: 'أتقن أساسيات الرياضيات المتقطعة لعلوم الحاسب عبر 10 وحدات شاملة.'
    },
    icon: '🔢',
    difficulty: 'Advanced',
    lessonIds: ['discrete-math-l1', 'discrete-math-l2', 'discrete-math-l3', 'discrete-math-l4', 'discrete-math-l5', 'discrete-math-l6', 'discrete-math-l7', 'discrete-math-l8', 'discrete-math-l9', 'discrete-math-l10'],
    color: '#f43f5e',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Discrete Mathematics for Computer Science',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ الرياضيات المتقطعة لعلوم الحاسب',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'theory-comp',
    title: { en: 'Theory of Computation', ar: 'نظرية الحوسبة' },
    description: { 
      en: 'Master the fundamentals of Theory of Computation across 10 comprehensive modules.',
      ar: 'أتقن أساسيات نظرية الحوسبة عبر 10 وحدات شاملة.'
    },
    icon: '🧠',
    difficulty: 'Advanced',
    lessonIds: ['theory-comp-l1', 'theory-comp-l2', 'theory-comp-l3', 'theory-comp-l4', 'theory-comp-l5', 'theory-comp-l6', 'theory-comp-l7', 'theory-comp-l8', 'theory-comp-l9', 'theory-comp-l10'],
    color: '#8b5cf6',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Theory of Computation',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ نظرية الحوسبة',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'api-backend',
    title: { en: 'API Design and Backend Development', ar: 'تصميم واجهات برمجة التطبيقات وتطوير الواجهة الخلفية' },
    description: { 
      en: 'Master the fundamentals of API Design and Backend Development across 10 comprehensive modules.',
      ar: 'أتقن أساسيات تصميم واجهات برمجة التطبيقات وتطوير الواجهة الخلفية عبر 10 وحدات شاملة.'
    },
    icon: '🔌',
    difficulty: 'Advanced',
    lessonIds: ['api-backend-l1', 'api-backend-l2', 'api-backend-l3', 'api-backend-l4', 'api-backend-l5', 'api-backend-l6', 'api-backend-l7', 'api-backend-l8', 'api-backend-l9', 'api-backend-l10'],
    color: '#10b981',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of API Design and Backend Development',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ تصميم واجهات برمجة التطبيقات وتطوير الواجهة الخلفية',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'devops',
    title: { en: 'DevOps and CI/CD Fundamentals', ar: 'أساسيات DevOps والتكامل/التسليم المستمر' },
    description: { 
      en: 'Master the fundamentals of DevOps and CI/CD Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات DevOps والتكامل/التسليم المستمر عبر 10 وحدات شاملة.'
    },
    icon: '🚀',
    difficulty: 'Advanced',
    lessonIds: ['devops-l1', 'devops-l2', 'devops-l3', 'devops-l4', 'devops-l5', 'devops-l6', 'devops-l7', 'devops-l8', 'devops-l9', 'devops-l10'],
    color: '#3b82f6',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of DevOps and CI/CD Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات DevOps والتكامل/التسليم المستمر',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'mobile-app',
    title: { en: 'Mobile App Development Fundamentals', ar: 'أساسيات تطوير تطبيقات الأجهزة المحمولة' },
    description: { 
      en: 'Master the fundamentals of Mobile App Development Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات تطوير تطبيقات الأجهزة المحمولة عبر 10 وحدات شاملة.'
    },
    icon: '📱',
    difficulty: 'Advanced',
    lessonIds: ['mobile-app-l1', 'mobile-app-l2', 'mobile-app-l3', 'mobile-app-l4', 'mobile-app-l5', 'mobile-app-l6', 'mobile-app-l7', 'mobile-app-l8', 'mobile-app-l9', 'mobile-app-l10'],
    color: '#06b6d4',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Mobile App Development Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات تطوير تطبيقات الأجهزة المحمولة',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
  {
    id: 'computer-graphics',
    title: { en: 'Computer Graphics Fundamentals', ar: 'أساسيات رسومات الحاسب' },
    description: { 
      en: 'Master the fundamentals of Computer Graphics Fundamentals across 10 comprehensive modules.',
      ar: 'أتقن أساسيات أساسيات رسومات الحاسب عبر 10 وحدات شاملة.'
    },
    icon: '🎮',
    difficulty: 'Advanced',
    lessonIds: ['computer-graphics-l1', 'computer-graphics-l2', 'computer-graphics-l3', 'computer-graphics-l4', 'computer-graphics-l5', 'computer-graphics-l6', 'computer-graphics-l7', 'computer-graphics-l8', 'computer-graphics-l9', 'computer-graphics-l10'],
    color: '#f59e0b',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of Computer Graphics Fundamentals',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ أساسيات رسومات الحاسب',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },
];
