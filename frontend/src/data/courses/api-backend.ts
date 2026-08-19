import { type Lesson } from '../lessons';

export const api_backend_lessons: Lesson[] = [
  {
    id: 'api-backend-l1',
    title: { en: 'RESTful Architecture', ar: 'بنية REST' },
    description: { 
      en: 'A comprehensive lesson on RESTful Architecture covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول بنية REST يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of RESTful Architecture',
        'Identify key use cases for RESTful Architecture in computer science',
        'Apply RESTful Architecture to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ RESTful Architecture',
        'تحديد حالات الاستخدام الرئيسية لـ RESTful Architecture في علوم الحاسب',
        'تطبيق RESTful Architecture لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l1-s1',
        title: { en: 'Introduction to RESTful Architecture', ar: 'مقدمة في بنية REST' },
        type: 'concept',
        content: {
          en: 'RESTful Architecture is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding RESTful Architecture, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد بنية REST مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم بنية REST، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of RESTful Architecture relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ بنية REST على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without RESTful Architecture, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون بنية REST، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with RESTful Architecture by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of RESTful Architecture to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع بنية REST من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, RESTful Architecture is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، بنية REST ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['RESTful Architecture is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['بنية REST أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l1-q1',
        question: {
          en: 'What is the primary benefit of RESTful Architecture?',
          ar: 'ما هي الفائدة الرئيسية من بنية REST؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'RESTful Architecture is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم بنية REST لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l2',
    title: { en: 'HTTP Methods', ar: 'طرق HTTP ورموز الحالة' },
    description: { 
      en: 'A comprehensive lesson on HTTP Methods covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول طرق HTTP ورموز الحالة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of HTTP Methods',
        'Identify key use cases for HTTP Methods in computer science',
        'Apply HTTP Methods to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ HTTP Methods',
        'تحديد حالات الاستخدام الرئيسية لـ HTTP Methods في علوم الحاسب',
        'تطبيق HTTP Methods لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l2-s1',
        title: { en: 'Introduction to HTTP Methods', ar: 'مقدمة في طرق HTTP ورموز الحالة' },
        type: 'concept',
        content: {
          en: 'HTTP Methods is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding HTTP Methods, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد طرق HTTP ورموز الحالة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم طرق HTTP ورموز الحالة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of HTTP Methods relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ طرق HTTP ورموز الحالة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without HTTP Methods, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون طرق HTTP ورموز الحالة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with HTTP Methods by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of HTTP Methods to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع طرق HTTP ورموز الحالة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, HTTP Methods is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، طرق HTTP ورموز الحالة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['HTTP Methods is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['طرق HTTP ورموز الحالة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l2-q1',
        question: {
          en: 'What is the primary benefit of HTTP Methods?',
          ar: 'ما هي الفائدة الرئيسية من طرق HTTP ورموز الحالة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'HTTP Methods is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم طرق HTTP ورموز الحالة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l3',
    title: { en: 'JSON & Data Parsing', ar: 'تحليل البيانات و JSON' },
    description: { 
      en: 'A comprehensive lesson on JSON & Data Parsing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول تحليل البيانات و JSON يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of JSON & Data Parsing',
        'Identify key use cases for JSON & Data Parsing in computer science',
        'Apply JSON & Data Parsing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ JSON & Data Parsing',
        'تحديد حالات الاستخدام الرئيسية لـ JSON & Data Parsing في علوم الحاسب',
        'تطبيق JSON & Data Parsing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l3-s1',
        title: { en: 'Introduction to JSON & Data Parsing', ar: 'مقدمة في تحليل البيانات و JSON' },
        type: 'concept',
        content: {
          en: 'JSON & Data Parsing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding JSON & Data Parsing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد تحليل البيانات و JSON مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم تحليل البيانات و JSON، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of JSON & Data Parsing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ تحليل البيانات و JSON على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without JSON & Data Parsing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون تحليل البيانات و JSON، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with JSON & Data Parsing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of JSON & Data Parsing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع تحليل البيانات و JSON من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, JSON & Data Parsing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، تحليل البيانات و JSON ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['JSON & Data Parsing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['تحليل البيانات و JSON أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l3-q1',
        question: {
          en: 'What is the primary benefit of JSON & Data Parsing?',
          ar: 'ما هي الفائدة الرئيسية من تحليل البيانات و JSON؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'JSON & Data Parsing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم تحليل البيانات و JSON لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l4',
    title: { en: 'Routing', ar: 'التوجيه' },
    description: { 
      en: 'A comprehensive lesson on Routing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التوجيه يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Routing',
        'Identify key use cases for Routing in computer science',
        'Apply Routing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Routing',
        'تحديد حالات الاستخدام الرئيسية لـ Routing في علوم الحاسب',
        'تطبيق Routing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l4-s1',
        title: { en: 'Introduction to Routing', ar: 'مقدمة في التوجيه' },
        type: 'concept',
        content: {
          en: 'Routing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Routing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التوجيه مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التوجيه، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Routing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التوجيه على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Routing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التوجيه، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Routing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Routing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التوجيه من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Routing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التوجيه ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Routing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التوجيه أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l4-q1',
        question: {
          en: 'What is the primary benefit of Routing?',
          ar: 'ما هي الفائدة الرئيسية من التوجيه؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Routing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التوجيه لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l5',
    title: { en: 'Middleware', ar: 'البرمجيات الوسيطة' },
    description: { 
      en: 'A comprehensive lesson on Middleware covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول البرمجيات الوسيطة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Middleware',
        'Identify key use cases for Middleware in computer science',
        'Apply Middleware to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Middleware',
        'تحديد حالات الاستخدام الرئيسية لـ Middleware في علوم الحاسب',
        'تطبيق Middleware لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l5-s1',
        title: { en: 'Introduction to Middleware', ar: 'مقدمة في البرمجيات الوسيطة' },
        type: 'concept',
        content: {
          en: 'Middleware is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Middleware, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد البرمجيات الوسيطة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم البرمجيات الوسيطة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Middleware relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ البرمجيات الوسيطة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Middleware, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون البرمجيات الوسيطة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Middleware by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Middleware to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع البرمجيات الوسيطة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Middleware is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، البرمجيات الوسيطة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Middleware is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['البرمجيات الوسيطة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l5-q1',
        question: {
          en: 'What is the primary benefit of Middleware?',
          ar: 'ما هي الفائدة الرئيسية من البرمجيات الوسيطة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Middleware is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم البرمجيات الوسيطة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l6',
    title: { en: 'Authentication', ar: 'المصادقة' },
    description: { 
      en: 'A comprehensive lesson on Authentication covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المصادقة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Authentication',
        'Identify key use cases for Authentication in computer science',
        'Apply Authentication to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Authentication',
        'تحديد حالات الاستخدام الرئيسية لـ Authentication في علوم الحاسب',
        'تطبيق Authentication لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l6-s1',
        title: { en: 'Introduction to Authentication', ar: 'مقدمة في المصادقة' },
        type: 'concept',
        content: {
          en: 'Authentication is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Authentication, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المصادقة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المصادقة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Authentication relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المصادقة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Authentication, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المصادقة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Authentication by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Authentication to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المصادقة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Authentication is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المصادقة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Authentication is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المصادقة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l6-q1',
        question: {
          en: 'What is the primary benefit of Authentication?',
          ar: 'ما هي الفائدة الرئيسية من المصادقة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Authentication is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المصادقة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l7',
    title: { en: 'Database Integration', ar: 'التكامل مع قواعد البيانات' },
    description: { 
      en: 'A comprehensive lesson on Database Integration covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التكامل مع قواعد البيانات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Database Integration',
        'Identify key use cases for Database Integration in computer science',
        'Apply Database Integration to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Database Integration',
        'تحديد حالات الاستخدام الرئيسية لـ Database Integration في علوم الحاسب',
        'تطبيق Database Integration لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l7-s1',
        title: { en: 'Introduction to Database Integration', ar: 'مقدمة في التكامل مع قواعد البيانات' },
        type: 'concept',
        content: {
          en: 'Database Integration is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Database Integration, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التكامل مع قواعد البيانات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التكامل مع قواعد البيانات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Database Integration relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التكامل مع قواعد البيانات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Database Integration, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التكامل مع قواعد البيانات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Database Integration by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Database Integration to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التكامل مع قواعد البيانات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Database Integration is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التكامل مع قواعد البيانات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Database Integration is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التكامل مع قواعد البيانات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l7-q1',
        question: {
          en: 'What is the primary benefit of Database Integration?',
          ar: 'ما هي الفائدة الرئيسية من التكامل مع قواعد البيانات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Database Integration is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التكامل مع قواعد البيانات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l8',
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
        id: 'api-backend-l8-s1',
        title: { en: 'Introduction to Error Handling', ar: 'مقدمة في معالجة الأخطاء' },
        type: 'concept',
        content: {
          en: 'Error Handling is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Error Handling, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد معالجة الأخطاء مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم معالجة الأخطاء، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l8-s2',
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
        id: 'api-backend-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Error Handling, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون معالجة الأخطاء، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Error Handling by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Error Handling to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع معالجة الأخطاء من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l8-s5',
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
        id: 'api-backend-l8-q1',
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
    id: 'api-backend-l9',
    title: { en: 'API Security', ar: 'أمن واجهات برمجة التطبيقات' },
    description: { 
      en: 'A comprehensive lesson on API Security covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أمن واجهات برمجة التطبيقات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of API Security',
        'Identify key use cases for API Security in computer science',
        'Apply API Security to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ API Security',
        'تحديد حالات الاستخدام الرئيسية لـ API Security في علوم الحاسب',
        'تطبيق API Security لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l9-s1',
        title: { en: 'Introduction to API Security', ar: 'مقدمة في أمن واجهات برمجة التطبيقات' },
        type: 'concept',
        content: {
          en: 'API Security is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding API Security, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أمن واجهات برمجة التطبيقات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أمن واجهات برمجة التطبيقات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of API Security relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أمن واجهات برمجة التطبيقات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without API Security, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أمن واجهات برمجة التطبيقات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with API Security by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of API Security to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أمن واجهات برمجة التطبيقات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, API Security is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أمن واجهات برمجة التطبيقات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['API Security is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أمن واجهات برمجة التطبيقات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l9-q1',
        question: {
          en: 'What is the primary benefit of API Security?',
          ar: 'ما هي الفائدة الرئيسية من أمن واجهات برمجة التطبيقات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'API Security is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أمن واجهات برمجة التطبيقات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'api-backend-l10',
    title: { en: 'GraphQL Basics', ar: 'أساسيات GraphQL' },
    description: { 
      en: 'A comprehensive lesson on GraphQL Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات GraphQL يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of GraphQL Basics',
        'Identify key use cases for GraphQL Basics in computer science',
        'Apply GraphQL Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ GraphQL Basics',
        'تحديد حالات الاستخدام الرئيسية لـ GraphQL Basics في علوم الحاسب',
        'تطبيق GraphQL Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'api-backend-l10-s1',
        title: { en: 'Introduction to GraphQL Basics', ar: 'مقدمة في أساسيات GraphQL' },
        type: 'concept',
        content: {
          en: 'GraphQL Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding GraphQL Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات GraphQL مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات GraphQL، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'api-backend-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of GraphQL Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات GraphQL على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'api-backend-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without GraphQL Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات GraphQL، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'api-backend-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with GraphQL Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of GraphQL Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات GraphQL من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'api-backend-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, GraphQL Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات GraphQL ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['GraphQL Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات GraphQL أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'api-backend-l10-q1',
        question: {
          en: 'What is the primary benefit of GraphQL Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات GraphQL؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'GraphQL Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات GraphQL لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
