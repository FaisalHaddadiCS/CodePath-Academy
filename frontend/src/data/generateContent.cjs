const fs = require('fs');
const path = require('path');

const COURSES = [
  { id: 'python-fundamentals', en: 'Programming Fundamentals with Python', ar: 'أساسيات البرمجة باستخدام بايثون', topics: [
    { en: 'Variables', ar: 'المتغيرات' }, { en: 'Loops', ar: 'الحلقات' }, { en: 'Functions', ar: 'الدوال' }, { en: 'Lists', ar: 'القوائم' }, { en: 'Dictionaries', ar: 'القواميس' }, { en: 'File I/O', ar: 'الإدخال والإخراج' }, { en: 'Error Handling', ar: 'معالجة الأخطاء' }, { en: 'Modules', ar: 'الوحدات' }, { en: 'Classes', ar: 'الأصناف' }, { en: 'APIs', ar: 'واجهات برمجة التطبيقات' }
  ]},
  { id: 'oop', en: 'Object-Oriented Programming', ar: 'البرمجة كائنية التوجه', topics: [
    { en: 'Classes & Objects', ar: 'الأصناف والكائنات' }, { en: 'Encapsulation', ar: 'التغليف' }, { en: 'Inheritance', ar: 'الوراثة' }, { en: 'Polymorphism', ar: 'تعدد الأشكال' }, { en: 'Abstraction', ar: 'التجريد' }, { en: 'Interfaces', ar: 'الواجهات' }, { en: 'Constructors', ar: 'البواني' }, { en: 'Method Overriding', ar: 'تجاوز الطرق' }, { en: 'Static Members', ar: 'الأعضاء الثابتة' }, { en: 'Design Patterns', ar: 'أنماط التصميم' }
  ]},
  { id: 'dsa', en: 'Data Structures and Algorithms', ar: 'هياكل البيانات والخوارزميات', topics: [
    { en: 'Arrays', ar: 'المصفوفات' }, { en: 'Linked Lists', ar: 'القوائم المترابطة' }, { en: 'Stacks', ar: 'المكدسات' }, { en: 'Queues', ar: 'الطوابير' }, { en: 'Hash Tables', ar: 'جداول التجزئة' }, { en: 'Trees', ar: 'الأشجار' }, { en: 'Graphs', ar: 'الرسوم البيانية' }, { en: 'Sorting Algorithms', ar: 'خوارزميات الفرز' }, { en: 'Searching Algorithms', ar: 'خوارزميات البحث' }, { en: 'Big O Notation', ar: 'رمز Big O' }
  ]},
  { id: 'databases', en: 'Databases and SQL', ar: 'قواعد البيانات و SQL', topics: [
    { en: 'Relational Model', ar: 'النموذج العلائقي' }, { en: 'SELECT Queries', ar: 'استعلامات SELECT' }, { en: 'INSERT & UPDATE', ar: 'الإدراج والتحديث' }, { en: 'JOINs', ar: 'الصلات JOIN' }, { en: 'GROUP BY', ar: 'التجميع GROUP BY' }, { en: 'Normalization', ar: 'التطبيع' }, { en: 'Indexes', ar: 'الفهارس' }, { en: 'Transactions', ar: 'المعاملات' }, { en: 'NoSQL Basics', ar: 'أساسيات NoSQL' }, { en: 'Database Design', ar: 'تصميم قواعد البيانات' }
  ]},
  { id: 'networking', en: 'Networking Fundamentals', ar: 'أساسيات الشبكات', topics: [
    { en: 'OSI Model', ar: 'نموذج OSI' }, { en: 'TCP/IP', ar: 'نموذج TCP/IP' }, { en: 'IP Addressing', ar: 'عناوين IP' }, { en: 'DNS', ar: 'نظام أسماء النطاقات DNS' }, { en: 'HTTP/HTTPS', ar: 'بروتوكولات HTTP/HTTPS' }, { en: 'Routing', ar: 'التوجيه' }, { en: 'Subnetting', ar: 'التقسيم الفرعي' }, { en: 'Firewalls', ar: 'الجدران النارية' }, { en: 'VPNs', ar: 'الشبكات الخاصة الافتراضية VPN' }, { en: 'WebSockets', ar: 'مقابس الويب WebSockets' }
  ]},
  { id: 'cybersecurity', en: 'Defensive Cybersecurity Fundamentals', ar: 'الأمن السيبراني الدفاعي', topics: [
    { en: 'CIA Triad', ar: 'مثلث CIA' }, { en: 'Passwords & Hashing', ar: 'كلمات المرور والتجزئة' }, { en: 'Phishing', ar: 'التصيد' }, { en: 'Malware', ar: 'البرمجيات الخبيثة' }, { en: 'SQL Injection', ar: 'حقن SQL' }, { en: 'XSS', ar: 'البرمجة عبر المواقع XSS' }, { en: 'Encryption', ar: 'التشفير' }, { en: 'Firewalls', ar: 'الجدران النارية' }, { en: 'Social Engineering', ar: 'الهندسة الاجتماعية' }, { en: 'Incident Response', ar: 'الاستجابة للحوادث' }
  ]},
  { id: 'ai-ml', en: 'Artificial Intelligence and Machine Learning Basics', ar: 'الذكاء الاصطناعي وتعلم الآلة', topics: [
    { en: 'What is AI?', ar: 'ما هو الذكاء الاصطناعي؟' }, { en: 'Supervised Learning', ar: 'التعلم الخاضع للإشراف' }, { en: 'Unsupervised Learning', ar: 'التعلم غير الخاضع للإشراف' }, { en: 'Neural Networks', ar: 'الشبكات العصبية' }, { en: 'Deep Learning', ar: 'التعلم العميق' }, { en: 'Natural Language Processing', ar: 'معالجة اللغات الطبيعية' }, { en: 'Computer Vision', ar: 'الرؤية الحاسوبية' }, { en: 'Model Evaluation', ar: 'تقييم النماذج' }, { en: 'Bias in AI', ar: 'التحيز في الذكاء الاصطناعي' }, { en: 'Future of AI', ar: 'مستقبل الذكاء الاصطناعي' }
  ]},
  { id: 'js-fundamentals', en: 'JavaScript Fundamentals', ar: 'أساسيات جافا سكريبت', topics: [
    { en: 'Variables & Data Types', ar: 'المتغيرات وأنواع البيانات' }, { en: 'Functions & Scope', ar: 'الدوال والنطاق' }, { en: 'Arrays & Objects', ar: 'المصفوفات والكائنات' }, { en: 'DOM Manipulation', ar: 'التعامل مع DOM' }, { en: 'Events', ar: 'الأحداث' }, { en: 'ES6+ Features', ar: 'ميزات ES6+' }, { en: 'Promises & Async/Await', ar: 'الوعود والبرمجة غير المتزامنة' }, { en: 'Error Handling', ar: 'معالجة الأخطاء' }, { en: 'Web APIs', ar: 'واجهات الويب API' }, { en: 'Modules', ar: 'الوحدات' }
  ]},
  { id: 'web-dev', en: 'Web Development Fundamentals', ar: 'أساسيات تطوير الويب', topics: [
    { en: 'HTML Basics', ar: 'أساسيات HTML' }, { en: 'Semantic HTML', ar: 'HTML الدلالية' }, { en: 'CSS Styling', ar: 'تنسيق CSS' }, { en: 'Flexbox', ar: 'صندوق المرونة Flexbox' }, { en: 'CSS Grid', ar: 'شبكة CSS Grid' }, { en: 'Responsive Design', ar: 'التصميم المتجاوب' }, { en: 'Forms & Validation', ar: 'النماذج والتحقق' }, { en: 'Accessibility (a11y)', ar: 'إمكانية الوصول' }, { en: 'SEO Basics', ar: 'أساسيات تحسين محركات البحث' }, { en: 'Deployment', ar: 'النشر' }
  ]},
  { id: 'os', en: 'Operating Systems Fundamentals', ar: 'أساسيات نظم التشغيل', topics: [
    { en: 'Introduction to OS', ar: 'مقدمة في نظم التشغيل' }, { en: 'Processes & Threads', ar: 'العمليات والخيوط' }, { en: 'CPU Scheduling', ar: 'جدولة وحدة المعالجة المركزية' }, { en: 'Memory Management', ar: 'إدارة الذاكرة' }, { en: 'Virtual Memory', ar: 'الذاكرة الافتراضية' }, { en: 'File Systems', ar: 'أنظمة الملفات' }, { en: 'I/O Systems', ar: 'أنظمة الإدخال والإخراج' }, { en: 'Deadlocks', ar: 'حالات الجمود' }, { en: 'Concurrency', ar: 'التزامن' }, { en: 'Security & Protection', ar: 'الأمن والحماية' }
  ]},
  { id: 'comp-arch', en: 'Computer Architecture and Digital Logic', ar: 'هيكلية الحاسب والمنطق الرقمي', topics: [
    { en: 'Boolean Algebra', ar: 'الجبر البولياني' }, { en: 'Logic Gates', ar: 'البوابات المنطقية' }, { en: 'Combinational Logic', ar: 'المنطق التوافقي' }, { en: 'Sequential Logic', ar: 'المنطق المتسلسل' }, { en: 'CPU Design', ar: 'تصميم وحدة المعالجة المركزية' }, { en: 'Instruction Set Architecture', ar: 'بنية مجموعة التعليمات' }, { en: 'Pipelining', ar: 'خطوط الأنابيب' }, { en: 'Memory Hierarchy', ar: 'التسلسل الهرمي للذاكرة' }, { en: 'Cache Memory', ar: 'الذاكرة المخبئية' }, { en: 'I/O Interfacing', ar: 'ربط الإدخال والإخراج' }
  ]},
  { id: 'swe-git', en: 'Software Engineering and Git', ar: 'هندسة البرمجيات و Git', topics: [
    { en: 'SDLC', ar: 'دورة حياة تطوير البرمجيات' }, { en: 'Agile & Scrum', ar: 'أجايل وسكروم' }, { en: 'Version Control', ar: 'التحكم في الإصدارات' }, { en: 'Git Basics', ar: 'أساسيات Git' }, { en: 'Branching & Merging', ar: 'التفريع والدمج' }, { en: 'GitHub & Collaboration', ar: 'جيت هاب والتعاون' }, { en: 'Testing Basics', ar: 'أساسيات الاختبار' }, { en: 'Code Reviews', ar: 'مراجعة الكود' }, { en: 'Design Patterns', ar: 'أنماط التصميم' }, { en: 'Documentation', ar: 'التوثيق' }
  ]},
  { id: 'cloud', en: 'Cloud Computing Fundamentals', ar: 'أساسيات الحوسبة السحابية', topics: [
    { en: 'What is the Cloud?', ar: 'ما هي السحابة؟' }, { en: 'IaaS, PaaS, SaaS', ar: 'نماذج الخدمة IaaS و PaaS و SaaS' }, { en: 'Virtualization', ar: 'التمثيل الافتراضي' }, { en: 'Containers & Docker', ar: 'الحاويات و Docker' }, { en: 'Cloud Storage', ar: 'التخزين السحابي' }, { en: 'Cloud Networking', ar: 'الشبكات السحابية' }, { en: 'Serverless Computing', ar: 'الحوسبة بدون خادم' }, { en: 'Cloud Security', ar: 'أمن السحابة' }, { en: 'Scaling & Load Balancing', ar: 'التوسع وموازنة الأحمال' }, { en: 'Cloud Providers', ar: 'مزودي الخدمات السحابية' }
  ]},
  { id: 'linux', en: 'Linux and Command Line Fundamentals', ar: 'أساسيات لينكس وسطر الأوامر', topics: [
    { en: 'Introduction to Linux', ar: 'مقدمة في لينكس' }, { en: 'Navigation Commands', ar: 'أوامر التنقل' }, { en: 'File Management', ar: 'إدارة الملفات' }, { en: 'File Permissions', ar: 'صلاحيات الملفات' }, { en: 'Piping & Redirection', ar: 'التوجيه والأنابيب' }, { en: 'Process Management', ar: 'إدارة العمليات' }, { en: 'Package Managers', ar: 'مديري الحزم' }, { en: 'Shell Scripting Basics', ar: 'أساسيات برمجة الشل' }, { en: 'Networking Commands', ar: 'أوامر الشبكات' }, { en: 'Text Processing', ar: 'معالجة النصوص' }
  ]},
  { id: 'discrete-math', en: 'Discrete Mathematics for Computer Science', ar: 'الرياضيات المتقطعة لعلوم الحاسب', topics: [
    { en: 'Propositional Logic', ar: 'المنطق الافتراضي' }, { en: 'Set Theory', ar: 'نظرية المجموعات' }, { en: 'Relations & Functions', ar: 'العلاقات والدوال' }, { en: 'Combinatorics', ar: 'التوافيق والتباديل' }, { en: 'Probability', ar: 'الاحتمالات' }, { en: 'Graph Theory', ar: 'نظرية الرسوم البيانية' }, { en: 'Trees', ar: 'الأشجار' }, { en: 'Boolean Algebra', ar: 'الجبر البولياني' }, { en: 'Number Theory', ar: 'نظرية الأعداد' }, { en: 'Proofs & Induction', ar: 'الإثباتات والاستقراء' }
  ]},
  { id: 'theory-comp', en: 'Theory of Computation', ar: 'نظرية الحوسبة', topics: [
    { en: 'Automata Theory', ar: 'نظرية الأتمتة' }, { en: 'Finite State Machines', ar: 'آلات الحالة المحدودة' }, { en: 'Regular Expressions', ar: 'التعابير النمطية' }, { en: 'Context-Free Grammars', ar: 'القواعد الخالية من السياق' }, { en: 'Pushdown Automata', ar: 'أتمتة الدفع لأسفل' }, { en: 'Turing Machines', ar: 'آلات تورينج' }, { en: 'Decidability', ar: 'قابلية الحسم' }, { en: 'Halting Problem', ar: 'مشكلة التوقف' }, { en: 'P vs NP', ar: 'مسألة P مقابل NP' }, { en: 'Computational Complexity', ar: 'التعقيد الحسابي' }
  ]},
  { id: 'api-backend', en: 'API Design and Backend Development', ar: 'تصميم واجهات برمجة التطبيقات وتطوير الواجهة الخلفية', topics: [
    { en: 'RESTful Architecture', ar: 'بنية REST' }, { en: 'HTTP Methods', ar: 'طرق HTTP ورموز الحالة' }, { en: 'JSON & Data Parsing', ar: 'تحليل البيانات و JSON' }, { en: 'Routing', ar: 'التوجيه' }, { en: 'Middleware', ar: 'البرمجيات الوسيطة' }, { en: 'Authentication', ar: 'المصادقة' }, { en: 'Database Integration', ar: 'التكامل مع قواعد البيانات' }, { en: 'Error Handling', ar: 'معالجة الأخطاء' }, { en: 'API Security', ar: 'أمن واجهات برمجة التطبيقات' }, { en: 'GraphQL Basics', ar: 'أساسيات GraphQL' }
  ]},
  { id: 'devops', en: 'DevOps and CI/CD Fundamentals', ar: 'أساسيات DevOps والتكامل/التسليم المستمر', topics: [
    { en: 'DevOps Culture', ar: 'ثقافة DevOps' }, { en: 'Continuous Integration', ar: 'التكامل المستمر' }, { en: 'Continuous Deployment', ar: 'التسليم المستمر' }, { en: 'GitHub Actions', ar: 'إجراءات جيت هاب' }, { en: 'Containerization', ar: 'الحاويات' }, { en: 'Orchestration', ar: 'التنسيق' }, { en: 'Infrastructure as Code', ar: 'البنية التحتية ككود' }, { en: 'Monitoring & Logging', ar: 'المراقبة والتسجيل' }, { en: 'Automated Testing', ar: 'الاختبار الآلي' }, { en: 'Release Management', ar: 'إدارة الإصدارات' }
  ]},
  { id: 'mobile-app', en: 'Mobile App Development Fundamentals', ar: 'أساسيات تطوير تطبيقات الأجهزة المحمولة', topics: [
    { en: 'Mobile Ecosystem', ar: 'النظام البيئي للأجهزة المحمولة' }, { en: 'UI/UX for Mobile', ar: 'واجهة وتجربة المستخدم' }, { en: 'React Native Basics', ar: 'أساسيات React Native' }, { en: 'Components & Layouts', ar: 'المكونات والتخطيط' }, { en: 'State Management', ar: 'إدارة الحالة' }, { en: 'Navigation', ar: 'التنقل' }, { en: 'Device APIs', ar: 'واجهات برمجة الأجهزة' }, { en: 'Data Persistence', ar: 'حفظ البيانات' }, { en: 'Testing Mobile Apps', ar: 'اختبار التطبيقات' }, { en: 'App Store Deployment', ar: 'نشر التطبيقات' }
  ]},
  { id: 'computer-graphics', en: 'Computer Graphics Fundamentals', ar: 'أساسيات رسومات الحاسب', topics: [
    { en: 'Graphics Pipeline', ar: 'خط أنابيب الرسومات' }, { en: 'Pixels & Resolutions', ar: 'البكسلات والدقة' }, { en: 'Color Models', ar: 'نماذج الألوان' }, { en: '2D Transformations', ar: 'التحويلات ثنائية الأبعاد' }, { en: '3D Transformations', ar: 'التحويلات ثلاثية الأبعاد' }, { en: 'Rendering Basics', ar: 'أساسيات التصيير' }, { en: 'Shading & Lighting', ar: 'التظليل والإضاءة' }, { en: 'Textures', ar: 'الخامات' }, { en: 'Ray Tracing', ar: 'تتبع الأشعة' }, { en: 'WebGL Basics', ar: 'أساسيات WebGL' }
  ]}
];

function escape(str) { return str.replace(/'/g, "\\'").replace(/\n/g, '\\n'); }

function generateCourseFile(course) {
  let lessonsCode = `import { type Lesson } from '../lessons';\n\nexport const ${course.id.replace(/-/g, '_')}_lessons: Lesson[] = [\n`;

  course.topics.forEach((topic, idx) => {
    const lessonId = `${course.id}-l${idx + 1}`;
    
    lessonsCode += `  {
    id: '${lessonId}',
    title: { en: '${escape(topic.en)}', ar: '${escape(topic.ar)}' },
    description: { 
      en: 'A comprehensive lesson on ${escape(topic.en)} covering core concepts, examples, and common pitfalls.',
      ar: 'درس شامل حول ${escape(topic.ar)} يغطي المفاهيم الأساسية والأمثلة والأخطاء الشائعة.'
    },
    duration: '15 min',
    difficulty: '${idx < 3 ? 'Beginner' : (idx < 7 ? 'Intermediate' : 'Advanced')}',
    objectives: {
      en: [
        'Understand the fundamental definition of ${escape(topic.en)}',
        'Identify key use cases for ${escape(topic.en)} in computer science',
        'Apply ${escape(topic.en)} to solve basic computational problems'
      ],
      ar: [
        'فهم التعريف الأساسي لـ ${escape(topic.en)}',
        'تحديد حالات الاستخدام الرئيسية لـ ${escape(topic.en)} في علوم الحاسب',
        'تطبيق ${escape(topic.en)} لحل المشكلات الحسابية الأساسية'
      ]
    },
    slides: [
      {
        id: '${lessonId}-s1',
        title: { en: 'Introduction to ${escape(topic.en)}', ar: 'مقدمة في ${escape(topic.ar)}' },
        type: 'concept',
        content: {
          en: '${escape(topic.en)} is a crucial concept in computer science. It provides the foundation for building robust, scalable, and efficient systems.\\n\\nBy understanding ${escape(topic.en)}, developers can write better code, design more secure applications, and solve complex logic puzzles with ease.',
          ar: 'يعد ${escape(topic.ar)} مفهوماً حاسماً في علوم الحاسب. فهو يوفر الأساس لبناء أنظمة قوية وقابلة للتطوير وفعالة.\\n\\nمن خلال فهم ${escape(topic.ar)}، يمكن للمطورين كتابة تعليمات برمجية أفضل وتصميم تطبيقات أكثر أماناً.'
        }
      },
      {
        id: '${lessonId}-s2',
        title: { en: 'Core Principles', ar: 'المبادئ الأساسية' },
        type: 'concept',
        content: {
          en: 'The underlying principle of ${escape(topic.en)} relies on clear rules and structures.\\n\\nWhen applied correctly, it drastically reduces system entropy and prevents common logical errors.',
          ar: 'يعتمد المبدأ الأساسي لـ ${escape(topic.ar)} على قواعد وهياكل واضحة.\\n\\nعند تطبيقه بشكل صحيح، فإنه يقلل بشكل كبير من العشوائية في النظام ويمنع الأخطاء المنطقية الشائعة.'
        },
        bulletPoints: {
          en: ['Improves system clarity', 'Reduces redundancy', 'Scales efficiently with complexity'],
          ar: ['يحسن وضوح النظام', 'يقلل التكرار', 'يتوسع بكفاءة مع التعقيد']
        }
      },
      {
        id: '${lessonId}-s3',
        title: { en: 'Real-World Example', ar: 'مثال من الواقع' },
        type: 'example',
        content: {
          en: 'Imagine you are building a large-scale e-commerce platform. Without ${escape(topic.en)}, the system would quickly become unmanageable.',
          ar: 'تخيل أنك تبني منصة تجارة إلكترونية واسعة النطاق. بدون ${escape(topic.ar)}، سيصبح النظام غير قابل للإدارة بسرعة.'
        }
      },
      {
        id: '${lessonId}-s4',
        title: { en: 'Common Mistakes', ar: 'أخطاء شائعة' },
        type: 'mistakes',
        content: {
          en: 'Many beginners struggle with ${escape(topic.en)} by overcomplicating the implementation. A common pitfall is forgetting the core rules.\\n\\nAlways adhere to the established paradigms of ${escape(topic.en)} to avoid unexpected bugs.',
          ar: 'يعاني العديد من المبتدئين مع ${escape(topic.ar)} من خلال تعقيد التنفيذ. الفخ الشائع هو نسيان القواعد الأساسية.\\n\\nالتزم دائمًا بالنماذج المعمول بها لتجنب الأخطاء غير المتوقعة.'
        }
      },
      {
        id: '${lessonId}-s5',
        title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
        type: 'takeaways',
        content: {
          en: 'To summarize, ${escape(topic.en)} is essential for modern development.\\n\\nMastering it requires practice, but the payoff is the ability to engineer systems that are both highly functional and easy to maintain.',
          ar: 'خلاصة القول، ${escape(topic.ar)} ضروري للتطوير الحديث.\\n\\nإتقانه يتطلب الممارسة، لكن المردود هو القدرة على هندسة أنظمة عالية الأداء وسهلة الصيانة.'
        },
        bulletPoints: {
          en: ['${escape(topic.en)} is foundational', 'Practice makes perfect', 'Adhere to conventions'],
          ar: ['${escape(topic.ar)} أساسي', 'الممارسة تصنع الإتقان', 'الالتزام بالاتفاقيات']
        }
      }
    ],
    quiz: [
      {
        id: '${lessonId}-q1',
        question: {
          en: 'What is the primary benefit of ${escape(topic.en)}?',
          ar: 'ما هي الفائدة الرئيسية من ${escape(topic.ar)}؟'
        },
        options: {
          en: ['It improves system scalability and clarity', 'It makes the computer run slower', 'It consumes more memory', 'It bypasses security protocols'],
          ar: ['يحسن قابلية التوسع ووضوح النظام', 'يجعل الكمبيوتر يعمل بشكل أبطأ', 'يستهلك المزيد من الذاكرة', 'يتجاوز بروتوكولات الأمان']
        },
        correctAnswer: 0,
        explanation: {
          en: '${escape(topic.en)} is designed to improve architecture and efficiency, not hinder it.',
          ar: 'تم تصميم ${escape(topic.ar)} لتحسين البنية والكفاءة وليس إعاقتها.'
        }
      }
    ]
  },\n`;
  });

  lessonsCode += `];\n`;
  
  const targetDir = path.join(__dirname, 'courses');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }
  
  fs.writeFileSync(path.join(targetDir, `${course.id}.ts`), lessonsCode);
}

COURSES.forEach(generateCourseFile);

let coursesTs = `import type { LocalizedText, LocalizedArray } from '../utils/language';

export interface Course {
  id: string;
  title: LocalizedText | string;
  description: LocalizedText | string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonIds: string[];
  color: string;
  estimatedHours: number;
  outcomes: LocalizedArray | string[];
}

export const COURSES: Course[] = [\n`;

COURSES.forEach((course, idx) => {
  const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ef4444', '#ec4899', '#f97316', '#14b8a6', '#6366f1', '#eab308', '#84cc16', '#0ea5e9', '#d946ef', '#f43f5e', '#8b5cf6', '#10b981', '#3b82f6', '#06b6d4', '#f59e0b'];
  const icons = ['🐍', '📦', '🌲', '🗄️', '🌐', '🛡️', '🤖', '⚡', '🕸️', '💻', '⚙️', '🛠️', '☁️', '🐧', '🔢', '🧠', '🔌', '🚀', '📱', '🎮'];
  
  coursesTs += `  {
    id: '${course.id}',
    title: { en: '${escape(course.en)}', ar: '${escape(course.ar)}' },
    description: { 
      en: 'Master the fundamentals of ${escape(course.en)} across 10 comprehensive modules.',
      ar: 'أتقن أساسيات ${escape(course.ar)} عبر 10 وحدات شاملة.'
    },
    icon: '${icons[idx]}',
    difficulty: '${idx < 3 ? 'Beginner' : (idx < 7 ? 'Intermediate' : 'Advanced')}',
    lessonIds: [${course.topics.map((t, i) => `'${course.id}-l${i+1}'`).join(', ')}],
    color: '${colors[idx]}',
    estimatedHours: 5,
    outcomes: {
      en: [
        'Master the core concepts of ${escape(course.en)}',
        'Apply theoretical knowledge to practical problems',
        'Understand industry best practices'
      ],
      ar: [
        'إتقان المفاهيم الأساسية لـ ${escape(course.ar)}',
        'تطبيق المعرفة النظرية على المشكلات العملية',
        'فهم أفضل الممارسات في الصناعة'
      ]
    }
  },\n`;
});
coursesTs += `];\n`;

fs.writeFileSync(path.join(__dirname, 'courses.ts'), coursesTs);

let mainLessonsCode = `import type { LocalizedText, LocalizedArray } from '../utils/language';

export type SlideType = 'concept' | 'example' | 'code' | 'analogy' | 'mistakes' | 'takeaways';

export interface CodeExample {
  title: LocalizedText | string;
  code: string;
  expectedOutput: string;
  explanation?: LocalizedText | string;
  language?: string;
}

export interface Slide {
  id: string;
  title: LocalizedText | string;
  type: SlideType;
  content?: LocalizedText | string;
  codeExample?: CodeExample;
  bulletPoints?: LocalizedArray | string[];
}

export interface QuizQuestion {
  id: string;
  question: LocalizedText | string;
  options: LocalizedArray | string[];
  correctAnswer: number;
  explanation: LocalizedText | string;
}

export interface Lesson {
  id: string;
  title: LocalizedText | string;
  description: LocalizedText | string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: LocalizedArray | string[];
  slides: Slide[];
  quiz: QuizQuestion[];
}

import { COURSES } from './courses';
export const courses = COURSES;
`;

COURSES.forEach(course => {
  mainLessonsCode += `import { ${course.id.replace(/-/g, '_')}_lessons } from './courses/${course.id}';\n`;
});

mainLessonsCode += `\nexport const LESSONS: Lesson[] = [\n`;
COURSES.forEach(course => {
  mainLessonsCode += `  ...${course.id.replace(/-/g, '_')}_lessons,\n`;
});
mainLessonsCode += `];\n\nexport const getLessonById = (id: string): Lesson | undefined => LESSONS.find(l => l.id === id);\n`;

fs.writeFileSync(path.join(__dirname, 'lessons.ts'), mainLessonsCode);

console.log('Successfully generated bilingual courses and lessons!');
