// Import express to create a backend/server
const express = require('express');

// Import cors to allow requests from different origins
const cors = require('cors');

// Create express application
const app = express();

// Enable CORS for all origins
app.use(cors());

/*
|--------------------------------------------------------------------------
| Creating API
|--------------------------------------------------------------------------
*/

// API endpoint '/'
// When client sends GET request to '/',
// server responds with text "Backend 🚀"
app.get('/', (req, res) => {
  res.send('Backend 🚀');
});

// API endpoint '/todos'
// When client sends GET request to '/todos',
// server responds with JSON todo data
app.get('/todos', (req, res) => {
  res.json([
    { id: 1, title: 'Learn HTML', completed: false },
    { id: 2, title: 'Learn CSS', completed: true },
    { id: 3, title: 'Learn JS', completed: true },
    { id: 4, title: 'Learn API', completed: true },
    { id: 5, title: 'Learn React', completed: true },
  ]);
});

// Run server on port 3000
app.listen(3000, () => {
  console.log('Server runs in http://localhost:3000');
});
