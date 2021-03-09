const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //./test/extended-repeater.test.js
  let result = '';
  let {
    repeatTimes, 
    separator = '+', 
    addition, 
    additionRepeatTimes, 
    additionSeparator = '|'} = options;
  
  /*if (typeof str !== 'string') {
      str = String(str);
    }
   if (addition !== undefined && typeof addition !== 'string') {
      addition = String(addition);
   }*/
  
   if (addition === undefined) {
    result = (str + separator).repeat(repeatTimes - 1) + str;
  }
  
  else if (additionRepeatTimes === undefined) {
    result = (str + addition + separator).repeat(repeatTimes - 1) + str + addition;
  }
  else {
    result = (str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator).repeat(repeatTimes - 1) + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  }
  return result;
  
};
  