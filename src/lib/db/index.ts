import { Pool } from 'pg';
import { config } from './db.config';

export const db = new Pool(config);

export const initializeDB = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `);
};
