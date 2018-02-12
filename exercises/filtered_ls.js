let fs = require('fs');
// could use the path module as well
let dir = process.argv[2];
let ext = '.' + process.argv[3];

// console.log(dir, ext)

fs.readdir(dir, function filterDirectory(err, filenames) {
  if (err) return console.error(error)
  console.log(filenames.filter(i => i.includes(ext)).join('\n'));
})