const express = require('express');
const { getUsers, saveUser, updateUser } = require('../../controllers/users');

const router = express.Router();

// For get all random user
router.get('/all', getUsers);

// For save new user
router.post('/save', saveUser);

// For update random user data
router.patch('/update', updateUser);

module.exports = router;
