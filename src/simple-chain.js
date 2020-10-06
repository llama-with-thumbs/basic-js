const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
      return this.chain.length 
  },
  addLink(value) {
      this.chain.push(value + '')
      return this
  },
  removeLink(position) {
      if(Number.isInteger(position) && position > 0 && position - 1 < this.getLength()) {
          this.chain.splice(position - 1, 1)
          return this
      } else { 
          this.clear()
          throw 'Noooooo!'
      }
  },
  reverseChain() {
      this.chain.reverse()
      return this
  },
  clear() {
      this.chain = []
  },
  finishChain() {
      const decor = '( ' + this.chain.join(' )~~( ') + ' )'
      this.clear()
      console.log('*** ',decor)
    return decor
  }
};

module.exports = chainMaker;
