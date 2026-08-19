const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  { regex: /(?<!-)margin-left\s*:/g, replacement: 'margin-inline-start:' },
  { regex: /(?<!-)margin-right\s*:/g, replacement: 'margin-inline-end:' },
  { regex: /(?<!-)padding-left\s*:/g, replacement: 'padding-inline-start:' },
  { regex: /(?<!-)padding-right\s*:/g, replacement: 'padding-inline-end:' },
  { regex: /(?<!-)border-left\s*:/g, replacement: 'border-inline-start:' },
  { regex: /(?<!-)border-right\s*:/g, replacement: 'border-inline-end:' },
  { regex: /(?<!-)border-left-color\s*:/g, replacement: 'border-inline-start-color:' },
  { regex: /(?<!-)border-right-color\s*:/g, replacement: 'border-inline-end-color:' },
  { regex: /(?<!-)left\s*:/g, replacement: 'inset-inline-start:' },
  { regex: /(?<!-)right\s*:/g, replacement: 'inset-inline-end:' },
];

walkDir('./frontend/src', function(filePath) {
  if (filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replacement);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated RTL in ' + filePath);
    }
  }
});
