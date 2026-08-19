import { type Lesson } from '../lessons';

export const js_fundamentals_lessons: Lesson[] = [
  {
    id: 'js-fundamentals-l1',
    title: { en: 'Variables & Data Types', ar: 'المتغيرات وأنواع البيانات' },
    description: { 
      en: 'A comprehensive lesson on Variables & Data Types covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المتغيرات وأنواع البيانات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Variables & Data Types',
        'Identify key use cases for Variables & Data Types in computer science',
        'Apply Variables & Data Types to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Variables & Data Types',
        'تحديد حالات الاستخدام الرئيسية لـ Variables & Data Types في علوم الحاسب',
        'تطبيق Variables & Data Types لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l1-s1',
        title: { en: 'Introduction to Variables & Data Types', ar: 'مقدمة في المتغيرات وأنواع البيانات' },
        type: 'concept',
        content: {
          en: 'Variables & Data Types is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Variables & Data Types, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المتغيرات وأنواع البيانات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المتغيرات وأنواع البيانات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Variables & Data Types relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المتغيرات وأنواع البيانات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Variables & Data Types, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المتغيرات وأنواع البيانات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Variables & Data Types by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Variables & Data Types to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المتغيرات وأنواع البيانات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Variables & Data Types is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المتغيرات وأنواع البيانات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Variables & Data Types is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المتغيرات وأنواع البيانات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l1-q1',
        question: {
          en: 'What is the primary benefit of Variables & Data Types?',
          ar: 'ما هي الفائدة الرئيسية من المتغيرات وأنواع البيانات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Variables & Data Types is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المتغيرات وأنواع البيانات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l2',
    title: { en: 'Functions & Scope', ar: 'الدوال والنطاق' },
    description: { 
      en: 'A comprehensive lesson on Functions & Scope covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الدوال والنطاق يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Functions & Scope',
        'Identify key use cases for Functions & Scope in computer science',
        'Apply Functions & Scope to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Functions & Scope',
        'تحديد حالات الاستخدام الرئيسية لـ Functions & Scope في علوم الحاسب',
        'تطبيق Functions & Scope لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l2-s1',
        title: { en: 'Introduction to Functions & Scope', ar: 'مقدمة في الدوال والنطاق' },
        type: 'concept',
        content: {
          en: 'Functions & Scope is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Functions & Scope, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الدوال والنطاق مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الدوال والنطاق، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Functions & Scope relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الدوال والنطاق على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Functions & Scope, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الدوال والنطاق، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Functions & Scope by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Functions & Scope to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الدوال والنطاق من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Functions & Scope is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الدوال والنطاق ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Functions & Scope is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الدوال والنطاق أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l2-q1',
        question: {
          en: 'What is the primary benefit of Functions & Scope?',
          ar: 'ما هي الفائدة الرئيسية من الدوال والنطاق؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Functions & Scope is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الدوال والنطاق لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l3',
    title: { en: 'Arrays & Objects', ar: 'المصفوفات والكائنات' },
    description: { 
      en: 'A comprehensive lesson on Arrays & Objects covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المصفوفات والكائنات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Arrays & Objects',
        'Identify key use cases for Arrays & Objects in computer science',
        'Apply Arrays & Objects to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Arrays & Objects',
        'تحديد حالات الاستخدام الرئيسية لـ Arrays & Objects في علوم الحاسب',
        'تطبيق Arrays & Objects لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l3-s1',
        title: { en: 'Introduction to Arrays & Objects', ar: 'مقدمة في المصفوفات والكائنات' },
        type: 'concept',
        content: {
          en: 'Arrays & Objects is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Arrays & Objects, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المصفوفات والكائنات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المصفوفات والكائنات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Arrays & Objects relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المصفوفات والكائنات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Arrays & Objects, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المصفوفات والكائنات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Arrays & Objects by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Arrays & Objects to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المصفوفات والكائنات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Arrays & Objects is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المصفوفات والكائنات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Arrays & Objects is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المصفوفات والكائنات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l3-q1',
        question: {
          en: 'What is the primary benefit of Arrays & Objects?',
          ar: 'ما هي الفائدة الرئيسية من المصفوفات والكائنات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Arrays & Objects is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المصفوفات والكائنات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l4',
    title: { en: 'DOM Manipulation', ar: 'التعامل مع DOM' },
    description: { 
      en: 'A comprehensive lesson on DOM Manipulation covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعامل مع DOM يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of DOM Manipulation',
        'Identify key use cases for DOM Manipulation in computer science',
        'Apply DOM Manipulation to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ DOM Manipulation',
        'تحديد حالات الاستخدام الرئيسية لـ DOM Manipulation في علوم الحاسب',
        'تطبيق DOM Manipulation لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l4-s1',
        title: { en: 'Introduction to DOM Manipulation', ar: 'مقدمة في التعامل مع DOM' },
        type: 'concept',
        content: {
          en: 'DOM Manipulation is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding DOM Manipulation, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعامل مع DOM مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعامل مع DOM، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of DOM Manipulation relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعامل مع DOM على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without DOM Manipulation, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعامل مع DOM، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with DOM Manipulation by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of DOM Manipulation to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعامل مع DOM من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, DOM Manipulation is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعامل مع DOM ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['DOM Manipulation is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعامل مع DOM أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l4-q1',
        question: {
          en: 'What is the primary benefit of DOM Manipulation?',
          ar: 'ما هي الفائدة الرئيسية من التعامل مع DOM؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'DOM Manipulation is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعامل مع DOM لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l5',
    title: { en: 'Events', ar: 'الأحداث' },
    description: { 
      en: 'A comprehensive lesson on Events covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الأحداث يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Events',
        'Identify key use cases for Events in computer science',
        'Apply Events to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Events',
        'تحديد حالات الاستخدام الرئيسية لـ Events في علوم الحاسب',
        'تطبيق Events لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l5-s1',
        title: { en: 'Introduction to Events', ar: 'مقدمة في الأحداث' },
        type: 'concept',
        content: {
          en: 'Events is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Events, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الأحداث مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الأحداث، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Events relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الأحداث على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Events, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الأحداث، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Events by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Events to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الأحداث من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Events is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الأحداث ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Events is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الأحداث أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l5-q1',
        question: {
          en: 'What is the primary benefit of Events?',
          ar: 'ما هي الفائدة الرئيسية من الأحداث؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Events is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الأحداث لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l6',
    title: { en: 'ES6+ Features', ar: 'ميزات ES6+' },
    description: { 
      en: 'A comprehensive lesson on ES6+ Features covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول ميزات ES6+ يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of ES6+ Features',
        'Identify key use cases for ES6+ Features in computer science',
        'Apply ES6+ Features to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ ES6+ Features',
        'تحديد حالات الاستخدام الرئيسية لـ ES6+ Features في علوم الحاسب',
        'تطبيق ES6+ Features لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l6-s1',
        title: { en: 'Introduction to ES6+ Features', ar: 'مقدمة في ميزات ES6+' },
        type: 'concept',
        content: {
          en: 'ES6+ Features is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding ES6+ Features, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد ميزات ES6+ مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم ميزات ES6+، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of ES6+ Features relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ ميزات ES6+ على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without ES6+ Features, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون ميزات ES6+، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with ES6+ Features by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of ES6+ Features to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع ميزات ES6+ من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, ES6+ Features is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، ميزات ES6+ ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['ES6+ Features is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['ميزات ES6+ أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l6-q1',
        question: {
          en: 'What is the primary benefit of ES6+ Features?',
          ar: 'ما هي الفائدة الرئيسية من ميزات ES6+؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'ES6+ Features is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم ميزات ES6+ لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l7',
    title: { en: 'Promises & Async/Await', ar: 'الوعود والبرمجة غير المتزامنة' },
    description: { 
      en: 'A comprehensive lesson on Promises & Async/Await covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الوعود والبرمجة غير المتزامنة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Promises & Async/Await',
        'Identify key use cases for Promises & Async/Await in computer science',
        'Apply Promises & Async/Await to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Promises & Async/Await',
        'تحديد حالات الاستخدام الرئيسية لـ Promises & Async/Await في علوم الحاسب',
        'تطبيق Promises & Async/Await لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l7-s1',
        title: { en: 'Introduction to Promises & Async/Await', ar: 'مقدمة في الوعود والبرمجة غير المتزامنة' },
        type: 'concept',
        content: {
          en: 'Promises & Async/Await is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Promises & Async/Await, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الوعود والبرمجة غير المتزامنة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الوعود والبرمجة غير المتزامنة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Promises & Async/Await relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الوعود والبرمجة غير المتزامنة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Promises & Async/Await, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الوعود والبرمجة غير المتزامنة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Promises & Async/Await by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Promises & Async/Await to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الوعود والبرمجة غير المتزامنة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Promises & Async/Await is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الوعود والبرمجة غير المتزامنة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Promises & Async/Await is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الوعود والبرمجة غير المتزامنة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l7-q1',
        question: {
          en: 'What is the primary benefit of Promises & Async/Await?',
          ar: 'ما هي الفائدة الرئيسية من الوعود والبرمجة غير المتزامنة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Promises & Async/Await is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الوعود والبرمجة غير المتزامنة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l8',
    title: { en: 'Error Handling', ar: 'معالجة الأخطاء' },
    description: { 
      en: 'A comprehensive lesson on Error Handling covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول معالجة الأخطاء يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Error Handling',
        'Identify key use cases for Error Handling in computer science',
        'Apply Error Handling to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Error Handling',
        'تحديد حالات الاستخدام الرئيسية لـ Error Handling في علوم الحاسب',
        'تطبيق Error Handling لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l8-s1',
        title: { en: 'Introduction to Error Handling', ar: 'مقدمة في معالجة الأخطاء' },
        type: 'concept',
        content: {
          en: 'Error Handling is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Error Handling, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد معالجة الأخطاء مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم معالجة الأخطاء، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Error Handling relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ معالجة الأخطاء على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Error Handling, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون معالجة الأخطاء، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Error Handling by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Error Handling to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع معالجة الأخطاء من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Error Handling is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، معالجة الأخطاء ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Error Handling is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['معالجة الأخطاء أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l8-q1',
        question: {
          en: 'What is the primary benefit of Error Handling?',
          ar: 'ما هي الفائدة الرئيسية من معالجة الأخطاء؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Error Handling is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم معالجة الأخطاء لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l9',
    title: { en: 'Web APIs', ar: 'واجهات الويب API' },
    description: { 
      en: 'A comprehensive lesson on Web APIs covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول واجهات الويب API يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Web APIs',
        'Identify key use cases for Web APIs in computer science',
        'Apply Web APIs to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Web APIs',
        'تحديد حالات الاستخدام الرئيسية لـ Web APIs في علوم الحاسب',
        'تطبيق Web APIs لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l9-s1',
        title: { en: 'Introduction to Web APIs', ar: 'مقدمة في واجهات الويب API' },
        type: 'concept',
        content: {
          en: 'Web APIs is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Web APIs, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد واجهات الويب API مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم واجهات الويب API، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Web APIs relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ واجهات الويب API على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Web APIs, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون واجهات الويب API، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Web APIs by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Web APIs to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع واجهات الويب API من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Web APIs is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، واجهات الويب API ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Web APIs is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['واجهات الويب API أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l9-q1',
        question: {
          en: 'What is the primary benefit of Web APIs?',
          ar: 'ما هي الفائدة الرئيسية من واجهات الويب API؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Web APIs is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم واجهات الويب API لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'js-fundamentals-l10',
    title: { en: 'Modules', ar: 'الوحدات' },
    description: { 
      en: 'A comprehensive lesson on Modules covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الوحدات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Modules',
        'Identify key use cases for Modules in computer science',
        'Apply Modules to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Modules',
        'تحديد حالات الاستخدام الرئيسية لـ Modules في علوم الحاسب',
        'تطبيق Modules لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'js-fundamentals-l10-s1',
        title: { en: 'Introduction to Modules', ar: 'مقدمة في الوحدات' },
        type: 'concept',
        content: {
          en: 'Modules is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Modules, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الوحدات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الوحدات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'js-fundamentals-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Modules relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الوحدات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'js-fundamentals-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Modules, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الوحدات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'js-fundamentals-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Modules by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Modules to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الوحدات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'js-fundamentals-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Modules is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الوحدات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Modules is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الوحدات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'js-fundamentals-l10-q1',
        question: {
          en: 'What is the primary benefit of Modules?',
          ar: 'ما هي الفائدة الرئيسية من الوحدات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Modules is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الوحدات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
