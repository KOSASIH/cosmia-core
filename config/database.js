// database.js
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from './constants';

const database = {
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  name: DB_NAME,
  dialect: 'postgres',
};

export default database;
