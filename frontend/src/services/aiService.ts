// aiService.ts
// Secure backend integration. No API keys stored in frontend.

// ============================================================
// DEMO MODE: Local educational keyword responses
// ============================================================

interface DemoResponse {
  keywords: string[];
  response: string;
}

const DEMO_RESPONSES: DemoResponse[] = [
  {
    keywords: ['variable', 'variables'],
    response: `**Variables in Python**\n\nA variable is a named storage location that holds a value. You create one by writing:\n\`\`\`python\nname = "Sara"\nage = 21\ngpa = 3.85\nprint(f"{name} is {age} years old with a GPA of {gpa}")\n\`\`\`\n\nThe \`=\` sign is the assignment operator — it stores the value on the right into the variable on the left. Python figures out the data type automatically (dynamic typing).\n\n**Common types**: str (text), int (whole numbers), float (decimals), bool (True/False).`,
  },
  {
    keywords: ['loop', 'loops', 'for', 'while'],
    response: `**Loops in Python**\n\nLoops repeat a block of code.\n\n**for loop** — use when you know how many times to repeat:\n\`\`\`python\nfor i in range(1, 6):\n    print(f"Step {i}")\n\`\`\`\n\n**while loop** — use when you repeat until a condition fails:\n\`\`\`python\ncount = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1\n\`\`\`\n\n\`range(start, stop)\` produces numbers from start up to (not including) stop. Always ensure a while loop has a way to end — otherwise it runs forever!`,
  },
  {
    keywords: ['function', 'functions', 'def'],
    response: `**Functions in Python**\n\nA function is a named, reusable block of code:\n\`\`\`python\ndef greet(name):\n    """Returns a greeting for the given name."""\n    return f"Hello, {name}! Welcome to CodePath Academy."\n\nmessage = greet("Sara")\nprint(message)\n# Output: Hello, Sara! Welcome to CodePath Academy.\n\`\`\`\n\nKey points:\n- \`def\` defines a function\n- Parameters are the inputs (name in the example)\n- \`return\` sends a value back to the caller\n- A function without \`return\` gives back \`None\`\n\nFunctions help avoid repeating code and make programs more readable and maintainable.`,
  },
  {
    keywords: ['class', 'classes', 'object', 'objects', 'oop'],
    response: `**Classes and Objects (OOP)**\n\nA class is a blueprint; an object is an instance created from it:\n\`\`\`python\nclass Student:\n    def __init__(self, name, major):\n        self.name = name\n        self.major = major\n    \n    def introduce(self):\n        return f"Hi! I'm {self.name}, studying {self.major}."\n\nsara = Student("Sara", "Computer Science")\nprint(sara.introduce())\n# Output: Hi! I'm Sara, studying Computer Science.\n\`\`\`\n\n- \`__init__\` runs automatically when you create an object\n- \`self\` refers to the current instance\n- Each object (sara, ahmed) has its own independent data`,
  },
  {
    keywords: ['inheritance', 'inherit', 'subclass', 'parent'],
    response: `**Inheritance in Python**\n\nInheritance lets a child class reuse the parent's code:\n\`\`\`python\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} makes a sound."\n\nclass Dog(Animal):\n    def speak(self):  # Override the parent method\n        return f"{self.name} says: Woof!"\n\ndog = Dog("Rex")\nprint(dog.speak())\n# Output: Rex says: Woof!\n\`\`\`\n\nUse \`super().__init__()\` to call the parent constructor and set up inherited attributes.`,
  },
  {
    keywords: ['sql', 'select', 'database', 'query', 'table'],
    response: `**SQL SELECT Query**\n\nSQL is used to interact with relational databases. The most common command is SELECT:\n\`\`\`sql\n-- Get all students\nSELECT * FROM students;\n\n-- Get specific columns with a filter\nSELECT name, gpa\nFROM students\nWHERE gpa > 3.5\nORDER BY gpa DESC;\n\n-- Count students per major\nSELECT major, COUNT(*) AS total\nFROM students\nGROUP BY major;\n\`\`\`\n\n**Key clauses**: WHERE filters rows, ORDER BY sorts results, GROUP BY aggregates. Always use WHERE in UPDATE and DELETE to avoid affecting all rows.`,
  },
  {
    keywords: ['array', 'list', 'linked list', 'data structure'],
    response: `**Arrays vs Linked Lists**\n\nBoth store sequences of data, but with different trade-offs:\n\n**Array (Python list)**:\n\`\`\`python\ngrades = [88, 92, 79, 95]\nprint(grades[0])   # O(1) — instant index access\ngrades.append(91)  # O(1) amortized — add to end\n\`\`\`\n\n**Linked List** — nodes chained with pointers:\n- O(1) insert at the head (no shifting needed)\n- O(n) to access element by index (must traverse)\n\n| Operation       | Array   | Linked List |\n|-----------------|---------|-------------|\n| Access by index | O(1) ✅ | O(n) ❌     |\n| Insert at front | O(n) ❌ | O(1) ✅     |\n\nChoose arrays for random access; linked lists for frequent insertions at the front.`,
  },
  {
    keywords: ['encryption', 'encrypt', 'crypto', 'hash', 'password security'],
    response: `**Encryption and Password Security**\n\n**Hashing** (one-way — for storing passwords):\n- Same input → same hash; cannot reverse\n- \`"password123"\` → \`"$2b$12$x..."\` (bcrypt hash)\n- Use bcrypt, Argon2, or scrypt — NOT plain SHA256\n\n**Symmetric encryption** (same key to encrypt and decrypt):\n- Fast, used for bulk data\n- Example: AES-256\n\n**Asymmetric encryption** (public + private key pair):\n- Public key: anyone can encrypt\n- Private key: only the owner can decrypt\n- Example: RSA, used in HTTPS TLS handshake\n\nHTTPS uses asymmetric for key exchange, then symmetric for speed. Enable MFA — it blocks 99%+ of automated attacks!`,
  },
  {
    keywords: ['ai', 'machine learning', 'ml', 'neural', 'deep learning'],
    response: `**AI, ML, and Deep Learning**\n\nThink of them as nested circles:\n- **AI** (biggest): any system performing tasks needing human-like intelligence\n- **ML** (inside AI): systems that LEARN from data instead of following coded rules\n- **Deep Learning** (inside ML): ML using multi-layer neural networks\n\n**Key insight**: current AI is NARROW — AlphaGo is superhuman at Go but cannot write a sentence. General AI (AGI) does not exist yet.\n\n**ML types**:\n- Supervised: learns from labeled examples (cat/dog photos with labels)\n- Unsupervised: finds patterns in unlabeled data (customer clustering)\n- Reinforcement: learns through trial, error, and rewards (game-playing bots)`,
  },
  {
    keywords: ['osi', 'model', 'tcp', 'ip', 'network', 'protocol', 'http', 'https', 'dns'],
    response: `**Networking Fundamentals**\n\n**OSI Model (7 layers)** — remember: "Please Do Not Throw Sausage Pizza Away":\n1. Physical, 2. Data Link, 3. Network (IP), 4. Transport (TCP/UDP), 5. Session, 6. Presentation, 7. Application (HTTP)\n\n**DNS**: translates \`google.com\` → \`142.250.80.46\` (IP address)\n\n**HTTP vs HTTPS**:\n- HTTP: plain text, port 80\n- HTTPS: encrypted with TLS, port 443 — the padlock in your browser\n\n**TCP vs UDP**:\n- TCP: reliable, ordered, guaranteed delivery (web, email, files)\n- UDP: fast, no guarantees (video streaming, gaming, DNS)`,
  },
  {
    keywords: ['phishing', 'malware', 'security', 'cyber', 'attack', 'sql injection', 'xss'],
    response: `**Common Cyber Threats & Defenses**\n\n**Phishing**: fake emails impersonating trusted entities. Defense: verify sender, hover over links before clicking, never share passwords via email.\n\n**SQL Injection** — ALWAYS use parameterized queries:\n\`\`\`python\n# DANGEROUS (don't do this!)\nquery = "SELECT * FROM users WHERE name = '" + user_input + "'\"\n\n# SAFE — parameterized query\ncursor.execute("SELECT * FROM users WHERE name = ?", (user_input,))\n\`\`\`\n\n**XSS**: malicious JavaScript injected into web pages. Defense: encode all user-provided content before displaying in HTML. Modern frameworks (React) do this automatically.\n\n**CIA Triad**: Confidentiality + Integrity + Availability — the three pillars of cybersecurity.`,
  },
  {
    keywords: ['big o', 'complexity', 'algorithm', 'efficiency', 'time complexity'],
    response: `**Big O Notation**\n\nBig O describes how algorithm performance scales with input size n:\n\n| Notation    | Name        | Example                    |\n|-------------|-------------|----------------------------|\n| O(1)        | Constant    | Array index access, dict lookup |\n| O(log n)    | Logarithmic | Binary search, BST search  |\n| O(n)        | Linear      | Linear search, single loop |\n| O(n log n)  | Log-linear  | Merge sort, heap sort      |\n| O(n²)       | Quadratic   | Nested loops, bubble sort  |\n| O(2^n)      | Exponential | Recursive Fibonacci (naive)|\n\nBig O drops constants: O(3n + 100) → O(n). Always optimize the dominant term. For n=1,000,000: O(n) runs in seconds; O(n²) would take days.`,
  },
];

function buildDemoResponse(userMessage: string, lessonContext?: string): string {
  const lower = userMessage.toLowerCase();

  for (const entry of DEMO_RESPONSES) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }

  // Context-aware fallback
  if (lessonContext) {
    return `You are currently studying **${lessonContext}**. Could you ask a more specific question about this topic? For example:\n\n- "What is a variable?"\n- "How do loops work?"\n- "Explain classes in Python"\n- "What is SQL SELECT?"\n- "How does encryption work?"\n\nI will give you a detailed explanation with examples!`;
  }

  return `I am the CodePath Academy AI Tutor in **demo mode**. I can answer questions on these topics:\n\n🐍 **Python**: variables, loops, functions, conditions\n📦 **OOP**: classes, objects, inheritance, polymorphism\n🌲 **Data Structures**: arrays, linked lists, stacks, queues, trees, graphs, Big O\n🗄️ **Databases**: SQL SELECT, WHERE, INSERT, JOINs, normalization\n🌐 **Networking**: OSI model, TCP/IP, DNS, HTTP/HTTPS\n🛡️ **Cybersecurity**: CIA Triad, passwords, phishing, SQL injection, XSS\n🤖 **AI/ML**: machine learning, deep learning, bias, responsible AI\n\nTry asking: "Explain Python variables", "What is a loop?", or "How does SQL SELECT work?"`;
}

// ============================================================
// REAL API MODE (Backend Integration)
// ============================================================

export async function checkDemoMode(): Promise<boolean> {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) return false;
    const data = await res.json();
    return data.demoMode === true;
  } catch (err) {
    return false;
  }
}

async function callRealAPI(message: string, conversationHistory: ChatMessage[], lessonContext?: string, language: string = 'en', signal?: AbortSignal): Promise<string> {
  const res = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currentMessage: message, messages: conversationHistory, context: lessonContext, language, mode: 'EXPLAIN' }),
    credentials: 'include',
    signal
  });
  
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || 'AI Tutor is temporarily unavailable. Please try again.');
  }
  
  if (data.error) throw new Error(data.error.message || data.error);
  
  const reply = data?.reply ?? data?.data?.reply;
  if (typeof reply !== 'string' || !reply.trim()) {
    throw new Error('AI_RESPONSE_INVALID');
  }
  return reply.trim();
}

export async function generateQuiz(topic: string, difficulty: string, count: number, scopeContext: string, language: string = 'en'): Promise<any> {
  const isDemo = await checkDemoMode();
  if (isDemo) {
    // Generate a fallback simulated quiz
    return {
      title: `[Demo] ${difficulty} Quiz: ${topic}`,
      topic,
      difficulty,
      questions: Array.from({ length: count }, (_, i) => ({
        id: `demo-q-${i}`,
        question: `Demo Question ${i + 1} about ${topic} (${difficulty})`,
        options: ['Correct Answer', 'Wrong Option A', 'Wrong Option B', 'Wrong Option C'],
        correctAnswer: 0,
        explanation: 'This is a simulated demo quiz generated entirely on the frontend because the backend is offline or missing an API key.'
      }))
    };
  }

  const res = await fetch('/api/ai/generate-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, difficulty, numQuestions: count, language, scopeContext }),
    credentials: 'include'
  });

  let data;
  try {
    data = await res.json();
  } catch (e) {
    throw new Error('QUIZ_RESPONSE_INVALID');
  }

  if (!res.ok) {
    throw new Error(data.error?.message || 'AI Quiz is temporarily unavailable. Please try again.');
  }

  const quiz = data?.quiz;

  if (!data?.success || !quiz || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    throw new Error('QUIZ_RESPONSE_INVALID');
  }

  return quiz;
}

// ============================================================
// PUBLIC INTERFACE
// ============================================================

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export async function sendMessage(
  userMessage: string,
  conversationHistory: ChatMessage[],
  lessonContext?: string,
  language: string = 'en',
  signal?: AbortSignal
): Promise<string> {
  const isDemo = await checkDemoMode();
  
  if (isDemo) {
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 400));
    if (signal?.aborted) throw new Error('Aborted');
    return buildDemoResponse(userMessage, lessonContext);
  }

  try {
    return await callRealAPI(userMessage, conversationHistory, lessonContext, language, signal);
  } catch (err: any) {
    if (err.name === 'AbortError') throw err;
    console.error('AI API call failed:', err);
    throw new Error(err.message || 'AI API call failed');
  }
}

export const SUGGESTED_QUESTIONS = [
  'Explain Python variables with an example',
  'How do for loops work?',
  'What is a class in OOP?',
  'Explain SQL SELECT with WHERE',
  'What is the difference between TCP and UDP?',
  'What is SQL injection and how to prevent it?',
  'Explain overfitting in machine learning',
  'What does Big O notation mean?',
  'How does DNS work?',
  'What is the CIA Triad in cybersecurity?',
];
