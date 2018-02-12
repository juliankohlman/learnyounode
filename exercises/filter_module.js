const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)

    list = list.filter(function (file) {
      return file.includes('.' + filterStr);
    })

    callback(null, list)
  })
}
