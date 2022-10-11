const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
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
  const halfLife = 5730;
 const presentTime = 15;
 if (sampleActivity === 'no-value') {
     return false
 }
 if(typeof sampleActivity !== 'string') {
     return false
 }
 const activeNumeric = parseFloat(sampleActivity);
 if (isNaN(activeNumeric)) {
     return false
 }
 if (activeNumeric === 0 || activeNumeric < 0 ) {
     return false
 }
 if (activeNumeric > presentTime ) {
    return false
}
 const k = 0.693/halfLife
 return Math.ceil(Math.log(presentTime / activeNumeric) / k)

}

module.exports = {
  dateSample
};
