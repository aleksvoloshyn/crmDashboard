const del = require('del')
const path = require('../config/path.js')
//удаление директории
const clear = () => {
  return del(path.root)
}

module.exports = clear
