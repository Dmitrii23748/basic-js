const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.toString !== Date.prototype.toString) {
    throw new Error('Invalid date!');
  }

  const winterSeasone = [11, 0, 1];
  const fallSeasone = [9, 8, 10];
  const springSeasone = [2, 3, 4];
  const summerSeasone = [5, 6, 7];

  if (winterSeasone.includes(date.getMonth())) {
    return 'winter';
  } else if (fallSeasone.includes(date.getMonth())) {
    return 'fall';
  } else if (springSeasone.includes(date.getMonth())) {
    return 'spring';
  } else if (summerSeasone.includes(date.getMonth())) {
    return 'summer';
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
