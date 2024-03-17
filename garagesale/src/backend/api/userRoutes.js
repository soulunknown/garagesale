import express from 'express';
import bcrypt from 'bcrypt';
import dbPool from '../db/db.js'; // Make sure this path correctly leads to your db.js file

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Use "dbPool" here instead of "pool"
    const newUser = await dbPool.query(
      'INSERT INTO users (username, email, password_hash, created_at, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
      [username, email, hashedPassword] // Adjusted according to your database structure
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
