import { type Lesson } from '../lessons';

export const python_fundamentals_lessons: Lesson[] = [
  {
    id: 'python-fundamentals-l1',
    title: { en: 'Variables', ar: 'المتغيرات' },
    description: { 
      en: 'A comprehensive lesson on Variables covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المتغيرات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Variables',
        'Identify key use cases for Variables in computer science',
        'Apply Variables to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Variables',
        'تحديد حالات الاستخدام الرئيسية لـ Variables في علوم الحاسب',
        'تطبيق Variables لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l1-s1',
        title: { en: 'Introduction to Variables', ar: 'مقدمة في المتغيرات' },
        type: 'concept',
        content: {
          en: 'Variables is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Variables, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المتغيرات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المتغيرات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Variables relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المتغيرات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Variables, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المتغيرات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Variables by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Variables to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المتغيرات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Variables is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المتغيرات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Variables is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المتغيرات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l1-q1',
        question: {
          en: 'What is the primary benefit of Variables?',
          ar: 'ما هي الفائدة الرئيسية من المتغيرات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Variables is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المتغيرات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l2',
    title: { en: 'Loops', ar: 'الحلقات' },
    description: { 
      en: 'A comprehensive lesson on Loops covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الحلقات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Loops',
        'Identify key use cases for Loops in computer science',
        'Apply Loops to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Loops',
        'تحديد حالات الاستخدام الرئيسية لـ Loops في علوم الحاسب',
        'تطبيق Loops لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l2-s1',
        title: { en: 'Introduction to Loops', ar: 'مقدمة في الحلقات' },
        type: 'concept',
        content: {
          en: 'Loops is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Loops, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الحلقات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الحلقات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Loops relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الحلقات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Loops, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الحلقات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Loops by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Loops to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الحلقات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Loops is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الحلقات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Loops is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الحلقات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l2-q1',
        question: {
          en: 'What is the primary benefit of Loops?',
          ar: 'ما هي الفائدة الرئيسية من الحلقات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Loops is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الحلقات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l3',
    title: { en: 'Functions', ar: 'الدوال' },
    description: { 
      en: 'A comprehensive lesson on Functions covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الدوال يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Functions',
        'Identify key use cases for Functions in computer science',
        'Apply Functions to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Functions',
        'تحديد حالات الاستخدام الرئيسية لـ Functions في علوم الحاسب',
        'تطبيق Functions لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l3-s1',
        title: { en: 'Introduction to Functions', ar: 'مقدمة في الدوال' },
        type: 'concept',
        content: {
          en: 'Functions is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Functions, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الدوال مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الدوال، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Functions relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الدوال على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Functions, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الدوال، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Functions by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Functions to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الدوال من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Functions is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الدوال ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Functions is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الدوال أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l3-q1',
        question: {
          en: 'What is the primary benefit of Functions?',
          ar: 'ما هي الفائدة الرئيسية من الدوال؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Functions is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الدوال لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l4',
    title: { en: 'Lists', ar: 'القوائم' },
    description: { 
      en: 'A comprehensive lesson on Lists covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول القوائم يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Lists',
        'Identify key use cases for Lists in computer science',
        'Apply Lists to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Lists',
        'تحديد حالات الاستخدام الرئيسية لـ Lists في علوم الحاسب',
        'تطبيق Lists لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l4-s1',
        title: { en: 'Introduction to Lists', ar: 'مقدمة في القوائم' },
        type: 'concept',
        content: {
          en: 'Lists is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Lists, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد القوائم مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم القوائم، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Lists relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ القوائم على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Lists, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون القوائم، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Lists by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Lists to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع القوائم من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Lists is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، القوائم ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Lists is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['القوائم أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l4-q1',
        question: {
          en: 'What is the primary benefit of Lists?',
          ar: 'ما هي الفائدة الرئيسية من القوائم؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Lists is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم القوائم لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l5',
    title: { en: 'Dictionaries', ar: 'القواميس' },
    description: { 
      en: 'A comprehensive lesson on Dictionaries covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول القواميس يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Dictionaries',
        'Identify key use cases for Dictionaries in computer science',
        'Apply Dictionaries to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Dictionaries',
        'تحديد حالات الاستخدام الرئيسية لـ Dictionaries في علوم الحاسب',
        'تطبيق Dictionaries لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l5-s1',
        title: { en: 'Introduction to Dictionaries', ar: 'مقدمة في القواميس' },
        type: 'concept',
        content: {
          en: 'Dictionaries is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Dictionaries, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد القواميس مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم القواميس، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Dictionaries relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ القواميس على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Dictionaries, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون القواميس، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Dictionaries by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Dictionaries to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع القواميس من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Dictionaries is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، القواميس ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Dictionaries is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['القواميس أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l5-q1',
        question: {
          en: 'What is the primary benefit of Dictionaries?',
          ar: 'ما هي الفائدة الرئيسية من القواميس؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Dictionaries is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم القواميس لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l6',
    title: { en: 'File I/O', ar: 'الإدخال والإخراج' },
    description: { 
      en: 'A comprehensive lesson on File I/O covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الإدخال والإخراج يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of File I/O',
        'Identify key use cases for File I/O in computer science',
        'Apply File I/O to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ File I/O',
        'تحديد حالات الاستخدام الرئيسية لـ File I/O في علوم الحاسب',
        'تطبيق File I/O لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l6-s1',
        title: { en: 'Introduction to File I/O', ar: 'مقدمة في الإدخال والإخراج' },
        type: 'concept',
        content: {
          en: 'File I/O is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding File I/O, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الإدخال والإخراج مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الإدخال والإخراج، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of File I/O relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الإدخال والإخراج على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without File I/O, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الإدخال والإخراج، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with File I/O by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of File I/O to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الإدخال والإخراج من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, File I/O is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الإدخال والإخراج ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['File I/O is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الإدخال والإخراج أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l6-q1',
        question: {
          en: 'What is the primary benefit of File I/O?',
          ar: 'ما هي الفائدة الرئيسية من الإدخال والإخراج؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'File I/O is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الإدخال والإخراج لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l7',
    title: { en: 'Error Handling', ar: 'معالجة الأخطاء' },
    description: { 
      en: 'A comprehensive lesson on Error Handling covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول معالجة الأخطاء يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
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
        id: 'python-fundamentals-l7-s1',
        title: { en: 'Introduction to Error Handling', ar: 'مقدمة في معالجة الأخطاء' },
        type: 'concept',
        content: {
          en: 'Error Handling is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Error Handling, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد معالجة الأخطاء مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم معالجة الأخطاء، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l7-s2',
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
        id: 'python-fundamentals-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Error Handling, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون معالجة الأخطاء، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Error Handling by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Error Handling to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع معالجة الأخطاء من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l7-s5',
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
        id: 'python-fundamentals-l7-q1',
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
    id: 'python-fundamentals-l8',
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
        id: 'python-fundamentals-l8-s1',
        title: { en: 'Introduction to Modules', ar: 'مقدمة في الوحدات' },
        type: 'concept',
        content: {
          en: 'Modules is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Modules, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الوحدات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الوحدات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l8-s2',
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
        id: 'python-fundamentals-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Modules, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الوحدات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Modules by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Modules to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الوحدات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l8-s5',
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
        id: 'python-fundamentals-l8-q1',
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
  {
    id: 'python-fundamentals-l9',
    title: { en: 'Classes', ar: 'الأصناف' },
    description: { 
      en: 'A comprehensive lesson on Classes covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الأصناف يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Classes',
        'Identify key use cases for Classes in computer science',
        'Apply Classes to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Classes',
        'تحديد حالات الاستخدام الرئيسية لـ Classes في علوم الحاسب',
        'تطبيق Classes لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l9-s1',
        title: { en: 'Introduction to Classes', ar: 'مقدمة في الأصناف' },
        type: 'concept',
        content: {
          en: 'Classes is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Classes, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الأصناف مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الأصناف، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Classes relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الأصناف على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Classes, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الأصناف، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Classes by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Classes to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الأصناف من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Classes is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الأصناف ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Classes is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الأصناف أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l9-q1',
        question: {
          en: 'What is the primary benefit of Classes?',
          ar: 'ما هي الفائدة الرئيسية من الأصناف؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Classes is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الأصناف لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'python-fundamentals-l10',
    title: { en: 'APIs', ar: 'واجهات برمجة التطبيقات' },
    description: { 
      en: 'A comprehensive lesson on APIs covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول واجهات برمجة التطبيقات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of APIs',
        'Identify key use cases for APIs in computer science',
        'Apply APIs to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ APIs',
        'تحديد حالات الاستخدام الرئيسية لـ APIs في علوم الحاسب',
        'تطبيق APIs لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'python-fundamentals-l10-s1',
        title: { en: 'Introduction to APIs', ar: 'مقدمة في واجهات برمجة التطبيقات' },
        type: 'concept',
        content: {
          en: 'APIs is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding APIs, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد واجهات برمجة التطبيقات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم واجهات برمجة التطبيقات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'python-fundamentals-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of APIs relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ واجهات برمجة التطبيقات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'python-fundamentals-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without APIs, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون واجهات برمجة التطبيقات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'python-fundamentals-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with APIs by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of APIs to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع واجهات برمجة التطبيقات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'python-fundamentals-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, APIs is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، واجهات برمجة التطبيقات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['APIs is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['واجهات برمجة التطبيقات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'python-fundamentals-l10-q1',
        question: {
          en: 'What is the primary benefit of APIs?',
          ar: 'ما هي الفائدة الرئيسية من واجهات برمجة التطبيقات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'APIs is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم واجهات برمجة التطبيقات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
