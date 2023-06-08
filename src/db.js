import { createConnection } from 'mysql2/promise';
import { DATABASE_URL } from './config.js';

export const client = await createConnection(DATABASE_URL);
