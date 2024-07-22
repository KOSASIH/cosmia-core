import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid';

class BlockchainService {
  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));
    this.contracts = {};
  }

  async deployContract(contractCode) {
    const contractId = uuidv4();
    const contract = await this.web3.eth.compile(contractCode);
    await this.web3.eth.deployContract(contract, {
      from: '0x1234567890abcdef',
      gas: '2000000',
    });
    this.contracts[contractId] = contract;
    return contractId;
  }

  async invokeContractFunction(contractId, functionName, args) {
    const contract = this.contracts[contractId];
    if (!contract) {
      throw new Error('Contract not found');
    }
    const result = await contract.methods[functionName](...args).call();
    return result;
  }

  async getBlockNumber() {
    return await this.web3.eth.getBlockNumber();
  }

  async getTransactionCount(address) {
    return await this.web3.eth.getTransactionCount(address);
  }
}

export default BlockchainService;
