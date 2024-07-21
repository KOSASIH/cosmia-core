import { createHash } from 'crypto';
import { randomBytes } from 'crypto';
import { scrypt } from 'scrypt-js';
import { ed25519 } from 'ed25519';

const MESSAGE_ENCRYPTION_KEY = process.env.MESSAGE_ENCRYPTION_KEY;
const KEY_DERIVATION_SALT = process.env.KEY_DERIVATION_SALT;

class Crypto {
  static async deriveKey(password) {
    // Derive a key from a password using scrypt
    const derivedKey = await scrypt(password, KEY_DERIVATION_SALT, 16384, 8, 1);
    return derivedKey.toString('hex');
  }

  static async encrypt(data, key) {
    // Encrypt data using AES-256-GCM
    const iv = randomBytes(12);
    const cipher = createCipher('aes-256-gcm', key);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  }

  static async decrypt(encrypted, key) {
    // Decrypt data using AES-256-GCM
    const [ivHex, encryptedHex] = encrypted.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedBuffer = Buffer.from(encryptedHex, 'hex');
    const decipher = createDecipher('aes-256-gcm', key);
    decipher.setAuthTag(encryptedBuffer.slice(-16));
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer.slice(0, -16)), decipher.final()]);
    return decrypted.toString();
  }

  static async sign(data, privateKey) {
    // Sign data using Ed25519
    const signature = ed25519.sign(data, privateKey);
    return signature.toString('hex');
  }

  static async verify(data, signature, publicKey) {
    // Verify a signature using Ed25519
    return ed25519.verify(data, signature, publicKey);
  }

  static async hash(data) {
    // Hash data using SHA-512
    const hash = createHash('sha512');
    hash.update(data);
    return hash.digest('hex');
  }
}

export default Crypto;
