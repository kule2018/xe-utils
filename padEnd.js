var repeat = require('./repeat')
var toValString = require('./toString')

var isUndefined = require('./isUndefined')

/**
  * 用指定字符从后面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {Number} padString 补全字符
  * @return {String}
  */
function padEnd (str, targetLength, padString) {
  var rest = toValString(str)
  targetLength = targetLength >> 0
  padString = isUndefined(padString) ? ' ' : '' + padString
  if (rest.padEnd) {
    return rest.padEnd(targetLength, padString)
  }
  if (targetLength > rest.length) {
    targetLength -= rest.length
    if (targetLength > padString.length) {
      padString += repeat(padString, targetLength / padString.length)
    }
    return rest + padString.slice(0, targetLength)
  }
  return rest
}

module.exports = padEnd
