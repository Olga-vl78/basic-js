const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //./test/transform-array.test.js

 let seq = ['--discard-next', '--discard-prev', '--double-prev', '--double-next'];
let transfArr = [];
//if (typeof arr === undefined) {
  //  return arr;
//}

if (!Array.isArray(arr)) {
    throw new Error ("Error");
}
//if (arr === undefined) {
   // return arr;
//}
if (!arr.length) {
   return [];
}

if (seq.every(item => arr.indexOf(item) == -1)) {
    return (arr);
} else {
    for (i = 0; i < arr.length; i++) {
    
    if (arr[i] === '--discard-prev' && i === 0 || arr[i] === '--double-prev' && i === 0) {
    transfArr === transfArr;
    }
    else if (arr[i] === '--discard-next' && i === arr.length - 1 || arr[i] === '--double-next' && i === arr.length - 1) {
    transfArr === transfArr;
    }
    else if (!seq.includes(arr[i]) && transfArr[transfArr.length - 1] !== '--discard-next') {
    transfArr.push(arr[i]);
    }
    
    else if (!seq.includes(arr[i]) && transfArr[transfArr.length - 1] === '--discard-next') {
    transfArr.pop();
    }
    
    else if (arr[i] === '--discard-next' && i < arr.length - 1) {
    transfArr.push(arr[i]);      
    }

    else if (arr[i] === '--double-next' && i < arr.length - 1) {
    transfArr.push(arr[i + 1]);
    }

    else if (arr[i] === '--discard-prev' && i > 0 && arr[i - 2] !== '--discard-next') {
     transfArr.pop(); 
    }
    else if (arr[i] === '--discard-prev' && i > 0 && arr[i - 2] === '--discard-next') {
     transfArr === transfArr; 
    }

    else if (arr[i] === '--double-prev' && i > 0 && arr[i - 2] !== '--discard-next') {
     transfArr.push(arr[i - 1]); 
    }
    else if (arr[i] === '--double-prev' && i > 0 && arr[i - 2] === '--discard-next') {
     transfArr === transfArr; 
    }
    

  }  return transfArr; 

 }
};
