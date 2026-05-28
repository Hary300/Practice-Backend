// // Import express to create a backend/server
// const express = require('express');

// // Import cors to allow requests from different origins
// const cors = require('cors');

// // Create express application
// const app = express();

// // Enable CORS for all origins
// app.use(cors());

// /*
// |--------------------------------------------------------------------------
// | Creating API
// |--------------------------------------------------------------------------
// */

// // API endpoint '/'
// // When client sends GET request to '/',
// // server responds with text "Backend 🚀"
// app.get('/', (req, res) => {
//   res.send('Backend 🚀');
// });

// // API endpoint '/todos'
// // When client sends GET request to '/todos',
// // server responds with JSON todo data
// app.get('/todos', (req, res) => {
//   res.json([
//     { id: 1, title: 'Learn HTML', completed: false },
//     { id: 2, title: 'Learn CSS', completed: true },
//     { id: 3, title: 'Learn JS', completed: true },
//     { id: 4, title: 'Learn API', completed: true },
//     { id: 5, title: 'Learn React', completed: true },
//   ]);
// });

// // Middleware to parse incoming JSON request body
// // Allows Express to read JSON data sent from the client
// // and makes it available in req.body
// app.use(express.json());

// app.post('/todos', (req, res) => {
//   const todo = req.body;
//   console.log('DATA RECEIVED: ', todo);

//   res.json({
//     message: 'Todo successfully added',
//     todo: todo,
//   });
// });

// // API endpoint '/register'
// // When client sends POST request to '/register',
// // server receives data from request body (req.body),
// // logs the incoming user data,
// // and responds with a success message + the received data
// app.post('/register', (req, res) => {
//   const user = req.body;
//   console.log('DATA MASUK: ', user);

//   res.json({
//     message: 'User berhasil didaftarkan',
//     data: user,
//   });
// });

// // Run server on port 3000
// app.listen(3000, () => {
//   console.log('Server runs in http://localhost:3000');
// });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// READ
app.get('/register', (req, res) => {
  res.json({ data: users });
});

// TOTAL
app.get('/register/count', (req, res) => {
  const count = users.length;

  res.json({
    total: count,
  });
});

// ADD
app.post('/register', (req, res) => {
  const user = req.body;
  console.log('POST MASUK:', req.body);
  users.push(user);

  res.json({
    message: 'success',
    user: user,
  });
});

// DELETE
app.delete('/register', (req, res) => {
  users.length = 0;

  res.json({
    message: 'All users deleted',
  });
});

const PORT = '3000';
app.listen(PORT, () => {
  console.log(`server runs in http://localhost:${PORT}`);
});
