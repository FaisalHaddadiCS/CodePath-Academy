import "dotenv/config";
import prisma from "./utils/db";

async function main() {
  console.log("Seeding real curriculum database...");

  // Clean existing data for clean seed
  await prisma.codingChallenge.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.category.deleteMany({});
  
  // 1. Create Categories
  const categoriesData = [
    { name: "Programming", description: "Learn fundamental and advanced programming." },
    { name: "Databases", description: "Master SQL, NoSQL, and database design." },
    { name: "Web Development", description: "Build modern web applications." },
    { name: "Networking", description: "Understand how the internet and networks operate." },
    { name: "Cybersecurity", description: "Secure systems and learn defensive techniques." },
    { name: "Artificial Intelligence", description: "Explore ML, Deep Learning, and GenAI." }
  ];

  const categories = await Promise.all(
    categoriesData.map(c => prisma.category.create({ data: c }))
  );

  const getCatId = (name: string) => categories.find(c => c.name === name)!.id;

  // 2. Python Basics Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Programming"),
      title: "Python Basics",
      description: "A comprehensive introduction to Python programming. Learn variables, types, loops, and OOP.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      modules: {
        create: [
          {
            title: "1. Introduction to Python",
            order: 1,
            lessons: {
              create: [
                {
                  title: "What is Python?",
                  order: 1,
                  slides: {
                    create: [
                      { type: "TEXT", order: 1, content: JSON.stringify({ text: "Python is a high-level, interpreted programming language known for its readability." }) },
                      { type: "TEXT", order: 2, content: JSON.stringify({ text: "It is widely used in web development, data science, and AI." }) }
                    ]
                  }
                },
                {
                  title: "Variables",
                  order: 2,
                  slides: {
                    create: [
                      { type: "TEXT", order: 1, content: JSON.stringify({ text: "Variables store data in memory." }) },
                      { 
                        type: "CODE_ANIMATION", 
                        order: 2, 
                        content: JSON.stringify({ 
                          steps: [
                            { code: "age = 25", highlightLines: [1], explanation: "An integer value 25 is assigned to the variable 'age'." },
                            { code: "age = 25\nname = 'Alice'", highlightLines: [2], explanation: "A string 'Alice' is assigned to 'name'." }
                          ]
                        }) 
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });

  // 3. SQL Fundamentals Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Databases"),
      title: "SQL Fundamentals",
      description: "Learn how to store, query, and manipulate data in relational databases.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      modules: {
        create: [
          {
            title: "1. Introduction to Relational Databases",
            order: 1,
            lessons: {
              create: [
                {
                  title: "What is a Database?",
                  order: 1,
                  slides: {
                    create: [
                      { type: "TEXT", order: 1, content: JSON.stringify({ text: "A database is an organized collection of data." }) }
                    ]
                  }
                },
                {
                  title: "SELECT Statement",
                  order: 2,
                  slides: {
                    create: [
                      { type: "CODE", order: 1, content: JSON.stringify({ code: "SELECT * FROM users;" }) }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });

  // 4. Web Dev Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Web Development"),
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript and how the Web works.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      modules: {
        create: [
          { title: "1. The Internet & HTML", order: 1, lessons: { create: [{ title: "What is the Web?", order: 1, slides: { create: [{ type: "TEXT", order: 1, content: JSON.stringify({ text: "The World Wide Web is a system of interconnected documents." }) }] } }] } }
        ]
      }
    }
  });

  // 5. Networking Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Networking"),
      title: "Networking Basics",
      description: "Understand TCP/IP, DNS, DHCP, and OSI models.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ip_Network.svg",
      modules: {
        create: [
          { title: "1. Networking Fundamentals", order: 1, lessons: { create: [{ title: "The OSI Model", order: 1, slides: { create: [{ type: "TEXT", order: 1, content: JSON.stringify({ text: "The OSI model has 7 layers." }) }] } }] } }
        ]
      }
    }
  });

  // 6. Cybersecurity Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Cybersecurity"),
      title: "Cybersecurity Fundamentals",
      description: "Learn to defend against XSS, CSRF, and SQL Injection.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Gnome-emblem-readonly.svg",
      modules: {
        create: [
          { title: "1. Security Concepts", order: 1, lessons: { create: [{ title: "Authentication vs Authorization", order: 1, slides: { create: [{ type: "TEXT", order: 1, content: JSON.stringify({ text: "AuthN is who you are. AuthZ is what you can do." }) }] } }] } }
        ]
      }
    }
  });

  // 7. AI Course
  await prisma.course.create({
    data: {
      categoryId: getCatId("Artificial Intelligence"),
      title: "Introduction to AI",
      description: "Deep learning, neural networks, and prompt engineering.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      modules: {
        create: [
          { title: "1. AI Concepts", order: 1, lessons: { create: [{ title: "What is Machine Learning?", order: 1, slides: { create: [{ type: "TEXT", order: 1, content: JSON.stringify({ text: "Machine Learning is training models on data." }) }] } }] } }
        ]
      }
    }
  });

  // 8. Coding Challenges (10 Python)
  const pythonChallenges = [
    {
      title: "Calculate the Average",
      difficulty: "Beginner",
      description: "Given a list of numbers, calculate and print the average.",
      starterCode: "numbers = [10, 20, 30, 40]\n# Your code here\n",
      testCases: [
        { input: null, expected: "25.0", isHidden: false }
      ]
    },
    {
      title: "Print 1 to 10",
      difficulty: "Beginner",
      description: "Write a loop that prints numbers from 1 to 10, each on a new line.",
      starterCode: "# Your code here\n",
      testCases: [
        { input: null, expected: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", isHidden: false }
      ]
    },
    {
      title: "Even or Odd",
      difficulty: "Beginner",
      description: "Determine if the variable `num` is even or odd. Print 'Even' or 'Odd'.",
      starterCode: "num = 42\n# Your code here\n",
      testCases: [
        { input: null, expected: "Even", isHidden: false },
        { input: null, expected: "Odd", isHidden: true } // Mocking hidden check logic
      ]
    },
    {
      title: "Sum of a List",
      difficulty: "Beginner",
      description: "Calculate the sum of all elements in the list `items`.",
      starterCode: "items = [5, 10, 15]\n# Your code here\n",
      testCases: [
        { input: null, expected: "30", isHidden: false }
      ]
    },
    {
      title: "String Reversal",
      difficulty: "Beginner",
      description: "Print the reverse of the string `word`.",
      starterCode: "word = 'hello'\n# Your code here\n",
      testCases: [
        { input: null, expected: "olleh", isHidden: false }
      ]
    },
    {
      title: "Find Maximum",
      difficulty: "Intermediate",
      description: "Find the maximum number in a list WITHOUT using the built-in max() function.",
      starterCode: "numbers = [4, 7, 2, 9, 1]\n# Your code here\n",
      testCases: [
        { input: null, expected: "9", isHidden: false },
        { input: null, expected: "100", isHidden: true }
      ]
    },
    {
      title: "Dictionary Lookup",
      difficulty: "Intermediate",
      description: "Given a dictionary of student grades, print Alice's grade.",
      starterCode: "grades = {'Alice': 85, 'Bob': 92}\n# Your code here\n",
      testCases: [
        { input: null, expected: "85", isHidden: false }
      ]
    },
    {
      title: "Factorial",
      difficulty: "Intermediate",
      description: "Calculate the factorial of 5 using a loop.",
      starterCode: "# Your code here\n",
      testCases: [
        { input: null, expected: "120", isHidden: false }
      ]
    },
    {
      title: "Basic Class",
      difficulty: "Advanced",
      description: "Create a class `Dog` with a method `bark()` that prints 'Woof!'. Instantiate it and call bark().",
      starterCode: "# Your code here\n",
      testCases: [
        { input: null, expected: "Woof!", isHidden: false }
      ]
    },
    {
      title: "Exception Handling",
      difficulty: "Advanced",
      description: "Safely divide `a` by `b` using try/except. If division by zero occurs, print 'Error'.",
      starterCode: "a = 10\nb = 0\n# Your code here\n",
      testCases: [
        { input: null, expected: "Error", isHidden: false }
      ]
    }
  ];

  for (const challenge of pythonChallenges) {
    await prisma.codingChallenge.create({
      data: {
        title: challenge.title,
        difficulty: challenge.difficulty,
        description: challenge.description,
        starterCode: challenge.starterCode,
        language: "python",
        testCases: {
          create: challenge.testCases
        }
      }
    });
  }

  console.log("Seeding complete! Check your database.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
