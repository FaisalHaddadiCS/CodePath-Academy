const http = require('http');

const data = JSON.stringify({
  topic: "Python basics: variables, conditions, loops, and functions",
  difficulty: "Beginner",
  numQuestions: 2,
  language: "en",
  scopeContext: "Course: Python Fundamentals"
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/ai/generate-quiz',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let resData = '';
  res.on('data', (chunk) => {
    resData += chunk;
  });
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    console.log("Response:", JSON.stringify(JSON.parse(resData), null, 2));
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
