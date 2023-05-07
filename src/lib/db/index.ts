import { Pool } from 'pg';
import { config } from './db.config';

export const db = new Pool(config);
