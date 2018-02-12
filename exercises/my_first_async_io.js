let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', printLines);

function printLines (error, data) {
  if (error) return console.error(error)
  console.log(data.split('\n').length -1);
}