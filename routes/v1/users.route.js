const express = require('express');
const { getUsers, saveUser } = require('../../controllers/users');

const router = express.Router();

// For get all random user
router.get('/all', getUsers);

// For save new user
router.post('/save', saveUser);

module.exports = router;
