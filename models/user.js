import { v4 as uuidv4 } from 'uuid';
import { hashPassword, verifyPassword } from '../utils/crypto';
import { generateAvatar } from '../utils/avatar';

class User {
  constructor({
    id = uuidv4(),
    username,
    email,
    password,
    firstName,
    lastName,
    bio,
    avatar,
    roles = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = hashPassword(password);
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.avatar = avatar || generateAvatar(username);
    this.roles = roles;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async authenticate(password) {
    return verifyPassword(password, this.password);
  }

  async updateProfile({
    username,
    email,
    password,
    firstName,
    lastName,
    bio,
    avatar,
  }) {
    if (username) this.username = username;
    if (email) this.email = email;
    if (password) this.password = hashPassword(password);
    if (firstName) this.firstName = firstName;
    if (lastName) this.lastName = lastName;
    if (bio) this.bio = bio;
    if (avatar) this.avatar = avatar;
    this.updatedAt = new Date();
  }

  async addRole(role) {
    if (!this.roles.includes(role)) this.roles.push(role);
  }

  async removeRole(role) {
    const index = this.roles.indexOf(role);
    if (index !== -1) this.roles.splice(index, 1);
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      bio: this.bio,
      avatar: this.avatar,
      roles: this.roles,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default User;
