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
  let a = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      a.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      a.push(arr[i - 1]);
    } else if (arr[i] === '--discard-next') {
      continue;
    } else if (arr[i + 1] === '--discard-prev') {
      arr.splice([i + 1], 1);
    } else {
      a.push(arr[i]);
    }
  }
  return a;
}

module.exports = {
  transform,
};
