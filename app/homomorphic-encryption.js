import * as seal from 'seal';

class HomomorphicEncryption {
  constructor() {
    this.context = new seal.SEALContext();
    this.keyGenerator = new seal.KeyGenerator(this.context);
    this.publicKey = this.keyGenerator.createPublicKey();
    this.secretKey = this.keyGenerator.createSecretKey();
  }

  async encrypt(data) {
    const encryptedData = this.publicKey.encrypt(data);
    return encryptedData;
  }

  async decrypt(encryptedData) {
    const decryptedData = this.secretKey.decrypt(encryptedData);
    return decryptedData;
  }

  async evaluate(expression, encryptedData) {
    const evaluatedResult = this.context.evaluate(expression, encryptedData);
    return evaluatedResult;
  }
}

export default HomomorphicEncryption;
