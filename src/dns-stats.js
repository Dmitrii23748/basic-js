const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = domains
    .map(el => el.split('.').reverse().map((item, index, array) => array
        .map(el => `.${el}`).slice(0, index + 1).join(''))).flat()
        .reduce((count, el) => {
      count[el] = (count[el] || 0) + 1;
      return count;
    }, {});
  return res;
}

module.exports = {
  getDNSStats
};
