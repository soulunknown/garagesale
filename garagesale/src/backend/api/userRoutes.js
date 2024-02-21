const bcrypt = require('bcrypt');
const pool = require('./db');

// User registration endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { name, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await pool.query(
      'INSERT INTO users (name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, lastName, username, email, hashedPassword]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
