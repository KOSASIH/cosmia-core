import { PQCrypto } from 'pqcrypto';

const pqCrypto = new PQCrypto();

async function encrypt(data) {
  const publicKey = await pqCrypto.generateKeyPair();
  const encryptedData = await pqCrypto.encrypt(data, publicKey);
  return encryptedData;
}

async function decrypt(encryptedData) {
  const privateKey = await pqCrypto.generateKeyPair();
  const decryptedData = await pqCrypto.decrypt(encryptedData, privateKey);
  return decryptedData;
}

export { encrypt, decrypt };
