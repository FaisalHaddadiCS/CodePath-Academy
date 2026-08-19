import { type Lesson } from '../lessons';

export const swe_git_lessons: Lesson[] = [
  {
    id: 'swe-git-l1',
    title: { en: 'SDLC', ar: 'دورة حياة تطوير البرمجيات' },
    description: { 
      en: 'A comprehensive lesson on SDLC covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول دورة حياة تطوير البرمجيات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of SDLC',
        'Identify key use cases for SDLC in computer science',
        'Apply SDLC to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ SDLC',
        'تحديد حالات الاستخدام الرئيسية لـ SDLC في علوم الحاسب',
        'تطبيق SDLC لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l1-s1',
        title: { en: 'Introduction to SDLC', ar: 'مقدمة في دورة حياة تطوير البرمجيات' },
        type: 'concept',
        content: {
          en: 'SDLC is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding SDLC, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد دورة حياة تطوير البرمجيات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم دورة حياة تطوير البرمجيات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of SDLC relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ دورة حياة تطوير البرمجيات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without SDLC, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون دورة حياة تطوير البرمجيات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with SDLC by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of SDLC to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع دورة حياة تطوير البرمجيات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, SDLC is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، دورة حياة تطوير البرمجيات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['SDLC is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['دورة حياة تطوير البرمجيات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l1-q1',
        question: {
          en: 'What is the primary benefit of SDLC?',
          ar: 'ما هي الفائدة الرئيسية من دورة حياة تطوير البرمجيات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'SDLC is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم دورة حياة تطوير البرمجيات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l2',
    title: { en: 'Agile & Scrum', ar: 'أجايل وسكروم' },
    description: { 
      en: 'A comprehensive lesson on Agile & Scrum covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أجايل وسكروم يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Agile & Scrum',
        'Identify key use cases for Agile & Scrum in computer science',
        'Apply Agile & Scrum to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Agile & Scrum',
        'تحديد حالات الاستخدام الرئيسية لـ Agile & Scrum في علوم الحاسب',
        'تطبيق Agile & Scrum لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l2-s1',
        title: { en: 'Introduction to Agile & Scrum', ar: 'مقدمة في أجايل وسكروم' },
        type: 'concept',
        content: {
          en: 'Agile & Scrum is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Agile & Scrum, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أجايل وسكروم مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أجايل وسكروم، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Agile & Scrum relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أجايل وسكروم على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Agile & Scrum, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أجايل وسكروم، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Agile & Scrum by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Agile & Scrum to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أجايل وسكروم من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Agile & Scrum is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أجايل وسكروم ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Agile & Scrum is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أجايل وسكروم أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l2-q1',
        question: {
          en: 'What is the primary benefit of Agile & Scrum?',
          ar: 'ما هي الفائدة الرئيسية من أجايل وسكروم؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Agile & Scrum is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أجايل وسكروم لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l3',
    title: { en: 'Version Control', ar: 'التحكم في الإصدارات' },
    description: { 
      en: 'A comprehensive lesson on Version Control covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التحكم في الإصدارات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Version Control',
        'Identify key use cases for Version Control in computer science',
        'Apply Version Control to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Version Control',
        'تحديد حالات الاستخدام الرئيسية لـ Version Control في علوم الحاسب',
        'تطبيق Version Control لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l3-s1',
        title: { en: 'Introduction to Version Control', ar: 'مقدمة في التحكم في الإصدارات' },
        type: 'concept',
        content: {
          en: 'Version Control is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Version Control, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التحكم في الإصدارات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التحكم في الإصدارات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Version Control relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التحكم في الإصدارات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Version Control, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التحكم في الإصدارات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Version Control by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Version Control to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التحكم في الإصدارات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Version Control is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التحكم في الإصدارات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Version Control is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التحكم في الإصدارات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l3-q1',
        question: {
          en: 'What is the primary benefit of Version Control?',
          ar: 'ما هي الفائدة الرئيسية من التحكم في الإصدارات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Version Control is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التحكم في الإصدارات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l4',
    title: { en: 'Git Basics', ar: 'أساسيات Git' },
    description: { 
      en: 'A comprehensive lesson on Git Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات Git يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Git Basics',
        'Identify key use cases for Git Basics in computer science',
        'Apply Git Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Git Basics',
        'تحديد حالات الاستخدام الرئيسية لـ Git Basics في علوم الحاسب',
        'تطبيق Git Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l4-s1',
        title: { en: 'Introduction to Git Basics', ar: 'مقدمة في أساسيات Git' },
        type: 'concept',
        content: {
          en: 'Git Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Git Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات Git مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات Git، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Git Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات Git على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Git Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات Git، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Git Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Git Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات Git من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Git Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات Git ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Git Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات Git أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l4-q1',
        question: {
          en: 'What is the primary benefit of Git Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات Git؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Git Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات Git لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l5',
    title: { en: 'Branching & Merging', ar: 'التفريع والدمج' },
    description: { 
      en: 'A comprehensive lesson on Branching & Merging covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التفريع والدمج يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Branching & Merging',
        'Identify key use cases for Branching & Merging in computer science',
        'Apply Branching & Merging to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Branching & Merging',
        'تحديد حالات الاستخدام الرئيسية لـ Branching & Merging في علوم الحاسب',
        'تطبيق Branching & Merging لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l5-s1',
        title: { en: 'Introduction to Branching & Merging', ar: 'مقدمة في التفريع والدمج' },
        type: 'concept',
        content: {
          en: 'Branching & Merging is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Branching & Merging, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التفريع والدمج مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التفريع والدمج، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Branching & Merging relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التفريع والدمج على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Branching & Merging, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التفريع والدمج، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Branching & Merging by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Branching & Merging to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التفريع والدمج من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Branching & Merging is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التفريع والدمج ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Branching & Merging is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التفريع والدمج أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l5-q1',
        question: {
          en: 'What is the primary benefit of Branching & Merging?',
          ar: 'ما هي الفائدة الرئيسية من التفريع والدمج؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Branching & Merging is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التفريع والدمج لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l6',
    title: { en: 'GitHub & Collaboration', ar: 'جيت هاب والتعاون' },
    description: { 
      en: 'A comprehensive lesson on GitHub & Collaboration covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول جيت هاب والتعاون يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of GitHub & Collaboration',
        'Identify key use cases for GitHub & Collaboration in computer science',
        'Apply GitHub & Collaboration to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ GitHub & Collaboration',
        'تحديد حالات الاستخدام الرئيسية لـ GitHub & Collaboration في علوم الحاسب',
        'تطبيق GitHub & Collaboration لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l6-s1',
        title: { en: 'Introduction to GitHub & Collaboration', ar: 'مقدمة في جيت هاب والتعاون' },
        type: 'concept',
        content: {
          en: 'GitHub & Collaboration is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding GitHub & Collaboration, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد جيت هاب والتعاون مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم جيت هاب والتعاون، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of GitHub & Collaboration relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ جيت هاب والتعاون على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without GitHub & Collaboration, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون جيت هاب والتعاون، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with GitHub & Collaboration by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of GitHub & Collaboration to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع جيت هاب والتعاون من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, GitHub & Collaboration is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، جيت هاب والتعاون ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['GitHub & Collaboration is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['جيت هاب والتعاون أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l6-q1',
        question: {
          en: 'What is the primary benefit of GitHub & Collaboration?',
          ar: 'ما هي الفائدة الرئيسية من جيت هاب والتعاون؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'GitHub & Collaboration is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم جيت هاب والتعاون لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l7',
    title: { en: 'Testing Basics', ar: 'أساسيات الاختبار' },
    description: { 
      en: 'A comprehensive lesson on Testing Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات الاختبار يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Testing Basics',
        'Identify key use cases for Testing Basics in computer science',
        'Apply Testing Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Testing Basics',
        'تحديد حالات الاستخدام الرئيسية لـ Testing Basics في علوم الحاسب',
        'تطبيق Testing Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l7-s1',
        title: { en: 'Introduction to Testing Basics', ar: 'مقدمة في أساسيات الاختبار' },
        type: 'concept',
        content: {
          en: 'Testing Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Testing Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات الاختبار مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات الاختبار، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Testing Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات الاختبار على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Testing Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات الاختبار، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Testing Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Testing Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات الاختبار من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Testing Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات الاختبار ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Testing Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات الاختبار أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l7-q1',
        question: {
          en: 'What is the primary benefit of Testing Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات الاختبار؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Testing Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات الاختبار لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l8',
    title: { en: 'Code Reviews', ar: 'مراجعة الكود' },
    description: { 
      en: 'A comprehensive lesson on Code Reviews covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مراجعة الكود يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Code Reviews',
        'Identify key use cases for Code Reviews in computer science',
        'Apply Code Reviews to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Code Reviews',
        'تحديد حالات الاستخدام الرئيسية لـ Code Reviews في علوم الحاسب',
        'تطبيق Code Reviews لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l8-s1',
        title: { en: 'Introduction to Code Reviews', ar: 'مقدمة في مراجعة الكود' },
        type: 'concept',
        content: {
          en: 'Code Reviews is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Code Reviews, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مراجعة الكود مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مراجعة الكود، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Code Reviews relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مراجعة الكود على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Code Reviews, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مراجعة الكود، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Code Reviews by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Code Reviews to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مراجعة الكود من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Code Reviews is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مراجعة الكود ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Code Reviews is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مراجعة الكود أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l8-q1',
        question: {
          en: 'What is the primary benefit of Code Reviews?',
          ar: 'ما هي الفائدة الرئيسية من مراجعة الكود؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Code Reviews is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مراجعة الكود لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l9',
    title: { en: 'Design Patterns', ar: 'أنماط التصميم' },
    description: { 
      en: 'A comprehensive lesson on Design Patterns covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أنماط التصميم يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Design Patterns',
        'Identify key use cases for Design Patterns in computer science',
        'Apply Design Patterns to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Design Patterns',
        'تحديد حالات الاستخدام الرئيسية لـ Design Patterns في علوم الحاسب',
        'تطبيق Design Patterns لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l9-s1',
        title: { en: 'Introduction to Design Patterns', ar: 'مقدمة في أنماط التصميم' },
        type: 'concept',
        content: {
          en: 'Design Patterns is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Design Patterns, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أنماط التصميم مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أنماط التصميم، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Design Patterns relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أنماط التصميم على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Design Patterns, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أنماط التصميم، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Design Patterns by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Design Patterns to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أنماط التصميم من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Design Patterns is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أنماط التصميم ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Design Patterns is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أنماط التصميم أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l9-q1',
        question: {
          en: 'What is the primary benefit of Design Patterns?',
          ar: 'ما هي الفائدة الرئيسية من أنماط التصميم؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Design Patterns is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أنماط التصميم لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'swe-git-l10',
    title: { en: 'Documentation', ar: 'التوثيق' },
    description: { 
      en: 'A comprehensive lesson on Documentation covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التوثيق يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Documentation',
        'Identify key use cases for Documentation in computer science',
        'Apply Documentation to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Documentation',
        'تحديد حالات الاستخدام الرئيسية لـ Documentation في علوم الحاسب',
        'تطبيق Documentation لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'swe-git-l10-s1',
        title: { en: 'Introduction to Documentation', ar: 'مقدمة في التوثيق' },
        type: 'concept',
        content: {
          en: 'Documentation is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Documentation, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التوثيق مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التوثيق، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'swe-git-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Documentation relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التوثيق على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'swe-git-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Documentation, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التوثيق، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'swe-git-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Documentation by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Documentation to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التوثيق من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'swe-git-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Documentation is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التوثيق ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Documentation is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التوثيق أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'swe-git-l10-q1',
        question: {
          en: 'What is the primary benefit of Documentation?',
          ar: 'ما هي الفائدة الرئيسية من التوثيق؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Documentation is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التوثيق لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
