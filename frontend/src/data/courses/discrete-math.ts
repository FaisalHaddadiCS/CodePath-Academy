import { type Lesson } from '../lessons';

export const discrete_math_lessons: Lesson[] = [
  {
    id: 'discrete-math-l1',
    title: { en: 'Propositional Logic', ar: 'المنطق الافتراضي' },
    description: { 
      en: 'A comprehensive lesson on Propositional Logic covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المنطق الافتراضي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Propositional Logic',
        'Identify key use cases for Propositional Logic in computer science',
        'Apply Propositional Logic to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Propositional Logic',
        'تحديد حالات الاستخدام الرئيسية لـ Propositional Logic في علوم الحاسب',
        'تطبيق Propositional Logic لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l1-s1',
        title: { en: 'Introduction to Propositional Logic', ar: 'مقدمة في المنطق الافتراضي' },
        type: 'concept',
        content: {
          en: 'Propositional Logic is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Propositional Logic, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المنطق الافتراضي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المنطق الافتراضي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Propositional Logic relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المنطق الافتراضي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Propositional Logic, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المنطق الافتراضي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Propositional Logic by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Propositional Logic to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المنطق الافتراضي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Propositional Logic is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المنطق الافتراضي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Propositional Logic is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المنطق الافتراضي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l1-q1',
        question: {
          en: 'What is the primary benefit of Propositional Logic?',
          ar: 'ما هي الفائدة الرئيسية من المنطق الافتراضي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Propositional Logic is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المنطق الافتراضي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l2',
    title: { en: 'Set Theory', ar: 'نظرية المجموعات' },
    description: { 
      en: 'A comprehensive lesson on Set Theory covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نظرية المجموعات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Set Theory',
        'Identify key use cases for Set Theory in computer science',
        'Apply Set Theory to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Set Theory',
        'تحديد حالات الاستخدام الرئيسية لـ Set Theory في علوم الحاسب',
        'تطبيق Set Theory لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l2-s1',
        title: { en: 'Introduction to Set Theory', ar: 'مقدمة في نظرية المجموعات' },
        type: 'concept',
        content: {
          en: 'Set Theory is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Set Theory, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نظرية المجموعات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نظرية المجموعات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Set Theory relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نظرية المجموعات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Set Theory, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نظرية المجموعات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Set Theory by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Set Theory to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نظرية المجموعات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Set Theory is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نظرية المجموعات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Set Theory is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نظرية المجموعات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l2-q1',
        question: {
          en: 'What is the primary benefit of Set Theory?',
          ar: 'ما هي الفائدة الرئيسية من نظرية المجموعات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Set Theory is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نظرية المجموعات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l3',
    title: { en: 'Relations & Functions', ar: 'العلاقات والدوال' },
    description: { 
      en: 'A comprehensive lesson on Relations & Functions covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول العلاقات والدوال يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Relations & Functions',
        'Identify key use cases for Relations & Functions in computer science',
        'Apply Relations & Functions to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Relations & Functions',
        'تحديد حالات الاستخدام الرئيسية لـ Relations & Functions في علوم الحاسب',
        'تطبيق Relations & Functions لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l3-s1',
        title: { en: 'Introduction to Relations & Functions', ar: 'مقدمة في العلاقات والدوال' },
        type: 'concept',
        content: {
          en: 'Relations & Functions is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Relations & Functions, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد العلاقات والدوال مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم العلاقات والدوال، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Relations & Functions relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ العلاقات والدوال على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Relations & Functions, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون العلاقات والدوال، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Relations & Functions by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Relations & Functions to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع العلاقات والدوال من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Relations & Functions is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، العلاقات والدوال ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Relations & Functions is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['العلاقات والدوال أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l3-q1',
        question: {
          en: 'What is the primary benefit of Relations & Functions?',
          ar: 'ما هي الفائدة الرئيسية من العلاقات والدوال؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Relations & Functions is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم العلاقات والدوال لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l4',
    title: { en: 'Combinatorics', ar: 'التوافيق والتباديل' },
    description: { 
      en: 'A comprehensive lesson on Combinatorics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التوافيق والتباديل يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Combinatorics',
        'Identify key use cases for Combinatorics in computer science',
        'Apply Combinatorics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Combinatorics',
        'تحديد حالات الاستخدام الرئيسية لـ Combinatorics في علوم الحاسب',
        'تطبيق Combinatorics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l4-s1',
        title: { en: 'Introduction to Combinatorics', ar: 'مقدمة في التوافيق والتباديل' },
        type: 'concept',
        content: {
          en: 'Combinatorics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Combinatorics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التوافيق والتباديل مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التوافيق والتباديل، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Combinatorics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التوافيق والتباديل على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Combinatorics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التوافيق والتباديل، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Combinatorics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Combinatorics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التوافيق والتباديل من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Combinatorics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التوافيق والتباديل ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Combinatorics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التوافيق والتباديل أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l4-q1',
        question: {
          en: 'What is the primary benefit of Combinatorics?',
          ar: 'ما هي الفائدة الرئيسية من التوافيق والتباديل؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Combinatorics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التوافيق والتباديل لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l5',
    title: { en: 'Probability', ar: 'الاحتمالات' },
    description: { 
      en: 'A comprehensive lesson on Probability covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الاحتمالات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Probability',
        'Identify key use cases for Probability in computer science',
        'Apply Probability to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Probability',
        'تحديد حالات الاستخدام الرئيسية لـ Probability في علوم الحاسب',
        'تطبيق Probability لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l5-s1',
        title: { en: 'Introduction to Probability', ar: 'مقدمة في الاحتمالات' },
        type: 'concept',
        content: {
          en: 'Probability is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Probability, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الاحتمالات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الاحتمالات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Probability relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الاحتمالات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Probability, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الاحتمالات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Probability by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Probability to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الاحتمالات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Probability is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الاحتمالات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Probability is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الاحتمالات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l5-q1',
        question: {
          en: 'What is the primary benefit of Probability?',
          ar: 'ما هي الفائدة الرئيسية من الاحتمالات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Probability is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الاحتمالات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l6',
    title: { en: 'Graph Theory', ar: 'نظرية الرسوم البيانية' },
    description: { 
      en: 'A comprehensive lesson on Graph Theory covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نظرية الرسوم البيانية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Graph Theory',
        'Identify key use cases for Graph Theory in computer science',
        'Apply Graph Theory to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Graph Theory',
        'تحديد حالات الاستخدام الرئيسية لـ Graph Theory في علوم الحاسب',
        'تطبيق Graph Theory لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l6-s1',
        title: { en: 'Introduction to Graph Theory', ar: 'مقدمة في نظرية الرسوم البيانية' },
        type: 'concept',
        content: {
          en: 'Graph Theory is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Graph Theory, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نظرية الرسوم البيانية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نظرية الرسوم البيانية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Graph Theory relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نظرية الرسوم البيانية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Graph Theory, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نظرية الرسوم البيانية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Graph Theory by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Graph Theory to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نظرية الرسوم البيانية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Graph Theory is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نظرية الرسوم البيانية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Graph Theory is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نظرية الرسوم البيانية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l6-q1',
        question: {
          en: 'What is the primary benefit of Graph Theory?',
          ar: 'ما هي الفائدة الرئيسية من نظرية الرسوم البيانية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Graph Theory is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نظرية الرسوم البيانية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l7',
    title: { en: 'Trees', ar: 'الأشجار' },
    description: { 
      en: 'A comprehensive lesson on Trees covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الأشجار يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Trees',
        'Identify key use cases for Trees in computer science',
        'Apply Trees to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Trees',
        'تحديد حالات الاستخدام الرئيسية لـ Trees في علوم الحاسب',
        'تطبيق Trees لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l7-s1',
        title: { en: 'Introduction to Trees', ar: 'مقدمة في الأشجار' },
        type: 'concept',
        content: {
          en: 'Trees is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Trees, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الأشجار مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الأشجار، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Trees relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الأشجار على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Trees, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الأشجار، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Trees by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Trees to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الأشجار من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Trees is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الأشجار ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Trees is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الأشجار أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l7-q1',
        question: {
          en: 'What is the primary benefit of Trees?',
          ar: 'ما هي الفائدة الرئيسية من الأشجار؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Trees is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الأشجار لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l8',
    title: { en: 'Boolean Algebra', ar: 'الجبر البولياني' },
    description: { 
      en: 'A comprehensive lesson on Boolean Algebra covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الجبر البولياني يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Boolean Algebra',
        'Identify key use cases for Boolean Algebra in computer science',
        'Apply Boolean Algebra to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Boolean Algebra',
        'تحديد حالات الاستخدام الرئيسية لـ Boolean Algebra في علوم الحاسب',
        'تطبيق Boolean Algebra لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l8-s1',
        title: { en: 'Introduction to Boolean Algebra', ar: 'مقدمة في الجبر البولياني' },
        type: 'concept',
        content: {
          en: 'Boolean Algebra is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Boolean Algebra, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الجبر البولياني مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الجبر البولياني، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Boolean Algebra relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الجبر البولياني على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Boolean Algebra, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الجبر البولياني، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Boolean Algebra by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Boolean Algebra to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الجبر البولياني من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Boolean Algebra is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الجبر البولياني ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Boolean Algebra is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الجبر البولياني أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l8-q1',
        question: {
          en: 'What is the primary benefit of Boolean Algebra?',
          ar: 'ما هي الفائدة الرئيسية من الجبر البولياني؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Boolean Algebra is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الجبر البولياني لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l9',
    title: { en: 'Number Theory', ar: 'نظرية الأعداد' },
    description: { 
      en: 'A comprehensive lesson on Number Theory covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نظرية الأعداد يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Number Theory',
        'Identify key use cases for Number Theory in computer science',
        'Apply Number Theory to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Number Theory',
        'تحديد حالات الاستخدام الرئيسية لـ Number Theory في علوم الحاسب',
        'تطبيق Number Theory لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l9-s1',
        title: { en: 'Introduction to Number Theory', ar: 'مقدمة في نظرية الأعداد' },
        type: 'concept',
        content: {
          en: 'Number Theory is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Number Theory, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نظرية الأعداد مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نظرية الأعداد، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Number Theory relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نظرية الأعداد على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Number Theory, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نظرية الأعداد، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Number Theory by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Number Theory to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نظرية الأعداد من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Number Theory is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نظرية الأعداد ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Number Theory is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نظرية الأعداد أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l9-q1',
        question: {
          en: 'What is the primary benefit of Number Theory?',
          ar: 'ما هي الفائدة الرئيسية من نظرية الأعداد؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Number Theory is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نظرية الأعداد لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'discrete-math-l10',
    title: { en: 'Proofs & Induction', ar: 'الإثباتات والاستقراء' },
    description: { 
      en: 'A comprehensive lesson on Proofs & Induction covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الإثباتات والاستقراء يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Proofs & Induction',
        'Identify key use cases for Proofs & Induction in computer science',
        'Apply Proofs & Induction to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Proofs & Induction',
        'تحديد حالات الاستخدام الرئيسية لـ Proofs & Induction في علوم الحاسب',
        'تطبيق Proofs & Induction لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'discrete-math-l10-s1',
        title: { en: 'Introduction to Proofs & Induction', ar: 'مقدمة في الإثباتات والاستقراء' },
        type: 'concept',
        content: {
          en: 'Proofs & Induction is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Proofs & Induction, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الإثباتات والاستقراء مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الإثباتات والاستقراء، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'discrete-math-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Proofs & Induction relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الإثباتات والاستقراء على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'discrete-math-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Proofs & Induction, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الإثباتات والاستقراء، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'discrete-math-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Proofs & Induction by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Proofs & Induction to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الإثباتات والاستقراء من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'discrete-math-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Proofs & Induction is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الإثباتات والاستقراء ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Proofs & Induction is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الإثباتات والاستقراء أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'discrete-math-l10-q1',
        question: {
          en: 'What is the primary benefit of Proofs & Induction?',
          ar: 'ما هي الفائدة الرئيسية من الإثباتات والاستقراء؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Proofs & Induction is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الإثباتات والاستقراء لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
