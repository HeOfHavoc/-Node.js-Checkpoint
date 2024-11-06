//Task3
var fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');

console.log(fs.readFileSync('hello.txt', 'utf8'));
