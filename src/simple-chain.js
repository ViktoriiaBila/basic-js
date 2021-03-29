const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(`( ${value} )`);
    } else {
      this.arr.push('(  )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.arr = [];
      throw new TypeError;
    }
    else this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let curArr = this.arr.join('~~');
    this.arr = [];
    return curArr;
  }
};

module.exports = chainMaker;
