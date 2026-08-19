import { type Lesson } from '../lessons';

export const computer_graphics_lessons: Lesson[] = [
  {
    id: 'computer-graphics-l1',
    title: { en: 'Graphics Pipeline', ar: 'خط أنابيب الرسومات' },
    description: { 
      en: 'A comprehensive lesson on Graphics Pipeline covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول خط أنابيب الرسومات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Graphics Pipeline',
        'Identify key use cases for Graphics Pipeline in computer science',
        'Apply Graphics Pipeline to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Graphics Pipeline',
        'تحديد حالات الاستخدام الرئيسية لـ Graphics Pipeline في علوم الحاسب',
        'تطبيق Graphics Pipeline لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l1-s1',
        title: { en: 'Introduction to Graphics Pipeline', ar: 'مقدمة في خط أنابيب الرسومات' },
        type: 'concept',
        content: {
          en: 'Graphics Pipeline is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Graphics Pipeline, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد خط أنابيب الرسومات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم خط أنابيب الرسومات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Graphics Pipeline relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ خط أنابيب الرسومات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Graphics Pipeline, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون خط أنابيب الرسومات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Graphics Pipeline by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Graphics Pipeline to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع خط أنابيب الرسومات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Graphics Pipeline is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، خط أنابيب الرسومات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Graphics Pipeline is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['خط أنابيب الرسومات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l1-q1',
        question: {
          en: 'What is the primary benefit of Graphics Pipeline?',
          ar: 'ما هي الفائدة الرئيسية من خط أنابيب الرسومات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Graphics Pipeline is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم خط أنابيب الرسومات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l2',
    title: { en: 'Pixels & Resolutions', ar: 'البكسلات والدقة' },
    description: { 
      en: 'A comprehensive lesson on Pixels & Resolutions covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول البكسلات والدقة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Pixels & Resolutions',
        'Identify key use cases for Pixels & Resolutions in computer science',
        'Apply Pixels & Resolutions to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Pixels & Resolutions',
        'تحديد حالات الاستخدام الرئيسية لـ Pixels & Resolutions في علوم الحاسب',
        'تطبيق Pixels & Resolutions لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l2-s1',
        title: { en: 'Introduction to Pixels & Resolutions', ar: 'مقدمة في البكسلات والدقة' },
        type: 'concept',
        content: {
          en: 'Pixels & Resolutions is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Pixels & Resolutions, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد البكسلات والدقة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم البكسلات والدقة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Pixels & Resolutions relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ البكسلات والدقة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Pixels & Resolutions, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون البكسلات والدقة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Pixels & Resolutions by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Pixels & Resolutions to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع البكسلات والدقة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Pixels & Resolutions is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، البكسلات والدقة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Pixels & Resolutions is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['البكسلات والدقة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l2-q1',
        question: {
          en: 'What is the primary benefit of Pixels & Resolutions?',
          ar: 'ما هي الفائدة الرئيسية من البكسلات والدقة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Pixels & Resolutions is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم البكسلات والدقة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l3',
    title: { en: 'Color Models', ar: 'نماذج الألوان' },
    description: { 
      en: 'A comprehensive lesson on Color Models covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نماذج الألوان يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Color Models',
        'Identify key use cases for Color Models in computer science',
        'Apply Color Models to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Color Models',
        'تحديد حالات الاستخدام الرئيسية لـ Color Models في علوم الحاسب',
        'تطبيق Color Models لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l3-s1',
        title: { en: 'Introduction to Color Models', ar: 'مقدمة في نماذج الألوان' },
        type: 'concept',
        content: {
          en: 'Color Models is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Color Models, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نماذج الألوان مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نماذج الألوان، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Color Models relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نماذج الألوان على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Color Models, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نماذج الألوان، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Color Models by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Color Models to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نماذج الألوان من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Color Models is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نماذج الألوان ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Color Models is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نماذج الألوان أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l3-q1',
        question: {
          en: 'What is the primary benefit of Color Models?',
          ar: 'ما هي الفائدة الرئيسية من نماذج الألوان؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Color Models is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نماذج الألوان لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l4',
    title: { en: '2D Transformations', ar: 'التحويلات ثنائية الأبعاد' },
    description: { 
      en: 'A comprehensive lesson on 2D Transformations covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التحويلات ثنائية الأبعاد يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of 2D Transformations',
        'Identify key use cases for 2D Transformations in computer science',
        'Apply 2D Transformations to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ 2D Transformations',
        'تحديد حالات الاستخدام الرئيسية لـ 2D Transformations في علوم الحاسب',
        'تطبيق 2D Transformations لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l4-s1',
        title: { en: 'Introduction to 2D Transformations', ar: 'مقدمة في التحويلات ثنائية الأبعاد' },
        type: 'concept',
        content: {
          en: '2D Transformations is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding 2D Transformations, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التحويلات ثنائية الأبعاد مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التحويلات ثنائية الأبعاد، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of 2D Transformations relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التحويلات ثنائية الأبعاد على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without 2D Transformations, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التحويلات ثنائية الأبعاد، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with 2D Transformations by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of 2D Transformations to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التحويلات ثنائية الأبعاد من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, 2D Transformations is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التحويلات ثنائية الأبعاد ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['2D Transformations is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التحويلات ثنائية الأبعاد أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l4-q1',
        question: {
          en: 'What is the primary benefit of 2D Transformations?',
          ar: 'ما هي الفائدة الرئيسية من التحويلات ثنائية الأبعاد؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: '2D Transformations is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التحويلات ثنائية الأبعاد لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l5',
    title: { en: '3D Transformations', ar: 'التحويلات ثلاثية الأبعاد' },
    description: { 
      en: 'A comprehensive lesson on 3D Transformations covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التحويلات ثلاثية الأبعاد يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of 3D Transformations',
        'Identify key use cases for 3D Transformations in computer science',
        'Apply 3D Transformations to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ 3D Transformations',
        'تحديد حالات الاستخدام الرئيسية لـ 3D Transformations في علوم الحاسب',
        'تطبيق 3D Transformations لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l5-s1',
        title: { en: 'Introduction to 3D Transformations', ar: 'مقدمة في التحويلات ثلاثية الأبعاد' },
        type: 'concept',
        content: {
          en: '3D Transformations is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding 3D Transformations, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التحويلات ثلاثية الأبعاد مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التحويلات ثلاثية الأبعاد، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of 3D Transformations relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التحويلات ثلاثية الأبعاد على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without 3D Transformations, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التحويلات ثلاثية الأبعاد، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with 3D Transformations by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of 3D Transformations to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التحويلات ثلاثية الأبعاد من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, 3D Transformations is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التحويلات ثلاثية الأبعاد ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['3D Transformations is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التحويلات ثلاثية الأبعاد أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l5-q1',
        question: {
          en: 'What is the primary benefit of 3D Transformations?',
          ar: 'ما هي الفائدة الرئيسية من التحويلات ثلاثية الأبعاد؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: '3D Transformations is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التحويلات ثلاثية الأبعاد لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l6',
    title: { en: 'Rendering Basics', ar: 'أساسيات التصيير' },
    description: { 
      en: 'A comprehensive lesson on Rendering Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات التصيير يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Rendering Basics',
        'Identify key use cases for Rendering Basics in computer science',
        'Apply Rendering Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Rendering Basics',
        'تحديد حالات الاستخدام الرئيسية لـ Rendering Basics في علوم الحاسب',
        'تطبيق Rendering Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l6-s1',
        title: { en: 'Introduction to Rendering Basics', ar: 'مقدمة في أساسيات التصيير' },
        type: 'concept',
        content: {
          en: 'Rendering Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Rendering Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات التصيير مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات التصيير، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Rendering Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات التصيير على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Rendering Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات التصيير، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Rendering Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Rendering Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات التصيير من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Rendering Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات التصيير ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Rendering Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات التصيير أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l6-q1',
        question: {
          en: 'What is the primary benefit of Rendering Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات التصيير؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Rendering Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات التصيير لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l7',
    title: { en: 'Shading & Lighting', ar: 'التظليل والإضاءة' },
    description: { 
      en: 'A comprehensive lesson on Shading & Lighting covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التظليل والإضاءة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Shading & Lighting',
        'Identify key use cases for Shading & Lighting in computer science',
        'Apply Shading & Lighting to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Shading & Lighting',
        'تحديد حالات الاستخدام الرئيسية لـ Shading & Lighting في علوم الحاسب',
        'تطبيق Shading & Lighting لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l7-s1',
        title: { en: 'Introduction to Shading & Lighting', ar: 'مقدمة في التظليل والإضاءة' },
        type: 'concept',
        content: {
          en: 'Shading & Lighting is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Shading & Lighting, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التظليل والإضاءة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التظليل والإضاءة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Shading & Lighting relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التظليل والإضاءة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Shading & Lighting, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التظليل والإضاءة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Shading & Lighting by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Shading & Lighting to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التظليل والإضاءة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Shading & Lighting is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التظليل والإضاءة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Shading & Lighting is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التظليل والإضاءة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l7-q1',
        question: {
          en: 'What is the primary benefit of Shading & Lighting?',
          ar: 'ما هي الفائدة الرئيسية من التظليل والإضاءة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Shading & Lighting is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التظليل والإضاءة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l8',
    title: { en: 'Textures', ar: 'الخامات' },
    description: { 
      en: 'A comprehensive lesson on Textures covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الخامات يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Textures',
        'Identify key use cases for Textures in computer science',
        'Apply Textures to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Textures',
        'تحديد حالات الاستخدام الرئيسية لـ Textures في علوم الحاسب',
        'تطبيق Textures لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l8-s1',
        title: { en: 'Introduction to Textures', ar: 'مقدمة في الخامات' },
        type: 'concept',
        content: {
          en: 'Textures is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Textures, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الخامات مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الخامات، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Textures relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الخامات على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Textures, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الخامات، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Textures by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Textures to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الخامات من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Textures is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الخامات ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Textures is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الخامات أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l8-q1',
        question: {
          en: 'What is the primary benefit of Textures?',
          ar: 'ما هي الفائدة الرئيسية من الخامات؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Textures is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الخامات لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l9',
    title: { en: 'Ray Tracing', ar: 'تتبع الأشعة' },
    description: { 
      en: 'A comprehensive lesson on Ray Tracing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول تتبع الأشعة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Ray Tracing',
        'Identify key use cases for Ray Tracing in computer science',
        'Apply Ray Tracing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Ray Tracing',
        'تحديد حالات الاستخدام الرئيسية لـ Ray Tracing في علوم الحاسب',
        'تطبيق Ray Tracing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l9-s1',
        title: { en: 'Introduction to Ray Tracing', ar: 'مقدمة في تتبع الأشعة' },
        type: 'concept',
        content: {
          en: 'Ray Tracing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Ray Tracing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد تتبع الأشعة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم تتبع الأشعة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Ray Tracing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ تتبع الأشعة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Ray Tracing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون تتبع الأشعة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Ray Tracing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Ray Tracing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع تتبع الأشعة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Ray Tracing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، تتبع الأشعة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Ray Tracing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['تتبع الأشعة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l9-q1',
        question: {
          en: 'What is the primary benefit of Ray Tracing?',
          ar: 'ما هي الفائدة الرئيسية من تتبع الأشعة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Ray Tracing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم تتبع الأشعة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'computer-graphics-l10',
    title: { en: 'WebGL Basics', ar: 'أساسيات WebGL' },
    description: { 
      en: 'A comprehensive lesson on WebGL Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات WebGL يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of WebGL Basics',
        'Identify key use cases for WebGL Basics in computer science',
        'Apply WebGL Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ WebGL Basics',
        'تحديد حالات الاستخدام الرئيسية لـ WebGL Basics في علوم الحاسب',
        'تطبيق WebGL Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'computer-graphics-l10-s1',
        title: { en: 'Introduction to WebGL Basics', ar: 'مقدمة في أساسيات WebGL' },
        type: 'concept',
        content: {
          en: 'WebGL Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding WebGL Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات WebGL مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات WebGL، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'computer-graphics-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of WebGL Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات WebGL على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'computer-graphics-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without WebGL Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات WebGL، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'computer-graphics-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with WebGL Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of WebGL Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات WebGL من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'computer-graphics-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, WebGL Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات WebGL ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['WebGL Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات WebGL أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'computer-graphics-l10-q1',
        question: {
          en: 'What is the primary benefit of WebGL Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات WebGL؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'WebGL Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات WebGL لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
