import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

async function authenticate(username, password) {
  const userAccount = web3.eth.accounts.privateKeyToAccount(password);
  const userAddress = userAccount.address;

  // Check if the user exists on the blockchain
  const userExists = await web3.eth.accounts.exists(userAddress);
  if (!userExists) {
    throw new Error('User does not exist');
  }

  // Verify the user's password
  const passwordHash = web3.utils.sha3(password);
  const storedPasswordHash = await web3.eth.accounts.getPasswordHash(userAddress);
  if (passwordHash !== storedPasswordHash) {
    throw new Error('Invalid password');
  }

  // Authenticate the user
  return true;
}

export default authenticate;
