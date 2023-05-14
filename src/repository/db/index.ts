import { Pool } from 'pg';
import credentials from '../.credentials';

export const db = new Pool(credentials.db);
