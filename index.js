'use strict'

var decaf = require('decaffeinate')

exports.name = 'decaffeinate'
exports.inputFormats = ['decaffeinate', 'coffee', 'decaf']
exports.outputFormat = 'js'

exports.render = function (str, options) {
  return decaf.convert(str, options).code
}
