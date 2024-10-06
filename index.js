const express = require('express');
const app = express();

// Create a router
const usersRouter = express.Router();

// Define routes for the router
usersRouter.get('/', (req, res) => {
  res.send('List of users');
});

usersRouter.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User details for ID: ${userId}`);
});

// Mount the router to a specific path
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});