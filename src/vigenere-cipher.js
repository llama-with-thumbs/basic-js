const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    mode || mode == undefined ? this.mode = true : this.mode = false
  }
  encrypt(messege, key) {
    let encripted = messege.toUpperCase().split('')
    let keyUpper = key.toUpperCase()
    let iterator = 0
    let m
    let k
    let c
    encripted.forEach((element, index, array) => {
      if (element.match(/[A-Z]/)) {
        m = element.charCodeAt() - 65
        k = keyUpper[iterator].charCodeAt() - 65
        m + k >= 26 ? c = (m + k - 26) + 65 : c = (m + k) + 65
        array[index] = String.fromCharCode(c)
        iterator >= (keyUpper.length - 1) ? iterator = 0 : iterator++
      }
    });
    return this.mode ? encripted.join('') : encripted.reverse().join('')
  }
  decrypt(messege, key) {
    let decripted = messege.toUpperCase().split('')
    let keyUpper = key.toUpperCase()
    let iterator = 0
    let m
    let k
    let c
    decripted.forEach((element, index, array) => {
      if (element.match(/[A-Z]/)) {
        m = element.charCodeAt() - 65
        k = keyUpper[iterator].charCodeAt() - 65
        m - k < 0 ? c = (m - k + 26) + 65 : c = (m - k) + 65
        // console.log(m - k, String.fromCharCode(m + 65), m + 65, String.fromCharCode(k + 65), k + 65, String.fromCharCode(c), c)
        array[index] = String.fromCharCode(c)
        iterator >= (keyUpper.length - 1) ? iterator = 0 : iterator++
      }
    });
    return this.mode ? decripted.join('') : decripted.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
