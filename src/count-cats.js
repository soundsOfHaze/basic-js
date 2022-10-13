const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let newA = [];
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    newA.push(...arr[i]);
  }
  newA.forEach((e) => {
    if (e === '^^') {
      count += 1;
    }
  });
  return count;
}

module.exports = {
  countCats,
};
