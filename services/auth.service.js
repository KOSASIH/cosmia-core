// auth.service.js
import { cryptoUtils } from '../utils/crypto';
import { validationUtils } from '../utils/validation';

const authService = {
  async registerUser(username, password) {
    const { salt, hash } = cryptoUtils.hashPassword(password);
    // Save user to database
    return { username, salt, hash };
  },
  async loginUser(username, password) {
    // Retrieve user from database
    const user = await getUserByUsername(username);
    if (!user) {
      throw new Error('Invalid username or password');
    }
    const isValid = cryptoUtils.verifyPassword(password, user.salt, user.hash);
    if (!isValid) {
      throw new Error('Invalid username or password');
    }
    return user;
  },
};

export default authService;
