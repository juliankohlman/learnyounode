const filterFn = require('./filter_module.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) console.error('There was an error:', err)

  list.forEach(i => console.log(i))
})