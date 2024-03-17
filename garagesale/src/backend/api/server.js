// Import necessary modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;
dotenv.config({ path: '/Users/henry/Desktop/garagesale/garagesale/.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Define the /api/signup POST route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body; // Extract username and password from the request body
  
  console.log('Signup attempt for:', username); // For demonstration, logging the username
  
  // Here, you'd typically insert the user's data into your database.
  // For simplicity, this example just sends a response back to the client.
  
  res.json({ message: 'Signup successful!' });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Garage $ale API');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
