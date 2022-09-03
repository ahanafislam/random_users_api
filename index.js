const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/v1/users.route.js');

const app = express();

const port = process.env.PORT || 5000;

// Middleware for use json data
app.use(bodyParser.json());

// Routes for users
app.use('/user', usersRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Random User API');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})