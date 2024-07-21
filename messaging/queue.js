import { Message } from './message';
import { RedisClient } from 'redis';

class MessageQueue {
  constructor(redisUrl) {
    this.redisClient = new RedisClient(redisUrl);
    this.queueName = 'cosmia:messages';
  }

  async enqueue(message) {
    // Add a message to the queue
    await this.redisClient.lpush(this.queueName, message.toJSON());
  }

  async dequeue() {
    // Retrieve and remove the next message from the queue
    const messageJSON = await this.redisClient.rpop(this.queueName);
    if (messageJSON) {
      return new Message(messageJSON);
    }
    return null;
  }

  async size() {
    // Return the number of messages in the queue
    return await this.redisClient.llen(this.queueName);
  }

  async peek() {
    // Return the next message in the queue without removing it
    const messageJSON = await this.redisClient.lindex(this.queueName, 0);
    if (messageJSON) {
      return new Message(messageJSON);
    }
    return null;
  }
}

export default MessageQueue;
