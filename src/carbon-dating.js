const { NotImplementedError } = require('../extensions/index.js');

const modernActivity = 15;
const halfLifePeriod = 5730;

/**
 * Determine the age of archeological find by using
 * given modernActivity and halfLifePeriod values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const
      modernActivity = 15,
      halfLifePeriod = 5730,
      activity = parseFloat(sampleActivity)
  
  if (isNaN(activity) || activity <= 0 || activity >= modernActivity || typeof sampleActivity !== 'string') {
    return false
  }

  return Math.ceil(Math.log(modernActivity / activity) / (0.693 / halfLifePeriod))
}

module.exports = {
  dateSample
}
