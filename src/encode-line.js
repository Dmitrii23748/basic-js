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
  if (str.length === 0) {
    return str;
  } 

  const res = [];
  let count = 1;

  str.split('').forEach((item, index, array) => {
    if (item === array[index + 1]) {
      count++;
    } else if (count === 1) {
      res.push(item);
    } else {
      res.push(`${count}${item}`);
      count = 1;
    }
  });

  return res.join('');
}

module.exports = {
  encodeLine
};
