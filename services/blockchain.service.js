// blockchain.js
import * as Web3 from 'web3';

const blockchainUtils = {
  createContract: (abi, bytecode) => {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'));
    const contract = new web3.eth.Contract(abi, bytecode);
    return contract;
  },
  deployContract: (contract) => {
    return contract.deploy({
      data: '0x' + contract.bytecode,
    });
  },
};

export default blockchainUtils;
