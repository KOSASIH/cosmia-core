import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: String,
  username: String,
  email: String,
  passwordHash: String,
  salt: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

class User {
  static async createUser(username, email, password) {
    // Create a new user
    const salt = await generateSalt();
    const passwordHash = await hashPassword(password, salt);
    const user = new User({ username, email, passwordHash, salt, role: 'user' });
    await user.save();
    return user;
  }

  static async getUserByUsername(username) {
    // Retrieve a user by username
    return User.findOne({ username });
  }

  static async getUserByEmail(email) {
    // Retrieve a user by email
    return User.findOne({ email });
  }

  async authenticate(password) {
    // Authenticate a user
    const passwordHash = await hashPassword(password, this.salt);
    return passwordHash === this.passwordHash;
  }
}

const User = model('User', userSchema);

export default User;
