// ==========================================================================
// Practice 1
// ==========================================================================

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

// ==========================================================================
// Practice 2
// ==========================================================================

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const users = [];

// // READ
// app.get('/register', (req, res) => {
//   res.json({ data: users });
// });

// // TOTAL
// app.get('/register/count', (req, res) => {
//   const count = users.length;

//   res.json({
//     total: count,
//   });
// });

// // ADD
// app.post('/register', (req, res) => {
//   const user = req.body;
//   console.log('POST MASUK:', req.body);
//   users.push(user);

//   res.json({
//     message: 'success',
//     user: user,
//   });
// });

// // DELETE
// app.delete('/register', (req, res) => {
//   users.length = 0;

//   res.json({
//     message: 'All users deleted',
//   });
// });

// const PORT = '3000';
// app.listen(PORT, () => {
//   console.log(`server runs in http://localhost:${PORT}`);
// });

// ==========================================================================
// Practice 3
// ==========================================================================

// const express = require('express');
// const cors = require('cors');
// const { z } = require('zod');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const useSchema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
// });

// const user  = []

// function validate(schema) {
//   return (req, res, next) => {
//     const result = schema.safeParse(req.body);

//     if (!result.success) {
//       return res.status(400).json({
//         message: 'Validation error',
//         errors: result.error.issues,
//       });
//     }

//     req.body = result.data;
//     next();
//   };
// }

// app.post('/register', validate(useSchema), (req, res) => {
//   const data = req.body;

// users.push(data)

//   res.json({
//     message: 'User valid',
//     data: data,
//   });
// });

// const PORT = '3000';
// app.listen(PORT, () => {
//   console.log(`Sever runs in http://localhost:${PORT}`);
// });

// ==========================================================================
// Practice 4
// ==========================================================================

const express = require('express');
const cors = require('cors');
const { z } = require('zod');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

// using then
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('Connection error: ', err));

// using async - await
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Connection error: ', err);
  }
}

connectDb();

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: 'validation failed',
        error: result.error.issues,
      });
    }

    req.body = result.data;
    next();
  };
}

// CREATE
app.post('/users', validate(userSchema), async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      message: 'User created',
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error create user',
      error: err.message,
    });
  }
});

// READ
app.get('/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(201).json({
      message: 'All users',
      data: allUsers,
    });
  } catch (err) {
    console.log('Error to get all users: ', err);
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
});

// DELETE
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(201).json({
      message: 'User deleted',
    });
  } catch (err) {
    console.log('Error to delete: ', err);
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server runs in http://localhost:${process.env.PORT}`);
});
