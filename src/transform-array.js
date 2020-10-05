const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let transArr = []
  for( let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case '--discard-next':
              i = i + 2
              break
          case '--discard-prev':
              if( i - 1 < 0) break
              transArr.pop()
              break
          case '--double-next':
              if( i + 1 >= arr.length) break
              transArr.push(arr[i+1])
              break
          case '--double-prev':
              if( i - 1 < 0) break
              transArr.push(arr[i-1])
              break
          default:
              transArr.push(arr[i])
              break
      }
  }
  return transArr
}
