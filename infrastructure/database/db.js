import { MongoClient } from 'mongodb';
import { RedisClient } from 'redis';

class Database {
  constructor(mongoUrl, redisUrl) {
    this.mongoClient = new MongoClient(mongoUrl);
    this.redisClient = new RedisClient(redisUrl);
  }

  async connect() {
    // Connect to MongoDB and Redis
    await this.mongoClient.connect();
    await this.redisClient.connect();
  }

  async disconnect() {
    // Disconnect from MongoDB and Redis
    await this.mongoClient.close();
    await this.redisClient.quit();
  }

  async getMongoDB() {
    // Return the MongoDB client
    return this.mongoClient;
  }

  async getRedisClient() {
    // Return the Redis client
    return this.redisClient;
  }
}

export default Database;
