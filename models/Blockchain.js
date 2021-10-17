
const targetSpeed = 20

class Blockchain {
  constructor() {
    this.blocks = [];
    this.difficulty = 1;
    this.blockSpeed = null;
  }

  addBlock(block) {
    if(this.blockHeight()){
      block.previousBlock = this.blocks[this.blockHeight()-1]
      this.checkBlockSpeed(block)
      this.adjustDifficulty()
    }
    this.blocks.push(block)
  }

  blockHeight() {
    return this.blocks.length
  }

  difficultyTarget() {
    return("0x" + "0".repeat(this.difficulty) + "F".repeat(64-this.difficulty).toString());
  }

  checkBlockSpeed(newBlock) {
    this.blockSpeed = newBlock.timeStamp - newBlock.previousBlock.timeStamp
  }

  adjustDifficulty() {
    if(this.blockSpeed > targetSpeed && this.difficulty > 1) {
      this.difficulty -= 1
    }

    if(this.blockSpeed < targetSpeed) {
      this.difficulty += 1
    }
  }

}

module.exports = Blockchain