const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = [],
        arrChars = str.split(''),
        sum = 1

    for (let i = 0; i < arrChars.length; i++) {
      if (arrChars[i] === arrChars[i + 1]) {
        sum++
      } else {
        result.push((sum === 1 ? '' : sum) + arrChars[i])
        sum = 1
      }
    }
    return result.join('')
}

module.exports = {
  encodeLine
}
