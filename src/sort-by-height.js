const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [].concat(arr);

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== -1) {
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] !== -1) {
          if (newArray[i] < newArray[j]) {
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
          }
        }
      }
    }
  }

  return newArray;
}

module.exports = {
  sortByHeight
};
