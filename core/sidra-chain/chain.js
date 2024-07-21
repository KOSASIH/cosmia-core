import { SidraProtocol } from './protocol';
import { Block } from './block';

class SidraChain {
  constructor() {
    this.chain = [];
    this.currentBlock = null;
    this.protocol = new SidraProtocol(this, new SidraNode());
  }

  init() {
    // Initialize the chain with a genesis block
  }

  createBlock(transactions) {
    const block = new Block(transactions, this.currentBlock.hash);
    this.protocol.createBlock(block);
  }

  processTransaction(transaction) {
    this.protocol.processTransaction(transaction);
  }
}

export default SidraChain;
