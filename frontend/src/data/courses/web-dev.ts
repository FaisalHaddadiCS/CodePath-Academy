import { type Lesson } from '../lessons';

export const web_dev_lessons: Lesson[] = [
  {
    id: 'web-dev-l1',
    title: { en: 'HTML Basics', ar: 'أساسيات HTML' },
    description: { 
      en: 'A comprehensive lesson on HTML Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات HTML يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of HTML Basics',
        'Identify key use cases for HTML Basics in computer science',
        'Apply HTML Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ HTML Basics',
        'تحديد حالات الاستخدام الرئيسية لـ HTML Basics في علوم الحاسب',
        'تطبيق HTML Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l1-s1',
        title: { en: 'Introduction to HTML Basics', ar: 'مقدمة في أساسيات HTML' },
        type: 'concept',
        content: {
          en: 'HTML Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding HTML Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات HTML مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات HTML، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of HTML Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات HTML على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without HTML Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات HTML، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with HTML Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of HTML Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات HTML من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, HTML Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات HTML ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['HTML Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات HTML أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l1-q1',
        question: {
          en: 'What is the primary benefit of HTML Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات HTML؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'HTML Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات HTML لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l2',
    title: { en: 'Semantic HTML', ar: 'HTML الدلالية' },
    description: { 
      en: 'A comprehensive lesson on Semantic HTML covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول HTML الدلالية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Semantic HTML',
        'Identify key use cases for Semantic HTML in computer science',
        'Apply Semantic HTML to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Semantic HTML',
        'تحديد حالات الاستخدام الرئيسية لـ Semantic HTML في علوم الحاسب',
        'تطبيق Semantic HTML لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l2-s1',
        title: { en: 'Introduction to Semantic HTML', ar: 'مقدمة في HTML الدلالية' },
        type: 'concept',
        content: {
          en: 'Semantic HTML is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Semantic HTML, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد HTML الدلالية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم HTML الدلالية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Semantic HTML relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ HTML الدلالية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Semantic HTML, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون HTML الدلالية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Semantic HTML by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Semantic HTML to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع HTML الدلالية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Semantic HTML is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، HTML الدلالية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Semantic HTML is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['HTML الدلالية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l2-q1',
        question: {
          en: 'What is the primary benefit of Semantic HTML?',
          ar: 'ما هي الفائدة الرئيسية من HTML الدلالية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Semantic HTML is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم HTML الدلالية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l3',
    title: { en: 'CSS Styling', ar: 'تنسيق CSS' },
    description: { 
      en: 'A comprehensive lesson on CSS Styling covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول تنسيق CSS يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of CSS Styling',
        'Identify key use cases for CSS Styling in computer science',
        'Apply CSS Styling to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ CSS Styling',
        'تحديد حالات الاستخدام الرئيسية لـ CSS Styling في علوم الحاسب',
        'تطبيق CSS Styling لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l3-s1',
        title: { en: 'Introduction to CSS Styling', ar: 'مقدمة في تنسيق CSS' },
        type: 'concept',
        content: {
          en: 'CSS Styling is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding CSS Styling, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد تنسيق CSS مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم تنسيق CSS، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of CSS Styling relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ تنسيق CSS على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without CSS Styling, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون تنسيق CSS، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with CSS Styling by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of CSS Styling to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع تنسيق CSS من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, CSS Styling is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، تنسيق CSS ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['CSS Styling is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['تنسيق CSS أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l3-q1',
        question: {
          en: 'What is the primary benefit of CSS Styling?',
          ar: 'ما هي الفائدة الرئيسية من تنسيق CSS؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'CSS Styling is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم تنسيق CSS لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l4',
    title: { en: 'Flexbox', ar: 'صندوق المرونة Flexbox' },
    description: { 
      en: 'A comprehensive lesson on Flexbox covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول صندوق المرونة Flexbox يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Flexbox',
        'Identify key use cases for Flexbox in computer science',
        'Apply Flexbox to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Flexbox',
        'تحديد حالات الاستخدام الرئيسية لـ Flexbox في علوم الحاسب',
        'تطبيق Flexbox لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l4-s1',
        title: { en: 'Introduction to Flexbox', ar: 'مقدمة في صندوق المرونة Flexbox' },
        type: 'concept',
        content: {
          en: 'Flexbox is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Flexbox, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد صندوق المرونة Flexbox مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم صندوق المرونة Flexbox، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Flexbox relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ صندوق المرونة Flexbox على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Flexbox, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون صندوق المرونة Flexbox، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Flexbox by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Flexbox to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع صندوق المرونة Flexbox من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Flexbox is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، صندوق المرونة Flexbox ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Flexbox is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['صندوق المرونة Flexbox أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l4-q1',
        question: {
          en: 'What is the primary benefit of Flexbox?',
          ar: 'ما هي الفائدة الرئيسية من صندوق المرونة Flexbox؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Flexbox is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم صندوق المرونة Flexbox لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l5',
    title: { en: 'CSS Grid', ar: 'شبكة CSS Grid' },
    description: { 
      en: 'A comprehensive lesson on CSS Grid covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول شبكة CSS Grid يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of CSS Grid',
        'Identify key use cases for CSS Grid in computer science',
        'Apply CSS Grid to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ CSS Grid',
        'تحديد حالات الاستخدام الرئيسية لـ CSS Grid في علوم الحاسب',
        'تطبيق CSS Grid لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l5-s1',
        title: { en: 'Introduction to CSS Grid', ar: 'مقدمة في شبكة CSS Grid' },
        type: 'concept',
        content: {
          en: 'CSS Grid is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding CSS Grid, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد شبكة CSS Grid مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم شبكة CSS Grid، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of CSS Grid relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ شبكة CSS Grid على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without CSS Grid, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون شبكة CSS Grid، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with CSS Grid by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of CSS Grid to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع شبكة CSS Grid من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, CSS Grid is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، شبكة CSS Grid ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['CSS Grid is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['شبكة CSS Grid أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l5-q1',
        question: {
          en: 'What is the primary benefit of CSS Grid?',
          ar: 'ما هي الفائدة الرئيسية من شبكة CSS Grid؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'CSS Grid is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم شبكة CSS Grid لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l6',
    title: { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
    description: { 
      en: 'A comprehensive lesson on Responsive Design covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التصميم المتجاوب يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Responsive Design',
        'Identify key use cases for Responsive Design in computer science',
        'Apply Responsive Design to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Responsive Design',
        'تحديد حالات الاستخدام الرئيسية لـ Responsive Design في علوم الحاسب',
        'تطبيق Responsive Design لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l6-s1',
        title: { en: 'Introduction to Responsive Design', ar: 'مقدمة في التصميم المتجاوب' },
        type: 'concept',
        content: {
          en: 'Responsive Design is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Responsive Design, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التصميم المتجاوب مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التصميم المتجاوب، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Responsive Design relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التصميم المتجاوب على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Responsive Design, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التصميم المتجاوب، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Responsive Design by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Responsive Design to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التصميم المتجاوب من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Responsive Design is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التصميم المتجاوب ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Responsive Design is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التصميم المتجاوب أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l6-q1',
        question: {
          en: 'What is the primary benefit of Responsive Design?',
          ar: 'ما هي الفائدة الرئيسية من التصميم المتجاوب؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Responsive Design is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التصميم المتجاوب لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l7',
    title: { en: 'Forms & Validation', ar: 'النماذج والتحقق' },
    description: { 
      en: 'A comprehensive lesson on Forms & Validation covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول النماذج والتحقق يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Forms & Validation',
        'Identify key use cases for Forms & Validation in computer science',
        'Apply Forms & Validation to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Forms & Validation',
        'تحديد حالات الاستخدام الرئيسية لـ Forms & Validation في علوم الحاسب',
        'تطبيق Forms & Validation لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l7-s1',
        title: { en: 'Introduction to Forms & Validation', ar: 'مقدمة في النماذج والتحقق' },
        type: 'concept',
        content: {
          en: 'Forms & Validation is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Forms & Validation, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد النماذج والتحقق مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم النماذج والتحقق، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Forms & Validation relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ النماذج والتحقق على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Forms & Validation, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون النماذج والتحقق، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Forms & Validation by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Forms & Validation to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع النماذج والتحقق من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Forms & Validation is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، النماذج والتحقق ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Forms & Validation is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['النماذج والتحقق أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l7-q1',
        question: {
          en: 'What is the primary benefit of Forms & Validation?',
          ar: 'ما هي الفائدة الرئيسية من النماذج والتحقق؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Forms & Validation is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم النماذج والتحقق لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l8',
    title: { en: 'Accessibility (a11y)', ar: 'إمكانية الوصول' },
    description: { 
      en: 'A comprehensive lesson on Accessibility (a11y) covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول إمكانية الوصول يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Accessibility (a11y)',
        'Identify key use cases for Accessibility (a11y) in computer science',
        'Apply Accessibility (a11y) to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Accessibility (a11y)',
        'تحديد حالات الاستخدام الرئيسية لـ Accessibility (a11y) في علوم الحاسب',
        'تطبيق Accessibility (a11y) لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l8-s1',
        title: { en: 'Introduction to Accessibility (a11y)', ar: 'مقدمة في إمكانية الوصول' },
        type: 'concept',
        content: {
          en: 'Accessibility (a11y) is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Accessibility (a11y), developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد إمكانية الوصول مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم إمكانية الوصول، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Accessibility (a11y) relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ إمكانية الوصول على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Accessibility (a11y), the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون إمكانية الوصول، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Accessibility (a11y) by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Accessibility (a11y) to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع إمكانية الوصول من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Accessibility (a11y) is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، إمكانية الوصول ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Accessibility (a11y) is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['إمكانية الوصول أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l8-q1',
        question: {
          en: 'What is the primary benefit of Accessibility (a11y)?',
          ar: 'ما هي الفائدة الرئيسية من إمكانية الوصول؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Accessibility (a11y) is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم إمكانية الوصول لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l9',
    title: { en: 'SEO Basics', ar: 'أساسيات تحسين محركات البحث' },
    description: { 
      en: 'A comprehensive lesson on SEO Basics covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول أساسيات تحسين محركات البحث يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of SEO Basics',
        'Identify key use cases for SEO Basics in computer science',
        'Apply SEO Basics to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ SEO Basics',
        'تحديد حالات الاستخدام الرئيسية لـ SEO Basics في علوم الحاسب',
        'تطبيق SEO Basics لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l9-s1',
        title: { en: 'Introduction to SEO Basics', ar: 'مقدمة في أساسيات تحسين محركات البحث' },
        type: 'concept',
        content: {
          en: 'SEO Basics is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding SEO Basics, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد أساسيات تحسين محركات البحث مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم أساسيات تحسين محركات البحث، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of SEO Basics relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ أساسيات تحسين محركات البحث على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without SEO Basics, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون أساسيات تحسين محركات البحث، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with SEO Basics by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of SEO Basics to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع أساسيات تحسين محركات البحث من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, SEO Basics is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، أساسيات تحسين محركات البحث ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['SEO Basics is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['أساسيات تحسين محركات البحث أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l9-q1',
        question: {
          en: 'What is the primary benefit of SEO Basics?',
          ar: 'ما هي الفائدة الرئيسية من أساسيات تحسين محركات البحث؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'SEO Basics is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم أساسيات تحسين محركات البحث لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'web-dev-l10',
    title: { en: 'Deployment', ar: 'النشر' },
    description: { 
      en: 'A comprehensive lesson on Deployment covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول النشر يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Deployment',
        'Identify key use cases for Deployment in computer science',
        'Apply Deployment to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Deployment',
        'تحديد حالات الاستخدام الرئيسية لـ Deployment في علوم الحاسب',
        'تطبيق Deployment لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'web-dev-l10-s1',
        title: { en: 'Introduction to Deployment', ar: 'مقدمة في النشر' },
        type: 'concept',
        content: {
          en: 'Deployment is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Deployment, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد النشر مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم النشر، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'web-dev-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Deployment relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ النشر على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'web-dev-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Deployment, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون النشر، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'web-dev-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Deployment by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Deployment to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع النشر من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'web-dev-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Deployment is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، النشر ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Deployment is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['النشر أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'web-dev-l10-q1',
        question: {
          en: 'What is the primary benefit of Deployment?',
          ar: 'ما هي الفائدة الرئيسية من النشر؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Deployment is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم النشر لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
