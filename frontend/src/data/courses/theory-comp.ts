import { type Lesson } from '../lessons';

export const theory_comp_lessons: Lesson[] = [
  {
    id: 'theory-comp-l1',
    title: { en: 'Automata Theory', ar: 'نظرية الأتمتة' },
    description: { 
      en: 'A comprehensive lesson on Automata Theory covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نظرية الأتمتة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Automata Theory',
        'Identify key use cases for Automata Theory in computer science',
        'Apply Automata Theory to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Automata Theory',
        'تحديد حالات الاستخدام الرئيسية لـ Automata Theory في علوم الحاسب',
        'تطبيق Automata Theory لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l1-s1',
        title: { en: 'Introduction to Automata Theory', ar: 'مقدمة في نظرية الأتمتة' },
        type: 'concept',
        content: {
          en: 'Automata Theory is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Automata Theory, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نظرية الأتمتة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نظرية الأتمتة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Automata Theory relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نظرية الأتمتة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Automata Theory, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نظرية الأتمتة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Automata Theory by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Automata Theory to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نظرية الأتمتة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Automata Theory is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نظرية الأتمتة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Automata Theory is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نظرية الأتمتة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l1-q1',
        question: {
          en: 'What is the primary benefit of Automata Theory?',
          ar: 'ما هي الفائدة الرئيسية من نظرية الأتمتة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Automata Theory is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نظرية الأتمتة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l2',
    title: { en: 'Finite State Machines', ar: 'آلات الحالة المحدودة' },
    description: { 
      en: 'A comprehensive lesson on Finite State Machines covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول آلات الحالة المحدودة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Finite State Machines',
        'Identify key use cases for Finite State Machines in computer science',
        'Apply Finite State Machines to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Finite State Machines',
        'تحديد حالات الاستخدام الرئيسية لـ Finite State Machines في علوم الحاسب',
        'تطبيق Finite State Machines لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l2-s1',
        title: { en: 'Introduction to Finite State Machines', ar: 'مقدمة في آلات الحالة المحدودة' },
        type: 'concept',
        content: {
          en: 'Finite State Machines is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Finite State Machines, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد آلات الحالة المحدودة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم آلات الحالة المحدودة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Finite State Machines relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ آلات الحالة المحدودة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Finite State Machines, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون آلات الحالة المحدودة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Finite State Machines by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Finite State Machines to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع آلات الحالة المحدودة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Finite State Machines is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، آلات الحالة المحدودة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Finite State Machines is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['آلات الحالة المحدودة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l2-q1',
        question: {
          en: 'What is the primary benefit of Finite State Machines?',
          ar: 'ما هي الفائدة الرئيسية من آلات الحالة المحدودة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Finite State Machines is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم آلات الحالة المحدودة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l3',
    title: { en: 'Regular Expressions', ar: 'التعابير النمطية' },
    description: { 
      en: 'A comprehensive lesson on Regular Expressions covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعابير النمطية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Regular Expressions',
        'Identify key use cases for Regular Expressions in computer science',
        'Apply Regular Expressions to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Regular Expressions',
        'تحديد حالات الاستخدام الرئيسية لـ Regular Expressions في علوم الحاسب',
        'تطبيق Regular Expressions لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l3-s1',
        title: { en: 'Introduction to Regular Expressions', ar: 'مقدمة في التعابير النمطية' },
        type: 'concept',
        content: {
          en: 'Regular Expressions is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Regular Expressions, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعابير النمطية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعابير النمطية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Regular Expressions relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعابير النمطية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Regular Expressions, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعابير النمطية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Regular Expressions by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Regular Expressions to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعابير النمطية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Regular Expressions is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعابير النمطية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Regular Expressions is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعابير النمطية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l3-q1',
        question: {
          en: 'What is the primary benefit of Regular Expressions?',
          ar: 'ما هي الفائدة الرئيسية من التعابير النمطية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Regular Expressions is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعابير النمطية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l4',
    title: { en: 'Context-Free Grammars', ar: 'القواعد الخالية من السياق' },
    description: { 
      en: 'A comprehensive lesson on Context-Free Grammars covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول القواعد الخالية من السياق يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Context-Free Grammars',
        'Identify key use cases for Context-Free Grammars in computer science',
        'Apply Context-Free Grammars to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Context-Free Grammars',
        'تحديد حالات الاستخدام الرئيسية لـ Context-Free Grammars في علوم الحاسب',
        'تطبيق Context-Free Grammars لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l4-s1',
        title: { en: 'Introduction to Context-Free Grammars', ar: 'مقدمة في القواعد الخالية من السياق' },
        type: 'concept',
        content: {
          en: 'Context-Free Grammars is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Context-Free Grammars, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد القواعد الخالية من السياق مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم القواعد الخالية من السياق، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Context-Free Grammars relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ القواعد الخالية من السياق على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Context-Free Grammars, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون القواعد الخالية من السياق، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Context-Free Grammars by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Context-Free Grammars to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع القواعد الخالية من السياق من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Context-Free Grammars is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، القواعد الخالية من السياق ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Context-Free Grammars is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['القواعد الخالية من السياق أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l4-q1',
        question: {
          en: 'What is the primary benefit of Context-Free Grammars?',
          ar: 'ما هي الفائدة الرئيسية من القواعد الخالية من السياق؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Context-Free Grammars is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم القواعد الخالية من السياق لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l5',
    title: { en: 'Pushdown Automata', ar: 'أتمتة الدفع لأسفل' },
    description: { 
      en: 'A comprehensive lesson on Pushdown Automata covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أتمتة الدفع لأسفل يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Pushdown Automata',
        'Identify key use cases for Pushdown Automata in computer science',
        'Apply Pushdown Automata to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Pushdown Automata',
        'تحديد حالات الاستخدام الرئيسية لـ Pushdown Automata في علوم الحاسب',
        'تطبيق Pushdown Automata لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l5-s1',
        title: { en: 'Introduction to Pushdown Automata', ar: 'مقدمة في أتمتة الدفع لأسفل' },
        type: 'concept',
        content: {
          en: 'Pushdown Automata is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Pushdown Automata, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أتمتة الدفع لأسفل مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أتمتة الدفع لأسفل، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Pushdown Automata relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أتمتة الدفع لأسفل على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Pushdown Automata, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أتمتة الدفع لأسفل، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Pushdown Automata by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Pushdown Automata to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أتمتة الدفع لأسفل من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Pushdown Automata is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أتمتة الدفع لأسفل ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Pushdown Automata is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أتمتة الدفع لأسفل أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l5-q1',
        question: {
          en: 'What is the primary benefit of Pushdown Automata?',
          ar: 'ما هي الفائدة الرئيسية من أتمتة الدفع لأسفل؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Pushdown Automata is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أتمتة الدفع لأسفل لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l6',
    title: { en: 'Turing Machines', ar: 'آلات تورينج' },
    description: { 
      en: 'A comprehensive lesson on Turing Machines covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول آلات تورينج يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Turing Machines',
        'Identify key use cases for Turing Machines in computer science',
        'Apply Turing Machines to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Turing Machines',
        'تحديد حالات الاستخدام الرئيسية لـ Turing Machines في علوم الحاسب',
        'تطبيق Turing Machines لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l6-s1',
        title: { en: 'Introduction to Turing Machines', ar: 'مقدمة في آلات تورينج' },
        type: 'concept',
        content: {
          en: 'Turing Machines is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Turing Machines, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد آلات تورينج مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم آلات تورينج، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Turing Machines relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ آلات تورينج على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Turing Machines, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون آلات تورينج، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Turing Machines by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Turing Machines to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع آلات تورينج من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Turing Machines is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، آلات تورينج ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Turing Machines is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['آلات تورينج أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l6-q1',
        question: {
          en: 'What is the primary benefit of Turing Machines?',
          ar: 'ما هي الفائدة الرئيسية من آلات تورينج؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Turing Machines is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم آلات تورينج لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l7',
    title: { en: 'Decidability', ar: 'قابلية الحسم' },
    description: { 
      en: 'A comprehensive lesson on Decidability covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول قابلية الحسم يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Decidability',
        'Identify key use cases for Decidability in computer science',
        'Apply Decidability to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Decidability',
        'تحديد حالات الاستخدام الرئيسية لـ Decidability في علوم الحاسب',
        'تطبيق Decidability لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l7-s1',
        title: { en: 'Introduction to Decidability', ar: 'مقدمة في قابلية الحسم' },
        type: 'concept',
        content: {
          en: 'Decidability is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Decidability, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد قابلية الحسم مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم قابلية الحسم، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Decidability relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ قابلية الحسم على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Decidability, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون قابلية الحسم، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Decidability by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Decidability to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع قابلية الحسم من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Decidability is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، قابلية الحسم ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Decidability is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['قابلية الحسم أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l7-q1',
        question: {
          en: 'What is the primary benefit of Decidability?',
          ar: 'ما هي الفائدة الرئيسية من قابلية الحسم؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Decidability is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم قابلية الحسم لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l8',
    title: { en: 'Halting Problem', ar: 'مشكلة التوقف' },
    description: { 
      en: 'A comprehensive lesson on Halting Problem covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مشكلة التوقف يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Halting Problem',
        'Identify key use cases for Halting Problem in computer science',
        'Apply Halting Problem to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Halting Problem',
        'تحديد حالات الاستخدام الرئيسية لـ Halting Problem في علوم الحاسب',
        'تطبيق Halting Problem لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l8-s1',
        title: { en: 'Introduction to Halting Problem', ar: 'مقدمة في مشكلة التوقف' },
        type: 'concept',
        content: {
          en: 'Halting Problem is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Halting Problem, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مشكلة التوقف مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مشكلة التوقف، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Halting Problem relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مشكلة التوقف على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Halting Problem, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مشكلة التوقف، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Halting Problem by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Halting Problem to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مشكلة التوقف من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Halting Problem is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مشكلة التوقف ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Halting Problem is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مشكلة التوقف أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l8-q1',
        question: {
          en: 'What is the primary benefit of Halting Problem?',
          ar: 'ما هي الفائدة الرئيسية من مشكلة التوقف؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Halting Problem is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مشكلة التوقف لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l9',
    title: { en: 'P vs NP', ar: 'مسألة P مقابل NP' },
    description: { 
      en: 'A comprehensive lesson on P vs NP covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مسألة P مقابل NP يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of P vs NP',
        'Identify key use cases for P vs NP in computer science',
        'Apply P vs NP to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ P vs NP',
        'تحديد حالات الاستخدام الرئيسية لـ P vs NP في علوم الحاسب',
        'تطبيق P vs NP لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l9-s1',
        title: { en: 'Introduction to P vs NP', ar: 'مقدمة في مسألة P مقابل NP' },
        type: 'concept',
        content: {
          en: 'P vs NP is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding P vs NP, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مسألة P مقابل NP مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مسألة P مقابل NP، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of P vs NP relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مسألة P مقابل NP على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without P vs NP, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مسألة P مقابل NP، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with P vs NP by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of P vs NP to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مسألة P مقابل NP من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, P vs NP is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مسألة P مقابل NP ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['P vs NP is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مسألة P مقابل NP أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l9-q1',
        question: {
          en: 'What is the primary benefit of P vs NP?',
          ar: 'ما هي الفائدة الرئيسية من مسألة P مقابل NP؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'P vs NP is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مسألة P مقابل NP لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'theory-comp-l10',
    title: { en: 'Computational Complexity', ar: 'التعقيد الحسابي' },
    description: { 
      en: 'A comprehensive lesson on Computational Complexity covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعقيد الحسابي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Computational Complexity',
        'Identify key use cases for Computational Complexity in computer science',
        'Apply Computational Complexity to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Computational Complexity',
        'تحديد حالات الاستخدام الرئيسية لـ Computational Complexity في علوم الحاسب',
        'تطبيق Computational Complexity لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'theory-comp-l10-s1',
        title: { en: 'Introduction to Computational Complexity', ar: 'مقدمة في التعقيد الحسابي' },
        type: 'concept',
        content: {
          en: 'Computational Complexity is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Computational Complexity, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعقيد الحسابي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعقيد الحسابي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'theory-comp-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Computational Complexity relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعقيد الحسابي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'theory-comp-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Computational Complexity, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعقيد الحسابي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'theory-comp-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Computational Complexity by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Computational Complexity to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعقيد الحسابي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'theory-comp-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Computational Complexity is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعقيد الحسابي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Computational Complexity is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعقيد الحسابي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'theory-comp-l10-q1',
        question: {
          en: 'What is the primary benefit of Computational Complexity?',
          ar: 'ما هي الفائدة الرئيسية من التعقيد الحسابي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Computational Complexity is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعقيد الحسابي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
