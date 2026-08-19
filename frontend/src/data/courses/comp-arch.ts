import { type Lesson } from '../lessons';

export const comp_arch_lessons: Lesson[] = [
  {
    id: 'comp-arch-l1',
    title: { en: 'Boolean Algebra', ar: 'الجبر البولياني' },
    description: { 
      en: 'A comprehensive lesson on Boolean Algebra covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الجبر البولياني يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
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
        id: 'comp-arch-l1-s1',
        title: { en: 'Introduction to Boolean Algebra', ar: 'مقدمة في الجبر البولياني' },
        type: 'concept',
        content: {
          en: 'Boolean Algebra is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Boolean Algebra, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الجبر البولياني مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الجبر البولياني، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l1-s2',
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
        id: 'comp-arch-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Boolean Algebra, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الجبر البولياني، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Boolean Algebra by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Boolean Algebra to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الجبر البولياني من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l1-s5',
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
        id: 'comp-arch-l1-q1',
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
    id: 'comp-arch-l2',
    title: { en: 'Logic Gates', ar: 'البوابات المنطقية' },
    description: { 
      en: 'A comprehensive lesson on Logic Gates covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول البوابات المنطقية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Logic Gates',
        'Identify key use cases for Logic Gates in computer science',
        'Apply Logic Gates to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Logic Gates',
        'تحديد حالات الاستخدام الرئيسية لـ Logic Gates في علوم الحاسب',
        'تطبيق Logic Gates لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l2-s1',
        title: { en: 'Introduction to Logic Gates', ar: 'مقدمة في البوابات المنطقية' },
        type: 'concept',
        content: {
          en: 'Logic Gates is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Logic Gates, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد البوابات المنطقية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم البوابات المنطقية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Logic Gates relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ البوابات المنطقية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Logic Gates, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون البوابات المنطقية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Logic Gates by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Logic Gates to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع البوابات المنطقية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Logic Gates is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، البوابات المنطقية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Logic Gates is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['البوابات المنطقية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l2-q1',
        question: {
          en: 'What is the primary benefit of Logic Gates?',
          ar: 'ما هي الفائدة الرئيسية من البوابات المنطقية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Logic Gates is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم البوابات المنطقية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l3',
    title: { en: 'Combinational Logic', ar: 'المنطق التوافقي' },
    description: { 
      en: 'A comprehensive lesson on Combinational Logic covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المنطق التوافقي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Combinational Logic',
        'Identify key use cases for Combinational Logic in computer science',
        'Apply Combinational Logic to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Combinational Logic',
        'تحديد حالات الاستخدام الرئيسية لـ Combinational Logic في علوم الحاسب',
        'تطبيق Combinational Logic لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l3-s1',
        title: { en: 'Introduction to Combinational Logic', ar: 'مقدمة في المنطق التوافقي' },
        type: 'concept',
        content: {
          en: 'Combinational Logic is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Combinational Logic, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المنطق التوافقي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المنطق التوافقي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Combinational Logic relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المنطق التوافقي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Combinational Logic, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المنطق التوافقي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Combinational Logic by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Combinational Logic to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المنطق التوافقي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Combinational Logic is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المنطق التوافقي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Combinational Logic is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المنطق التوافقي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l3-q1',
        question: {
          en: 'What is the primary benefit of Combinational Logic?',
          ar: 'ما هي الفائدة الرئيسية من المنطق التوافقي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Combinational Logic is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المنطق التوافقي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l4',
    title: { en: 'Sequential Logic', ar: 'المنطق المتسلسل' },
    description: { 
      en: 'A comprehensive lesson on Sequential Logic covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول المنطق المتسلسل يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Sequential Logic',
        'Identify key use cases for Sequential Logic in computer science',
        'Apply Sequential Logic to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Sequential Logic',
        'تحديد حالات الاستخدام الرئيسية لـ Sequential Logic في علوم الحاسب',
        'تطبيق Sequential Logic لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l4-s1',
        title: { en: 'Introduction to Sequential Logic', ar: 'مقدمة في المنطق المتسلسل' },
        type: 'concept',
        content: {
          en: 'Sequential Logic is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Sequential Logic, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد المنطق المتسلسل مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم المنطق المتسلسل، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Sequential Logic relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ المنطق المتسلسل على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Sequential Logic, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون المنطق المتسلسل، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Sequential Logic by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Sequential Logic to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع المنطق المتسلسل من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Sequential Logic is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، المنطق المتسلسل ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Sequential Logic is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['المنطق المتسلسل أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l4-q1',
        question: {
          en: 'What is the primary benefit of Sequential Logic?',
          ar: 'ما هي الفائدة الرئيسية من المنطق المتسلسل؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Sequential Logic is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم المنطق المتسلسل لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l5',
    title: { en: 'CPU Design', ar: 'تصميم وحدة المعالجة المركزية' },
    description: { 
      en: 'A comprehensive lesson on CPU Design covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول تصميم وحدة المعالجة المركزية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of CPU Design',
        'Identify key use cases for CPU Design in computer science',
        'Apply CPU Design to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ CPU Design',
        'تحديد حالات الاستخدام الرئيسية لـ CPU Design في علوم الحاسب',
        'تطبيق CPU Design لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l5-s1',
        title: { en: 'Introduction to CPU Design', ar: 'مقدمة في تصميم وحدة المعالجة المركزية' },
        type: 'concept',
        content: {
          en: 'CPU Design is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding CPU Design, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد تصميم وحدة المعالجة المركزية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم تصميم وحدة المعالجة المركزية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of CPU Design relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ تصميم وحدة المعالجة المركزية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without CPU Design, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون تصميم وحدة المعالجة المركزية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with CPU Design by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of CPU Design to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع تصميم وحدة المعالجة المركزية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, CPU Design is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، تصميم وحدة المعالجة المركزية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['CPU Design is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['تصميم وحدة المعالجة المركزية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l5-q1',
        question: {
          en: 'What is the primary benefit of CPU Design?',
          ar: 'ما هي الفائدة الرئيسية من تصميم وحدة المعالجة المركزية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'CPU Design is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم تصميم وحدة المعالجة المركزية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l6',
    title: { en: 'Instruction Set Architecture', ar: 'بنية مجموعة التعليمات' },
    description: { 
      en: 'A comprehensive lesson on Instruction Set Architecture covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول بنية مجموعة التعليمات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Instruction Set Architecture',
        'Identify key use cases for Instruction Set Architecture in computer science',
        'Apply Instruction Set Architecture to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Instruction Set Architecture',
        'تحديد حالات الاستخدام الرئيسية لـ Instruction Set Architecture في علوم الحاسب',
        'تطبيق Instruction Set Architecture لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l6-s1',
        title: { en: 'Introduction to Instruction Set Architecture', ar: 'مقدمة في بنية مجموعة التعليمات' },
        type: 'concept',
        content: {
          en: 'Instruction Set Architecture is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Instruction Set Architecture, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد بنية مجموعة التعليمات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم بنية مجموعة التعليمات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Instruction Set Architecture relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ بنية مجموعة التعليمات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Instruction Set Architecture, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون بنية مجموعة التعليمات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Instruction Set Architecture by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Instruction Set Architecture to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع بنية مجموعة التعليمات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Instruction Set Architecture is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، بنية مجموعة التعليمات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Instruction Set Architecture is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['بنية مجموعة التعليمات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l6-q1',
        question: {
          en: 'What is the primary benefit of Instruction Set Architecture?',
          ar: 'ما هي الفائدة الرئيسية من بنية مجموعة التعليمات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Instruction Set Architecture is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم بنية مجموعة التعليمات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l7',
    title: { en: 'Pipelining', ar: 'خطوط الأنابيب' },
    description: { 
      en: 'A comprehensive lesson on Pipelining covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول خطوط الأنابيب يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Pipelining',
        'Identify key use cases for Pipelining in computer science',
        'Apply Pipelining to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Pipelining',
        'تحديد حالات الاستخدام الرئيسية لـ Pipelining في علوم الحاسب',
        'تطبيق Pipelining لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l7-s1',
        title: { en: 'Introduction to Pipelining', ar: 'مقدمة في خطوط الأنابيب' },
        type: 'concept',
        content: {
          en: 'Pipelining is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Pipelining, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد خطوط الأنابيب مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم خطوط الأنابيب، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Pipelining relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ خطوط الأنابيب على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Pipelining, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون خطوط الأنابيب، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Pipelining by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Pipelining to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع خطوط الأنابيب من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Pipelining is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، خطوط الأنابيب ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Pipelining is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['خطوط الأنابيب أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l7-q1',
        question: {
          en: 'What is the primary benefit of Pipelining?',
          ar: 'ما هي الفائدة الرئيسية من خطوط الأنابيب؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Pipelining is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم خطوط الأنابيب لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l8',
    title: { en: 'Memory Hierarchy', ar: 'التسلسل الهرمي للذاكرة' },
    description: { 
      en: 'A comprehensive lesson on Memory Hierarchy covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التسلسل الهرمي للذاكرة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Memory Hierarchy',
        'Identify key use cases for Memory Hierarchy in computer science',
        'Apply Memory Hierarchy to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Memory Hierarchy',
        'تحديد حالات الاستخدام الرئيسية لـ Memory Hierarchy في علوم الحاسب',
        'تطبيق Memory Hierarchy لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l8-s1',
        title: { en: 'Introduction to Memory Hierarchy', ar: 'مقدمة في التسلسل الهرمي للذاكرة' },
        type: 'concept',
        content: {
          en: 'Memory Hierarchy is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Memory Hierarchy, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التسلسل الهرمي للذاكرة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التسلسل الهرمي للذاكرة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Memory Hierarchy relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التسلسل الهرمي للذاكرة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Memory Hierarchy, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التسلسل الهرمي للذاكرة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Memory Hierarchy by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Memory Hierarchy to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التسلسل الهرمي للذاكرة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Memory Hierarchy is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التسلسل الهرمي للذاكرة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Memory Hierarchy is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التسلسل الهرمي للذاكرة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l8-q1',
        question: {
          en: 'What is the primary benefit of Memory Hierarchy?',
          ar: 'ما هي الفائدة الرئيسية من التسلسل الهرمي للذاكرة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Memory Hierarchy is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التسلسل الهرمي للذاكرة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l9',
    title: { en: 'Cache Memory', ar: 'الذاكرة المخبئية' },
    description: { 
      en: 'A comprehensive lesson on Cache Memory covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الذاكرة المخبئية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Cache Memory',
        'Identify key use cases for Cache Memory in computer science',
        'Apply Cache Memory to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Cache Memory',
        'تحديد حالات الاستخدام الرئيسية لـ Cache Memory في علوم الحاسب',
        'تطبيق Cache Memory لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l9-s1',
        title: { en: 'Introduction to Cache Memory', ar: 'مقدمة في الذاكرة المخبئية' },
        type: 'concept',
        content: {
          en: 'Cache Memory is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Cache Memory, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الذاكرة المخبئية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الذاكرة المخبئية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Cache Memory relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الذاكرة المخبئية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Cache Memory, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الذاكرة المخبئية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Cache Memory by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Cache Memory to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الذاكرة المخبئية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Cache Memory is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الذاكرة المخبئية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Cache Memory is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الذاكرة المخبئية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l9-q1',
        question: {
          en: 'What is the primary benefit of Cache Memory?',
          ar: 'ما هي الفائدة الرئيسية من الذاكرة المخبئية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Cache Memory is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الذاكرة المخبئية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'comp-arch-l10',
    title: { en: 'I/O Interfacing', ar: 'ربط الإدخال والإخراج' },
    description: { 
      en: 'A comprehensive lesson on I/O Interfacing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول ربط الإدخال والإخراج يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of I/O Interfacing',
        'Identify key use cases for I/O Interfacing in computer science',
        'Apply I/O Interfacing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ I/O Interfacing',
        'تحديد حالات الاستخدام الرئيسية لـ I/O Interfacing في علوم الحاسب',
        'تطبيق I/O Interfacing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'comp-arch-l10-s1',
        title: { en: 'Introduction to I/O Interfacing', ar: 'مقدمة في ربط الإدخال والإخراج' },
        type: 'concept',
        content: {
          en: 'I/O Interfacing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding I/O Interfacing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد ربط الإدخال والإخراج مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم ربط الإدخال والإخراج، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'comp-arch-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of I/O Interfacing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ ربط الإدخال والإخراج على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'comp-arch-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without I/O Interfacing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون ربط الإدخال والإخراج، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'comp-arch-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with I/O Interfacing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of I/O Interfacing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع ربط الإدخال والإخراج من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'comp-arch-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, I/O Interfacing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، ربط الإدخال والإخراج ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['I/O Interfacing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['ربط الإدخال والإخراج أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'comp-arch-l10-q1',
        question: {
          en: 'What is the primary benefit of I/O Interfacing?',
          ar: 'ما هي الفائدة الرئيسية من ربط الإدخال والإخراج؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'I/O Interfacing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم ربط الإدخال والإخراج لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
