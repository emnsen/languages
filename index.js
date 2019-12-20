var fs = require('fs');

var locales = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

var output = ['en', 'ar', 'fa', 'he', 'tr'].map(item => {
  return locales[item];
});

console.log(output);
