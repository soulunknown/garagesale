// Import necessary modules using ES Module syntax
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'; // Import the cors module
import userRoutes from './userRoutes.js'; 
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());



// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the userRoutes with CORS enabled
app.use('/api', userRoutes);

// Example route for the home page
app.get('/', (req, res) => {
  res.send('Garage $ale');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
