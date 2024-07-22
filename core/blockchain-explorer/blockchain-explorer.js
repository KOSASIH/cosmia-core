// blockchain-explorer.js
import { BlockchainExplorer } from 'blockchain-explorer-sdk';
import { Blockchain } from 'blockchain-sdk';

class BlockchainExplorer {
  constructor() {
    this.blockchainExplorer = new BlockchainExplorer();
    this.blockchain = new Blockchain();
  }

  exploreBlockchain() {
    // Explore a blockchain network using advanced visualization tools
    return this.blockchainExplorer.explore();
  }

  getBlockInfo(blockHash) {
    // Get information about a block on a blockchain network
    return this.blockchainExplorer.getBlockInfo(blockHash);
  }

  getTransactionInfo(transactionHash) {
    // Get information about a transaction on a blockchain network
    return this.blockchainExplorer.getTransactionInfo(transactionHash);
  }
}

export default BlockchainExplorer;
