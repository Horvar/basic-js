const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
  let newArr = [...arr]
  
  while ((newArr).includes('--double-next') || (newArr).includes('--double-prev') || (newArr).includes('--discard-next') || (newArr).includes('--discard-prev')) {
    for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case '--double-next':
          newArr[i + 1] === undefined ? newArr.splice(i, 1) : newArr[i] = newArr[i + 1]
          break
        case '--double-prev':
          newArr[i - 1] === undefined ? newArr.splice(i, 1) : newArr[i] = newArr[i - 1]
          break
        case '--discard-next':
          newArr[i] = null
          newArr[i + 1] = null
          break
        case '--discard-prev':
          newArr[i - 1] === undefined ?
              newArr.splice(i, 1) :
              newArr[i] = null
              newArr[i - 1] = null
          break
      }
    }
  }
  
  return newArr.filter((element) => element !== null)
}

module.exports = {
  transform
}
