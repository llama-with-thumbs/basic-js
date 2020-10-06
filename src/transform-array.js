const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  const tArr = []
  const contArr = ['--discard-next', '--double-next', '--double-prev', '--discard-prev']
  const next = ['--discard-next', '--double-next']
  const prev = ['--double-prev', '--discard-prev']
  const disN = '--discard-next'
  const douN = '--double-next'
  const disP = '--discard-prev'
  const douP = '--double-prev'
  for (let i = 0; i < arr.length; i++) {
      if (!contArr.includes(arr[i])) {

          if (next.includes(arr[i-1]) && prev.includes(arr[i+1])) {

              if ((arr[i-1] === douN) && (arr[i+1] === douP)) {
                  tArr.push(arr[i])
                  tArr.push(arr[i])
                  tArr.push(arr[i])
                  continue
              } else if ((arr[i-1] === douN) && (arr[i+1] === disP)) {
                  tArr.push(arr[i])
                  continue
              } else {
                  continue
              }

          } else if (next.includes(arr[i-1]) || prev.includes(arr[i+1])) {
              if (arr[i-1] === douN || arr[i+1] === douP ) {
                  tArr.push(arr[i])
                  tArr.push(arr[i])
                  continue
              } else {
                  continue
              }
          } else {
              tArr.push(arr[i])
              continue
          }
      }
  }
  return tArr
}