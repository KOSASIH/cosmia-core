import { v4 as uuidv4 } from 'uuid';
import { generateMessageId } from '../utils/message';

class Message {
  constructor({
    id = generateMessageId(),
    text,
    userId,
    conversationId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.text = text;
    this.userId = userId;
    this.conversationId = conversationId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async updateMessage(text) {
    this.text = text;
    this.updatedAt = new Date();
  }

  async deleteMessage() {
    // Implement message deletion logic here
  }

  toJSON() {
    return {
      id: this.id,
      text: this.text,
      userId: this.userId,
      conversationId: this.conversationId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default Message;
