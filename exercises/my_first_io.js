const fs = require('fs');

let content = fs.readFileSync(process.argv[2], 'utf8');

let lines = content.split('\n').length - 1

console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);

