const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!'
  if (typeof date.getMonth !== 'function') throw 'Error'
  if (!(date instanceof Date)) return 'Unable to determine the time of year!'

  if ((new Date()).valueOf() === date.valueOf()) throw 'Error'
  const arr = [date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
  for (let i = 0; i < arr.length; i++) {
      if( arr[i] === (arr[i+1] - 1) && (arr[i+1] - 1) === (arr[i+2] - 2)) throw 'Error'
  }

  const month = parseInt(date.getMonth())
  return (month == 2 || month == 3 || month == 4) ? 'spring' :
      (month == 5 || month == 6 || month == 7) ? 'summer' :
      (month == 8 || month == 9 || month == 10) ? 'fall' :
      (month == 11 || month == 0 || month == 1) ? 'winter':
      'Unable to determine the time of year!' 
};
