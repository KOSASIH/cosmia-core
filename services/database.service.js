// database.service.js
import { Pool } from 'pg';

const databaseService = {
  async query(query, values) {
    const pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    });
    const result = await pool.query(query, values);
    return result.rows;
  },
};

export default databaseService;
