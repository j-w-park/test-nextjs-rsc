import type { PoolConfig } from 'pg';

export default {
  db: {
    database: 'postgres',
    host: 'localhost',
    password: 'test',
    port: 5432,
    user: 'postgres',
  } as PoolConfig,
} as const;
