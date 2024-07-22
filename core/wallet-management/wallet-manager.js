// wallet-manager.js
import { Wallet } from 'wallet-sdk';
import { Blockchain } from 'blockchain-sdk';

class WalletManager {
  constructor() {
    this.wallet = new Wallet();
    this.blockchain = new Blockchain();
  }

  createWallet() {
    // Create a new wallet
    return this.wallet.create();
  }

  getWalletBalance(walletId) {
    // Get the balance of a wallet
    return this.wallet.getBalance(walletId);
  }

  sendTransaction(from, to, amount) {
    // Send a transaction from one wallet to another
    const transaction = this.wallet.createTransaction(from, to, amount);
    return this.blockchain.executeTransaction(transaction);
  }

  receiveTransaction(transaction) {
    // Receive a transaction into a wallet
    return this.wallet.receiveTransaction(transaction);
  }
}

export default WalletManager;
