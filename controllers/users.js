const { getUsersData, saveUsersData } = require('../utils/usersData.js');

const users = getUsersData();

// Get all random user list
module.exports.getUsers = (req, res) => {
    res.send(users);
}

// For add new user in users.json file
module.exports.saveUser = (req, res) => {
    const newUserData = req.body;
    users.push(newUserData);
    saveUsersData(users);
    res.send(users);
}
