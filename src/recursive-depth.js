const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    //npm run test ./test/recursive-depth.test.js
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
         return 1;
        }
        else return 1 + Math.max(...arr.map(it => this.calculateDepth(it)));
        }
        else return 0;
    }
  }

