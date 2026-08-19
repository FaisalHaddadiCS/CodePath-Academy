import { type Lesson } from '../lessons';

export const ai_ml_lessons: Lesson[] = [
  {
    id: 'ai-ml-l1',
    title: { en: 'What is AI?', ar: 'ما هو الذكاء الاصطناعي؟' },
    description: { 
      en: 'A comprehensive lesson on What is AI? covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول ما هو الذكاء الاصطناعي؟ يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of What is AI?',
        'Identify key use cases for What is AI? in computer science',
        'Apply What is AI? to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ What is AI?',
        'تحديد حالات الاستخدام الرئيسية لـ What is AI? في علوم الحاسب',
        'تطبيق What is AI? لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l1-s1',
        title: { en: 'Introduction to What is AI?', ar: 'مقدمة في ما هو الذكاء الاصطناعي؟' },
        type: 'concept',
        content: {
          en: 'What is AI? is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding What is AI?, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد ما هو الذكاء الاصطناعي؟ مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم ما هو الذكاء الاصطناعي؟، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of What is AI? relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ ما هو الذكاء الاصطناعي؟ على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without What is AI?, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون ما هو الذكاء الاصطناعي؟، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with What is AI? by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of What is AI? to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع ما هو الذكاء الاصطناعي؟ من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, What is AI? is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، ما هو الذكاء الاصطناعي؟ ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['What is AI? is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['ما هو الذكاء الاصطناعي؟ أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l1-q1',
        question: {
          en: 'What is the primary benefit of What is AI??',
          ar: 'ما هي الفائدة الرئيسية من ما هو الذكاء الاصطناعي؟؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'What is AI? is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم ما هو الذكاء الاصطناعي؟ لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l2',
    title: { en: 'Supervised Learning', ar: 'التعلم الخاضع للإشراف' },
    description: { 
      en: 'A comprehensive lesson on Supervised Learning covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعلم الخاضع للإشراف يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Supervised Learning',
        'Identify key use cases for Supervised Learning in computer science',
        'Apply Supervised Learning to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Supervised Learning',
        'تحديد حالات الاستخدام الرئيسية لـ Supervised Learning في علوم الحاسب',
        'تطبيق Supervised Learning لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l2-s1',
        title: { en: 'Introduction to Supervised Learning', ar: 'مقدمة في التعلم الخاضع للإشراف' },
        type: 'concept',
        content: {
          en: 'Supervised Learning is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Supervised Learning, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعلم الخاضع للإشراف مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعلم الخاضع للإشراف، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Supervised Learning relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعلم الخاضع للإشراف على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Supervised Learning, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعلم الخاضع للإشراف، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Supervised Learning by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Supervised Learning to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعلم الخاضع للإشراف من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Supervised Learning is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعلم الخاضع للإشراف ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Supervised Learning is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعلم الخاضع للإشراف أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l2-q1',
        question: {
          en: 'What is the primary benefit of Supervised Learning?',
          ar: 'ما هي الفائدة الرئيسية من التعلم الخاضع للإشراف؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Supervised Learning is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعلم الخاضع للإشراف لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l3',
    title: { en: 'Unsupervised Learning', ar: 'التعلم غير الخاضع للإشراف' },
    description: { 
      en: 'A comprehensive lesson on Unsupervised Learning covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعلم غير الخاضع للإشراف يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Unsupervised Learning',
        'Identify key use cases for Unsupervised Learning in computer science',
        'Apply Unsupervised Learning to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Unsupervised Learning',
        'تحديد حالات الاستخدام الرئيسية لـ Unsupervised Learning في علوم الحاسب',
        'تطبيق Unsupervised Learning لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l3-s1',
        title: { en: 'Introduction to Unsupervised Learning', ar: 'مقدمة في التعلم غير الخاضع للإشراف' },
        type: 'concept',
        content: {
          en: 'Unsupervised Learning is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Unsupervised Learning, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعلم غير الخاضع للإشراف مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعلم غير الخاضع للإشراف، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Unsupervised Learning relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعلم غير الخاضع للإشراف على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Unsupervised Learning, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعلم غير الخاضع للإشراف، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Unsupervised Learning by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Unsupervised Learning to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعلم غير الخاضع للإشراف من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Unsupervised Learning is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعلم غير الخاضع للإشراف ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Unsupervised Learning is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعلم غير الخاضع للإشراف أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l3-q1',
        question: {
          en: 'What is the primary benefit of Unsupervised Learning?',
          ar: 'ما هي الفائدة الرئيسية من التعلم غير الخاضع للإشراف؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Unsupervised Learning is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعلم غير الخاضع للإشراف لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l4',
    title: { en: 'Neural Networks', ar: 'الشبكات العصبية' },
    description: { 
      en: 'A comprehensive lesson on Neural Networks covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الشبكات العصبية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Neural Networks',
        'Identify key use cases for Neural Networks in computer science',
        'Apply Neural Networks to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Neural Networks',
        'تحديد حالات الاستخدام الرئيسية لـ Neural Networks في علوم الحاسب',
        'تطبيق Neural Networks لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l4-s1',
        title: { en: 'Introduction to Neural Networks', ar: 'مقدمة في الشبكات العصبية' },
        type: 'concept',
        content: {
          en: 'Neural Networks is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Neural Networks, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الشبكات العصبية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الشبكات العصبية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Neural Networks relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الشبكات العصبية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Neural Networks, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الشبكات العصبية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Neural Networks by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Neural Networks to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الشبكات العصبية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Neural Networks is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الشبكات العصبية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Neural Networks is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الشبكات العصبية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l4-q1',
        question: {
          en: 'What is the primary benefit of Neural Networks?',
          ar: 'ما هي الفائدة الرئيسية من الشبكات العصبية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Neural Networks is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الشبكات العصبية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l5',
    title: { en: 'Deep Learning', ar: 'التعلم العميق' },
    description: { 
      en: 'A comprehensive lesson on Deep Learning covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التعلم العميق يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Deep Learning',
        'Identify key use cases for Deep Learning in computer science',
        'Apply Deep Learning to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Deep Learning',
        'تحديد حالات الاستخدام الرئيسية لـ Deep Learning في علوم الحاسب',
        'تطبيق Deep Learning لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l5-s1',
        title: { en: 'Introduction to Deep Learning', ar: 'مقدمة في التعلم العميق' },
        type: 'concept',
        content: {
          en: 'Deep Learning is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Deep Learning, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التعلم العميق مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التعلم العميق، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Deep Learning relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التعلم العميق على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Deep Learning, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التعلم العميق، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Deep Learning by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Deep Learning to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التعلم العميق من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Deep Learning is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التعلم العميق ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Deep Learning is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التعلم العميق أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l5-q1',
        question: {
          en: 'What is the primary benefit of Deep Learning?',
          ar: 'ما هي الفائدة الرئيسية من التعلم العميق؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Deep Learning is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التعلم العميق لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l6',
    title: { en: 'Natural Language Processing', ar: 'معالجة اللغات الطبيعية' },
    description: { 
      en: 'A comprehensive lesson on Natural Language Processing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول معالجة اللغات الطبيعية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Natural Language Processing',
        'Identify key use cases for Natural Language Processing in computer science',
        'Apply Natural Language Processing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Natural Language Processing',
        'تحديد حالات الاستخدام الرئيسية لـ Natural Language Processing في علوم الحاسب',
        'تطبيق Natural Language Processing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l6-s1',
        title: { en: 'Introduction to Natural Language Processing', ar: 'مقدمة في معالجة اللغات الطبيعية' },
        type: 'concept',
        content: {
          en: 'Natural Language Processing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Natural Language Processing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد معالجة اللغات الطبيعية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم معالجة اللغات الطبيعية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Natural Language Processing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ معالجة اللغات الطبيعية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Natural Language Processing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون معالجة اللغات الطبيعية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Natural Language Processing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Natural Language Processing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع معالجة اللغات الطبيعية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Natural Language Processing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، معالجة اللغات الطبيعية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Natural Language Processing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['معالجة اللغات الطبيعية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l6-q1',
        question: {
          en: 'What is the primary benefit of Natural Language Processing?',
          ar: 'ما هي الفائدة الرئيسية من معالجة اللغات الطبيعية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Natural Language Processing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم معالجة اللغات الطبيعية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l7',
    title: { en: 'Computer Vision', ar: 'الرؤية الحاسوبية' },
    description: { 
      en: 'A comprehensive lesson on Computer Vision covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الرؤية الحاسوبية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Computer Vision',
        'Identify key use cases for Computer Vision in computer science',
        'Apply Computer Vision to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Computer Vision',
        'تحديد حالات الاستخدام الرئيسية لـ Computer Vision في علوم الحاسب',
        'تطبيق Computer Vision لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l7-s1',
        title: { en: 'Introduction to Computer Vision', ar: 'مقدمة في الرؤية الحاسوبية' },
        type: 'concept',
        content: {
          en: 'Computer Vision is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Computer Vision, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الرؤية الحاسوبية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الرؤية الحاسوبية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Computer Vision relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الرؤية الحاسوبية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Computer Vision, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الرؤية الحاسوبية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Computer Vision by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Computer Vision to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الرؤية الحاسوبية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Computer Vision is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الرؤية الحاسوبية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Computer Vision is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الرؤية الحاسوبية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l7-q1',
        question: {
          en: 'What is the primary benefit of Computer Vision?',
          ar: 'ما هي الفائدة الرئيسية من الرؤية الحاسوبية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Computer Vision is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الرؤية الحاسوبية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l8',
    title: { en: 'Model Evaluation', ar: 'تقييم النماذج' },
    description: { 
      en: 'A comprehensive lesson on Model Evaluation covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول تقييم النماذج يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Model Evaluation',
        'Identify key use cases for Model Evaluation in computer science',
        'Apply Model Evaluation to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Model Evaluation',
        'تحديد حالات الاستخدام الرئيسية لـ Model Evaluation في علوم الحاسب',
        'تطبيق Model Evaluation لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l8-s1',
        title: { en: 'Introduction to Model Evaluation', ar: 'مقدمة في تقييم النماذج' },
        type: 'concept',
        content: {
          en: 'Model Evaluation is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Model Evaluation, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد تقييم النماذج مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم تقييم النماذج، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Model Evaluation relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ تقييم النماذج على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Model Evaluation, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون تقييم النماذج، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Model Evaluation by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Model Evaluation to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع تقييم النماذج من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Model Evaluation is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، تقييم النماذج ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Model Evaluation is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['تقييم النماذج أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l8-q1',
        question: {
          en: 'What is the primary benefit of Model Evaluation?',
          ar: 'ما هي الفائدة الرئيسية من تقييم النماذج؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Model Evaluation is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم تقييم النماذج لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l9',
    title: { en: 'Bias in AI', ar: 'التحيز في الذكاء الاصطناعي' },
    description: { 
      en: 'A comprehensive lesson on Bias in AI covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التحيز في الذكاء الاصطناعي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Bias in AI',
        'Identify key use cases for Bias in AI in computer science',
        'Apply Bias in AI to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Bias in AI',
        'تحديد حالات الاستخدام الرئيسية لـ Bias in AI في علوم الحاسب',
        'تطبيق Bias in AI لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l9-s1',
        title: { en: 'Introduction to Bias in AI', ar: 'مقدمة في التحيز في الذكاء الاصطناعي' },
        type: 'concept',
        content: {
          en: 'Bias in AI is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Bias in AI, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التحيز في الذكاء الاصطناعي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التحيز في الذكاء الاصطناعي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Bias in AI relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التحيز في الذكاء الاصطناعي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Bias in AI, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التحيز في الذكاء الاصطناعي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Bias in AI by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Bias in AI to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التحيز في الذكاء الاصطناعي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Bias in AI is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التحيز في الذكاء الاصطناعي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Bias in AI is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التحيز في الذكاء الاصطناعي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l9-q1',
        question: {
          en: 'What is the primary benefit of Bias in AI?',
          ar: 'ما هي الفائدة الرئيسية من التحيز في الذكاء الاصطناعي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Bias in AI is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التحيز في الذكاء الاصطناعي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'ai-ml-l10',
    title: { en: 'Future of AI', ar: 'مستقبل الذكاء الاصطناعي' },
    description: { 
      en: 'A comprehensive lesson on Future of AI covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مستقبل الذكاء الاصطناعي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Future of AI',
        'Identify key use cases for Future of AI in computer science',
        'Apply Future of AI to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Future of AI',
        'تحديد حالات الاستخدام الرئيسية لـ Future of AI في علوم الحاسب',
        'تطبيق Future of AI لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'ai-ml-l10-s1',
        title: { en: 'Introduction to Future of AI', ar: 'مقدمة في مستقبل الذكاء الاصطناعي' },
        type: 'concept',
        content: {
          en: 'Future of AI is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Future of AI, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مستقبل الذكاء الاصطناعي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مستقبل الذكاء الاصطناعي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'ai-ml-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Future of AI relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مستقبل الذكاء الاصطناعي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'ai-ml-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Future of AI, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مستقبل الذكاء الاصطناعي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'ai-ml-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Future of AI by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Future of AI to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مستقبل الذكاء الاصطناعي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'ai-ml-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Future of AI is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مستقبل الذكاء الاصطناعي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Future of AI is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مستقبل الذكاء الاصطناعي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'ai-ml-l10-q1',
        question: {
          en: 'What is the primary benefit of Future of AI?',
          ar: 'ما هي الفائدة الرئيسية من مستقبل الذكاء الاصطناعي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Future of AI is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مستقبل الذكاء الاصطناعي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
