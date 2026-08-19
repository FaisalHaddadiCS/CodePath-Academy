import { type Lesson } from '../lessons';

export const cybersecurity_lessons: Lesson[] = [
  {
    id: 'cybersecurity-l1',
    title: { en: 'CIA Triad', ar: 'مثلث CIA' },
    description: { 
      en: 'A comprehensive lesson on CIA Triad covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مثلث CIA يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of CIA Triad',
        'Identify key use cases for CIA Triad in computer science',
        'Apply CIA Triad to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ CIA Triad',
        'تحديد حالات الاستخدام الرئيسية لـ CIA Triad في علوم الحاسب',
        'تطبيق CIA Triad لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l1-s1',
        title: { en: 'Introduction to CIA Triad', ar: 'مقدمة في مثلث CIA' },
        type: 'concept',
        content: {
          en: 'CIA Triad is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding CIA Triad, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مثلث CIA مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مثلث CIA، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of CIA Triad relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مثلث CIA على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without CIA Triad, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مثلث CIA، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with CIA Triad by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of CIA Triad to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مثلث CIA من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, CIA Triad is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مثلث CIA ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['CIA Triad is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مثلث CIA أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l1-q1',
        question: {
          en: 'What is the primary benefit of CIA Triad?',
          ar: 'ما هي الفائدة الرئيسية من مثلث CIA؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'CIA Triad is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مثلث CIA لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l2',
    title: { en: 'Passwords & Hashing', ar: 'كلمات المرور والتجزئة' },
    description: { 
      en: 'A comprehensive lesson on Passwords & Hashing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول كلمات المرور والتجزئة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Passwords & Hashing',
        'Identify key use cases for Passwords & Hashing in computer science',
        'Apply Passwords & Hashing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Passwords & Hashing',
        'تحديد حالات الاستخدام الرئيسية لـ Passwords & Hashing في علوم الحاسب',
        'تطبيق Passwords & Hashing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l2-s1',
        title: { en: 'Introduction to Passwords & Hashing', ar: 'مقدمة في كلمات المرور والتجزئة' },
        type: 'concept',
        content: {
          en: 'Passwords & Hashing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Passwords & Hashing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد كلمات المرور والتجزئة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم كلمات المرور والتجزئة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Passwords & Hashing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ كلمات المرور والتجزئة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Passwords & Hashing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون كلمات المرور والتجزئة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Passwords & Hashing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Passwords & Hashing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع كلمات المرور والتجزئة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Passwords & Hashing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، كلمات المرور والتجزئة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Passwords & Hashing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['كلمات المرور والتجزئة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l2-q1',
        question: {
          en: 'What is the primary benefit of Passwords & Hashing?',
          ar: 'ما هي الفائدة الرئيسية من كلمات المرور والتجزئة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Passwords & Hashing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم كلمات المرور والتجزئة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l3',
    title: { en: 'Phishing', ar: 'التصيد' },
    description: { 
      en: 'A comprehensive lesson on Phishing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التصيد يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of Phishing',
        'Identify key use cases for Phishing in computer science',
        'Apply Phishing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Phishing',
        'تحديد حالات الاستخدام الرئيسية لـ Phishing في علوم الحاسب',
        'تطبيق Phishing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l3-s1',
        title: { en: 'Introduction to Phishing', ar: 'مقدمة في التصيد' },
        type: 'concept',
        content: {
          en: 'Phishing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Phishing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التصيد مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التصيد، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Phishing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التصيد على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Phishing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التصيد، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Phishing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Phishing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التصيد من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Phishing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التصيد ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Phishing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التصيد أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l3-q1',
        question: {
          en: 'What is the primary benefit of Phishing?',
          ar: 'ما هي الفائدة الرئيسية من التصيد؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Phishing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التصيد لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l4',
    title: { en: 'Malware', ar: 'البرمجيات الخبيثة' },
    description: { 
      en: 'A comprehensive lesson on Malware covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول البرمجيات الخبيثة يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Malware',
        'Identify key use cases for Malware in computer science',
        'Apply Malware to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Malware',
        'تحديد حالات الاستخدام الرئيسية لـ Malware في علوم الحاسب',
        'تطبيق Malware لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l4-s1',
        title: { en: 'Introduction to Malware', ar: 'مقدمة في البرمجيات الخبيثة' },
        type: 'concept',
        content: {
          en: 'Malware is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Malware, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد البرمجيات الخبيثة مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم البرمجيات الخبيثة، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Malware relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ البرمجيات الخبيثة على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Malware, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون البرمجيات الخبيثة، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Malware by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Malware to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع البرمجيات الخبيثة من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Malware is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، البرمجيات الخبيثة ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Malware is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['البرمجيات الخبيثة أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l4-q1',
        question: {
          en: 'What is the primary benefit of Malware?',
          ar: 'ما هي الفائدة الرئيسية من البرمجيات الخبيثة؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Malware is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم البرمجيات الخبيثة لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l5',
    title: { en: 'SQL Injection', ar: 'حقن SQL' },
    description: { 
      en: 'A comprehensive lesson on SQL Injection covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول حقن SQL يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of SQL Injection',
        'Identify key use cases for SQL Injection in computer science',
        'Apply SQL Injection to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ SQL Injection',
        'تحديد حالات الاستخدام الرئيسية لـ SQL Injection في علوم الحاسب',
        'تطبيق SQL Injection لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l5-s1',
        title: { en: 'Introduction to SQL Injection', ar: 'مقدمة في حقن SQL' },
        type: 'concept',
        content: {
          en: 'SQL Injection is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding SQL Injection, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد حقن SQL مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم حقن SQL، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of SQL Injection relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ حقن SQL على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without SQL Injection, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون حقن SQL، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with SQL Injection by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of SQL Injection to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع حقن SQL من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, SQL Injection is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، حقن SQL ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['SQL Injection is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['حقن SQL أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l5-q1',
        question: {
          en: 'What is the primary benefit of SQL Injection?',
          ar: 'ما هي الفائدة الرئيسية من حقن SQL؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'SQL Injection is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم حقن SQL لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l6',
    title: { en: 'XSS', ar: 'البرمجة عبر المواقع XSS' },
    description: { 
      en: 'A comprehensive lesson on XSS covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول البرمجة عبر المواقع XSS يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of XSS',
        'Identify key use cases for XSS in computer science',
        'Apply XSS to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ XSS',
        'تحديد حالات الاستخدام الرئيسية لـ XSS في علوم الحاسب',
        'تطبيق XSS لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l6-s1',
        title: { en: 'Introduction to XSS', ar: 'مقدمة في البرمجة عبر المواقع XSS' },
        type: 'concept',
        content: {
          en: 'XSS is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding XSS, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد البرمجة عبر المواقع XSS مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم البرمجة عبر المواقع XSS، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l6-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of XSS relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ البرمجة عبر المواقع XSS على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without XSS, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون البرمجة عبر المواقع XSS، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with XSS by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of XSS to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع البرمجة عبر المواقع XSS من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l6-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, XSS is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، البرمجة عبر المواقع XSS ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['XSS is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['البرمجة عبر المواقع XSS أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l6-q1',
        question: {
          en: 'What is the primary benefit of XSS?',
          ar: 'ما هي الفائدة الرئيسية من البرمجة عبر المواقع XSS؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'XSS is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم البرمجة عبر المواقع XSS لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l7',
    title: { en: 'Encryption', ar: 'التشفير' },
    description: { 
      en: 'A comprehensive lesson on Encryption covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التشفير يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Encryption',
        'Identify key use cases for Encryption in computer science',
        'Apply Encryption to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Encryption',
        'تحديد حالات الاستخدام الرئيسية لـ Encryption في علوم الحاسب',
        'تطبيق Encryption لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l7-s1',
        title: { en: 'Introduction to Encryption', ar: 'مقدمة في التشفير' },
        type: 'concept',
        content: {
          en: 'Encryption is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Encryption, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التشفير مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التشفير، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Encryption relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التشفير على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Encryption, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التشفير، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Encryption by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Encryption to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التشفير من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Encryption is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التشفير ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Encryption is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التشفير أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l7-q1',
        question: {
          en: 'What is the primary benefit of Encryption?',
          ar: 'ما هي الفائدة الرئيسية من التشفير؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Encryption is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التشفير لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l8',
    title: { en: 'Firewalls', ar: 'الجدران النارية' },
    description: { 
      en: 'A comprehensive lesson on Firewalls covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الجدران النارية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Firewalls',
        'Identify key use cases for Firewalls in computer science',
        'Apply Firewalls to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Firewalls',
        'تحديد حالات الاستخدام الرئيسية لـ Firewalls في علوم الحاسب',
        'تطبيق Firewalls لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l8-s1',
        title: { en: 'Introduction to Firewalls', ar: 'مقدمة في الجدران النارية' },
        type: 'concept',
        content: {
          en: 'Firewalls is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Firewalls, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الجدران النارية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الجدران النارية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l8-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Firewalls relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الجدران النارية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Firewalls, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الجدران النارية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Firewalls by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Firewalls to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الجدران النارية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l8-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Firewalls is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الجدران النارية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Firewalls is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الجدران النارية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l8-q1',
        question: {
          en: 'What is the primary benefit of Firewalls?',
          ar: 'ما هي الفائدة الرئيسية من الجدران النارية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Firewalls is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الجدران النارية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l9',
    title: { en: 'Social Engineering', ar: 'الهندسة الاجتماعية' },
    description: { 
      en: 'A comprehensive lesson on Social Engineering covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الهندسة الاجتماعية يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Social Engineering',
        'Identify key use cases for Social Engineering in computer science',
        'Apply Social Engineering to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Social Engineering',
        'تحديد حالات الاستخدام الرئيسية لـ Social Engineering في علوم الحاسب',
        'تطبيق Social Engineering لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l9-s1',
        title: { en: 'Introduction to Social Engineering', ar: 'مقدمة في الهندسة الاجتماعية' },
        type: 'concept',
        content: {
          en: 'Social Engineering is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Social Engineering, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الهندسة الاجتماعية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الهندسة الاجتماعية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Social Engineering relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الهندسة الاجتماعية على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Social Engineering, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الهندسة الاجتماعية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Social Engineering by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Social Engineering to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الهندسة الاجتماعية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Social Engineering is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الهندسة الاجتماعية ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Social Engineering is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الهندسة الاجتماعية أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l9-q1',
        question: {
          en: 'What is the primary benefit of Social Engineering?',
          ar: 'ما هي الفائدة الرئيسية من الهندسة الاجتماعية؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Social Engineering is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الهندسة الاجتماعية لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-l10',
    title: { en: 'Incident Response', ar: 'الاستجابة للحوادث' },
    description: { 
      en: 'A comprehensive lesson on Incident Response covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الاستجابة للحوادث يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of Incident Response',
        'Identify key use cases for Incident Response in computer science',
        'Apply Incident Response to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Incident Response',
        'تحديد حالات الاستخدام الرئيسية لـ Incident Response في علوم الحاسب',
        'تطبيق Incident Response لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'cybersecurity-l10-s1',
        title: { en: 'Introduction to Incident Response', ar: 'مقدمة في الاستجابة للحوادث' },
        type: 'concept',
        content: {
          en: 'Incident Response is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Incident Response, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الاستجابة للحوادث مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الاستجابة للحوادث، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'cybersecurity-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Incident Response relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الاستجابة للحوادث على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'cybersecurity-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Incident Response, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الاستجابة للحوادث، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'cybersecurity-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Incident Response by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Incident Response to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الاستجابة للحوادث من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'cybersecurity-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Incident Response is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الاستجابة للحوادث ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Incident Response is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الاستجابة للحوادث أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'cybersecurity-l10-q1',
        question: {
          en: 'What is the primary benefit of Incident Response?',
          ar: 'ما هي الفائدة الرئيسية من الاستجابة للحوادث؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Incident Response is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الاستجابة للحوادث لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
