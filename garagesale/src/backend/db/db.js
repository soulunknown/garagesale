// db.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env'});

// Log environment variables to confirm they are loaded correctly
console.log('Database Host:', process.env.DB_HOST);
console.log('Database Port:', process.env.DB_PORT);

const { Pool } = pg;
const dbPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: false // This should only be used in development or with a valid SSL config
  } : undefined,
});

export default dbPool;
