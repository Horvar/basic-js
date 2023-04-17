const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString()
  let arrayOfNums = []
  
  for (let i = 0; i < str.toString().length; i++) {
    const newNumber = str.substring(0, i) + str.substring(i + 1)
    arrayOfNums.push(newNumber)
  }

  let max = null
  for (let i = 0; i < arrayOfNums.length; i++) {
    max = max < arrayOfNums[i] ? max = arrayOfNums[i] : max
  }
  
  return parseInt(max)
}

module.exports = {
  deleteDigit
}
