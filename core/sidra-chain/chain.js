import { Block } from './block';

class SidraChain {
  constructor() {
    this.blocks = [];
  }

  addBlock(block) {
    // Validate the block before adding it to the chain
    if (this.validateBlock(block)) {
      this.blocks.push(block);
    }
  }

  getLatestBlock() {
    // Return the latest block in the chain
    return this.blocks[this.blocks.length - 1];
  }

  getBlockByHash(hash) {
    // Retrieve a block by its hash
    return this.blocks.find((block) => block.hash === hash);
  }

  getBlockByIndex(index) {
    // Retrieve a block by its index
    return this.blocks[index];
  }

  validateBlock(block) {
    // Validate a block and ensure it meets the chain's requirements
    // Check block hash, transactions, and other relevant information
  }
}

export default SidraChain;
