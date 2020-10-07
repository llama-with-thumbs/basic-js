const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator { 
  constructor(){
      this.depth = 0
      this.arrFlag = 0
  }
  calculateDepth(arr) {
      if (!Array.isArray(arr)) throw 'the input should be an array'
      for (let i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) this.arrFlag = 1
      }
      // console.log(arr)
      this.depth ++
      if (this.arrFlag === 0) {
          const result = this.depth
          this.depth = 0
          return result
      } else {
          this.arrFlag = 0
          return this.calculateDepth(arr.flat())
      }
  }
}