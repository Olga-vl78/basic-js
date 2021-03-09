const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
    const winter = [11, 0, 1];
    const spring = [2, 3, 4];
    const summer = [5, 6, 7];
    const autumn = [8, 9, 10];
    
    if (date === undefined) { 
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
     throw new Error ("Error");
    }
    else {
    let month = date.getMonth();
    
    if (winter.includes(month)) {
     return 'winter';
    }
    else if (spring.includes(month)) {
        return 'spring';
    }
    else if (summer.includes(month)) {
        return 'summer';
    }
    else if (autumn.includes(month)) {
        return 'autumn';
    }
  }
};
