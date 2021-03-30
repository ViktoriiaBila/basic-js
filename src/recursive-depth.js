const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (Array.isArray(arr) ? arr.reduce((a, c) => { return Math.max(a, this.calculateDepth(c)) }, 0) : -1);
  }
};