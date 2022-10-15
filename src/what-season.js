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
function getSeason(date) {
  let x = new Date(date);
  let a;
  if ((x.getMonth() >= 0 && x.getMonth() <= 1) || x.getMonth() === 11) {
    return (a = 'winter');
  } else if (x.getMonth() >= 2 && x.getMonth() <= 4) {
    return (a = 'spring');
  } else if (x.getMonth() >= 5 && x.getMonth() <= 7) {
    return (a = 'summer');
  } else if (x.getMonth() >= 8 && x.getMonth() <= 10) {
    return (a = 'fall');
  } else if (date === undefined) {
    return (a = `Unable to determine the time of year!`);
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
