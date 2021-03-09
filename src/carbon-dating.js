const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // npm run test ./test/carbon-dating.test.js
  if (Number.isNaN(Number(sampleActivity))) {
    return false;
}
let newSampleAct = Number(sampleActivity);
if (sampleActivity === undefined || typeof sampleActivity === 'undefined' ) {
    return false;
}
else if (sampleActivity === undefined || newSampleAct === 0 || typeof newSampleAct === undefined) {
    return false;
}
else if(typeof sampleActivity !== 'string' && newSampleAct !== 'number') {
    return false;
}
else if (newSampleAct < 0 || newSampleAct > MODERN_ACTIVITY) {
    return false;
}
else {
    return Math.ceil((Math.log(MODERN_ACTIVITY / newSampleAct)) / (0.693 / HALF_LIFE_PERIOD));
}
}

