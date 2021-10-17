const sha256 = require('crypto-js/sha256')

class Block {
  constructor() {
    this.timeStamp = Date.now();
    this.previousBlock = {};
    this.nonce = 0;
  }

  hash() {
    return '0x' + sha256(this.timestamp + "" + this.nonce).toString()
  }
}

module.exports = Block;