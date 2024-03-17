import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL || '';

const sslConfig = process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : { rejectUnauthorized: false };

const pool = new Pool({
  connectionString: connectionString,
  ssl: process.env.NODE_ENV !== 'production' ? sslConfig : false,
});

pool.connect()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.error("Error connecting to the database:", err.stack));

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
