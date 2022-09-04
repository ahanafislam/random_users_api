const express = require('express');
const { getUsers, saveUser, updateUser, deleteUser, bulkUpdateUser, getRandomUser } = require('../../controllers/users');
const bulkUpdateValidate = require('../../middleware/bulkUpdateValidate');
const saveRequestValidator = require('../../middleware/saveRequestValidator');
const validateUserExistence = require('../../middleware/validateUserExistence');

const router = express.Router();

router.get('/all', getUsers); // For get all random user
router.get('/random', getRandomUser); // For get a random user
router.post('/save', saveRequestValidator, saveUser); // For save new user
router.patch('/update', validateUserExistence, updateUser); // For update random user data
router.patch('/bulk-update', bulkUpdateValidate, bulkUpdateUser); // For update multiple random user data
router.delete('/delete', validateUserExistence, deleteUser); // For deleting user

module.exports = router;
