const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof options !== 'object') return str
  let arr = []
  let subArr = []
  let string
  let subString

  // console.log(options)

  let repeatTimes = 1
  let separator = '+'
  let addition = ''
  let additionRepeatTimes = 1
  let additionSeparator = '|'
  if( options.hasOwnProperty('repeatTimes') && options.repeatTimes !== undefined) repeatTimes = options.repeatTimes
  if( options.hasOwnProperty('separator') && options.separator !== undefined) separator = options.separator + ''
  if( options.hasOwnProperty('addition') && options.addition !== undefined) addition = options.addition + ''
  if( options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes
  if( options.hasOwnProperty('additionSeparator') && options.additionSeparator !== undefined)  additionSeparator = options.additionSeparator + ''

  // console.log(repeatTimes)

  for (let j = 0; j < additionRepeatTimes; j++) {
    // console.log(j)
    subArr.push(addition)
  }
  subString = subArr.join(additionSeparator)
  // console.log(subString)

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str + subString)
  }
  // console.log(arr)
  string = arr.join(separator)
  return string
};