const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Additional configuration might be required for production, like SSL
});

module.exports = pool;
