const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/description: "(.*?)"/g, (match, p1) => {
    return `description: "${p1.replace(/"/g, '\\"')}"`;
  });
  fs.writeFileSync(filePath, content);
});
