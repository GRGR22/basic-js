const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || Number(sampleActivity) <= 0 || Number(sampleActivity) >15 || isNaN(Number(sampleActivity)*2)) return false;
  let k = .693/HALF_LIFE_PERIOD;
  let t = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/k);
  
  return t;
};
