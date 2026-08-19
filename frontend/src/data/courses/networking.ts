import { type Lesson } from '../lessons';

export const networking_lessons: Lesson[] = [
  {
    id: 'networking-l1',
    title: { en: 'OSI Model', ar: 'نموذج OSI' },
    description: { 
      en: 'A comprehensive lesson on OSI Model covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نموذج OSI يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of OSI Model',
        'Identify key use cases for OSI Model in computer science',
        'Apply OSI Model to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ OSI Model',
        'تحديد حالات الاستخدام الرئيسية لـ OSI Model في علوم الحاسب',
        'تطبيق OSI Model لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l1-s1',
        title: { en: 'Introduction to OSI Model', ar: 'مقدمة في نموذج OSI' },
        type: 'concept',
        content: {
          en: 'OSI Model is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding OSI Model, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نموذج OSI مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نموذج OSI، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l1-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of OSI Model relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نموذج OSI على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l1-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without OSI Model, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نموذج OSI، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l1-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with OSI Model by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of OSI Model to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نموذج OSI من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l1-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, OSI Model is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نموذج OSI ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['OSI Model is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نموذج OSI أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l1-q1',
        question: {
          en: 'What is the primary benefit of OSI Model?',
          ar: 'ما هي الفائدة الرئيسية من نموذج OSI؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'OSI Model is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نموذج OSI لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l2',
    title: { en: 'TCP/IP', ar: 'نموذج TCP/IP' },
    description: { 
      en: 'A comprehensive lesson on TCP/IP covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نموذج TCP/IP يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of TCP/IP',
        'Identify key use cases for TCP/IP in computer science',
        'Apply TCP/IP to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ TCP/IP',
        'تحديد حالات الاستخدام الرئيسية لـ TCP/IP في علوم الحاسب',
        'تطبيق TCP/IP لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l2-s1',
        title: { en: 'Introduction to TCP/IP', ar: 'مقدمة في نموذج TCP/IP' },
        type: 'concept',
        content: {
          en: 'TCP/IP is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding TCP/IP, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نموذج TCP/IP مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نموذج TCP/IP، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l2-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of TCP/IP relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نموذج TCP/IP على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l2-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without TCP/IP, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نموذج TCP/IP، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l2-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with TCP/IP by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of TCP/IP to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نموذج TCP/IP من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l2-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, TCP/IP is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نموذج TCP/IP ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['TCP/IP is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نموذج TCP/IP أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l2-q1',
        question: {
          en: 'What is the primary benefit of TCP/IP?',
          ar: 'ما هي الفائدة الرئيسية من نموذج TCP/IP؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'TCP/IP is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نموذج TCP/IP لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l3',
    title: { en: 'IP Addressing', ar: 'عناوين IP' },
    description: { 
      en: 'A comprehensive lesson on IP Addressing covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول عناوين IP يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Beginner',
    objectives: {
      en: [
        'Understand the fundamental definition of IP Addressing',
        'Identify key use cases for IP Addressing in computer science',
        'Apply IP Addressing to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ IP Addressing',
        'تحديد حالات الاستخدام الرئيسية لـ IP Addressing في علوم الحاسب',
        'تطبيق IP Addressing لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l3-s1',
        title: { en: 'Introduction to IP Addressing', ar: 'مقدمة في عناوين IP' },
        type: 'concept',
        content: {
          en: 'IP Addressing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding IP Addressing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد عناوين IP مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم عناوين IP، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l3-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of IP Addressing relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ عناوين IP على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l3-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without IP Addressing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون عناوين IP، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l3-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with IP Addressing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of IP Addressing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع عناوين IP من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l3-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, IP Addressing is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، عناوين IP ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['IP Addressing is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['عناوين IP أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l3-q1',
        question: {
          en: 'What is the primary benefit of IP Addressing?',
          ar: 'ما هي الفائدة الرئيسية من عناوين IP؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'IP Addressing is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم عناوين IP لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l4',
    title: { en: 'DNS', ar: 'نظام أسماء النطاقات DNS' },
    description: { 
      en: 'A comprehensive lesson on DNS covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول نظام أسماء النطاقات DNS يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of DNS',
        'Identify key use cases for DNS in computer science',
        'Apply DNS to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ DNS',
        'تحديد حالات الاستخدام الرئيسية لـ DNS في علوم الحاسب',
        'تطبيق DNS لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l4-s1',
        title: { en: 'Introduction to DNS', ar: 'مقدمة في نظام أسماء النطاقات DNS' },
        type: 'concept',
        content: {
          en: 'DNS is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding DNS, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد نظام أسماء النطاقات DNS مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم نظام أسماء النطاقات DNS، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l4-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of DNS relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ نظام أسماء النطاقات DNS على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l4-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without DNS, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون نظام أسماء النطاقات DNS، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l4-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with DNS by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of DNS to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع نظام أسماء النطاقات DNS من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l4-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, DNS is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، نظام أسماء النطاقات DNS ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['DNS is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['نظام أسماء النطاقات DNS أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l4-q1',
        question: {
          en: 'What is the primary benefit of DNS?',
          ar: 'ما هي الفائدة الرئيسية من نظام أسماء النطاقات DNS؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'DNS is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم نظام أسماء النطاقات DNS لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l5',
    title: { en: 'HTTP/HTTPS', ar: 'بروتوكولات HTTP/HTTPS' },
    description: { 
      en: 'A comprehensive lesson on HTTP/HTTPS covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول بروتوكولات HTTP/HTTPS يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of HTTP/HTTPS',
        'Identify key use cases for HTTP/HTTPS in computer science',
        'Apply HTTP/HTTPS to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ HTTP/HTTPS',
        'تحديد حالات الاستخدام الرئيسية لـ HTTP/HTTPS في علوم الحاسب',
        'تطبيق HTTP/HTTPS لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l5-s1',
        title: { en: 'Introduction to HTTP/HTTPS', ar: 'مقدمة في بروتوكولات HTTP/HTTPS' },
        type: 'concept',
        content: {
          en: 'HTTP/HTTPS is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding HTTP/HTTPS, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد بروتوكولات HTTP/HTTPS مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم بروتوكولات HTTP/HTTPS، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l5-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of HTTP/HTTPS relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ بروتوكولات HTTP/HTTPS على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l5-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without HTTP/HTTPS, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون بروتوكولات HTTP/HTTPS، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l5-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with HTTP/HTTPS by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of HTTP/HTTPS to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع بروتوكولات HTTP/HTTPS من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l5-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, HTTP/HTTPS is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، بروتوكولات HTTP/HTTPS ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['HTTP/HTTPS is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['بروتوكولات HTTP/HTTPS أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l5-q1',
        question: {
          en: 'What is the primary benefit of HTTP/HTTPS?',
          ar: 'ما هي الفائدة الرئيسية من بروتوكولات HTTP/HTTPS؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'HTTP/HTTPS is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم بروتوكولات HTTP/HTTPS لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l6',
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
        id: 'networking-l6-s1',
        title: { en: 'Introduction to Routing', ar: 'مقدمة في التوجيه' },
        type: 'concept',
        content: {
          en: 'Routing is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Routing, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التوجيه مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التوجيه، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l6-s2',
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
        id: 'networking-l6-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Routing, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التوجيه، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l6-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Routing by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Routing to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التوجيه من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l6-s5',
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
        id: 'networking-l6-q1',
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
    id: 'networking-l7',
    title: { en: 'Subnetting', ar: 'التقسيم الفرعي' },
    description: { 
      en: 'A comprehensive lesson on Subnetting covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول التقسيم الفرعي يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Intermediate',
    objectives: {
      en: [
        'Understand the fundamental definition of Subnetting',
        'Identify key use cases for Subnetting in computer science',
        'Apply Subnetting to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ Subnetting',
        'تحديد حالات الاستخدام الرئيسية لـ Subnetting في علوم الحاسب',
        'تطبيق Subnetting لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l7-s1',
        title: { en: 'Introduction to Subnetting', ar: 'مقدمة في التقسيم الفرعي' },
        type: 'concept',
        content: {
          en: 'Subnetting is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Subnetting, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد التقسيم الفرعي مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم التقسيم الفرعي، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l7-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of Subnetting relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ التقسيم الفرعي على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l7-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Subnetting, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون التقسيم الفرعي، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l7-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Subnetting by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Subnetting to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع التقسيم الفرعي من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l7-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, Subnetting is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، التقسيم الفرعي ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['Subnetting is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['التقسيم الفرعي أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l7-q1',
        question: {
          en: 'What is the primary benefit of Subnetting?',
          ar: 'ما هي الفائدة الرئيسية من التقسيم الفرعي؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'Subnetting is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم التقسيم الفرعي لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l8',
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
        id: 'networking-l8-s1',
        title: { en: 'Introduction to Firewalls', ar: 'مقدمة في الجدران النارية' },
        type: 'concept',
        content: {
          en: 'Firewalls is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding Firewalls, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الجدران النارية مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الجدران النارية، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l8-s2',
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
        id: 'networking-l8-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without Firewalls, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الجدران النارية، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l8-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with Firewalls by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of Firewalls to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الجدران النارية من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l8-s5',
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
        id: 'networking-l8-q1',
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
    id: 'networking-l9',
    title: { en: 'VPNs', ar: 'الشبكات الخاصة الافتراضية VPN' },
    description: { 
      en: 'A comprehensive lesson on VPNs covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول الشبكات الخاصة الافتراضية VPN يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of VPNs',
        'Identify key use cases for VPNs in computer science',
        'Apply VPNs to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ VPNs',
        'تحديد حالات الاستخدام الرئيسية لـ VPNs في علوم الحاسب',
        'تطبيق VPNs لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l9-s1',
        title: { en: 'Introduction to VPNs', ar: 'مقدمة في الشبكات الخاصة الافتراضية VPN' },
        type: 'concept',
        content: {
          en: 'VPNs is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding VPNs, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد الشبكات الخاصة الافتراضية VPN مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم الشبكات الخاصة الافتراضية VPN، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l9-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of VPNs relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ الشبكات الخاصة الافتراضية VPN على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l9-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without VPNs, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون الشبكات الخاصة الافتراضية VPN، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l9-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with VPNs by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of VPNs to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع الشبكات الخاصة الافتراضية VPN من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l9-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, VPNs is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، الشبكات الخاصة الافتراضية VPN ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['VPNs is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['الشبكات الخاصة الافتراضية VPN أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l9-q1',
        question: {
          en: 'What is the primary benefit of VPNs?',
          ar: 'ما هي الفائدة الرئيسية من الشبكات الخاصة الافتراضية VPN؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'VPNs is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم الشبكات الخاصة الافتراضية VPN لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
  {
    id: 'networking-l10',
    title: { en: 'WebSockets', ar: 'مقابس الويب WebSockets' },
    description: { 
      en: 'A comprehensive lesson on WebSockets covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول مقابس الويب WebSockets يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: 'Advanced',
    objectives: {
      en: [
        'Understand the fundamental definition of WebSockets',
        'Identify key use cases for WebSockets in computer science',
        'Apply WebSockets to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ WebSockets',
        'تحديد حالات الاستخدام الرئيسية لـ WebSockets في علوم الحاسب',
        'تطبيق WebSockets لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: 'networking-l10-s1',
        title: { en: 'Introduction to WebSockets', ar: 'مقدمة في مقابس الويب WebSockets' },
        type: 'concept',
        content: {
          en: 'WebSockets is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\n\nBy understanding WebSockets, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد مقابس الويب WebSockets مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\n\nمن خلال فهم مقابس الويب WebSockets، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: 'networking-l10-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of WebSockets relies on clear rules and structures.\n\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ مقابس الويب WebSockets على قواعد وهياكل واضحة.\n\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: 'networking-l10-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without WebSockets, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون مقابس الويب WebSockets، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: 'networking-l10-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with WebSockets by overcomplicating the implementation. A common pitfall is forgetting the core rules.\n\nAlways adhere to the established paradigms of WebSockets to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع مقابس الويب WebSockets من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\n\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: 'networking-l10-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, WebSockets is essential for modern development.\n\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، مقابس الويب WebSockets ضروري للتطوير الحديث.\n\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['WebSockets is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['مقابس الويب WebSockets أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: 'networking-l10-q1',
        question: {
          en: 'What is the primary benefit of WebSockets?',
          ar: 'ما هي الفائدة الرئيسية من مقابس الويب WebSockets؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: 'WebSockets is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم مقابس الويب WebSockets لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },
];
