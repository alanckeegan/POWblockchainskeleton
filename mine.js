const Block = require('./models/Block');
const db = require('./db');


let isMining = false;

function startMining() {
    isMining = true;
    mine();
}

function stopMining() {
    isMining = false;
}

function mine() {
    if (!isMining) { return}
    newBlock = new Block()

    while(BigInt(newBlock.hash()) >= BigInt(db.blockchain.difficultyTarget())) {
      newBlock.nonce ++
    }
    db.blockchain.addBlock(newBlock)
    console.log(`Block # ${db.blockchain.blockHeight()} mined with`)
    console.log(`At nonce: ${newBlock.nonce}`)
    console.log(`At hash: ${newBlock.hash()}`)
    console.log(`At difficulty: ${'0x' + '0'.repeat(db.blockchain.difficulty)}`)
    console.log(`BlockSpeed: ${db.blockchain.blockSpeed}s`)

   mine()
}



module.exports = {
  startMining, 
  stopMining
};