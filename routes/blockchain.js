import express from 'express';
import Web3 from 'web3';
import { abi, bytecode } from '../contracts/MyContract';

const router = express.Router();
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

router.post('/deploy-contract', async (req, res) => {
  const { from, gas, gasPrice } = req.body;
  const contract = new web3.eth.Contract(abi);
  const deployTx = contract.deploy({ data: bytecode, arguments: [] });
  const txCount = await web3.eth.getTransactionCount(from);
  const tx = {
    from,
    gas,
    gasPrice,
    data: deployTx.encodeABI(),
    nonce: web3.utils.toHex(txCount),
  };
  const signedTx = await web3.eth.accounts.signTransaction(tx, '0xYOUR_PRIVATE_KEY');
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  res.json({ contractAddress: receipt.contractAddress });
});

router.post('/interact-contract', async (req, res) => {
  const { contractAddress, functionName, args } = req.body;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const result = await contract.methods[functionName](...args).call();
  res.json({ result });
});

export default router;
