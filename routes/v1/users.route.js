const express = require('express');
const { getUsers, saveUser, updateUser, deleteUser, bulkUpdateUser } = require('../../controllers/users');
const saveRequestValidator = require('../../middleware/saveRequestValidator');
const validateUserExistence = require('../../middleware/validateUserExistence');

const router = express.Router();

router.get('/all', getUsers); // For get all random user
router.post('/save', saveRequestValidator, saveUser); // For save new user
router.patch('/update', validateUserExistence, updateUser); // For update random user data
router.patch('/bulk-update', bulkUpdateUser); // For update multiple random user data
router.delete('/delete', validateUserExistence, deleteUser); // For deleting user

module.exports = router;
