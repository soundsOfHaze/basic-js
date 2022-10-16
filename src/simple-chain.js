const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = String(value);
    this.chain.push(`( ${value} )`);

    return this;
  },
  removeLink(pos) {
    if (Number.isInteger(pos) === false || pos <= 0 || isNaN(pos)) {
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(pos - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finished = this.chain.join('~~');
    this.chain = [];
    return finished;
  },
};

module.exports = {
  chainMaker,
};
