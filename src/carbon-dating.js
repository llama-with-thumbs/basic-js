const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'stirng') return false
  const k = Math.log(2) / HALF_LIFE_PERIOD
  const t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k 
  return Math.ceil(t)
};
