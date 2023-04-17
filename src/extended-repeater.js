const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let
      result = [],
      stringAdd = []
  
  const
      repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes,
      separator = options.separator === undefined ? '+' : options.separator,
      
      addition = options.addition === undefined ? '' : options.addition,
      additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator,
      additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes

  for (let i = 0; i < additionRepeatTimes; i++) {
    stringAdd.push(`${addition}`)
  }
  
  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${str}${stringAdd.join(additionSeparator)}`)
  }
  
  return result.join(separator)
}

module.exports = {
  repeater
}
