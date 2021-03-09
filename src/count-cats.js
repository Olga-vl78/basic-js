const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  //throw new CustomError('Not implemented');
  if (backyard === undefined || backyard.length === 0) {
      return 0;
    }
  let arr = backyard.flat();
  let result = [];
  let number;// = 0;
      
  for(let i = 0; i < arr.length; i++) {
      if (arr[i] === '^^') {
          result.push(arr[i]);
      }
      
      number = result.length;
  }
  return number;
};
