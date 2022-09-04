const { getUsersData, saveUsersData } = require('../utils/usersData.js');
const { v4: uuidv4 } = require('uuid');

const users = getUsersData();

// Get all random user list
module.exports.getUsers = (req, res) => {
    res.send(users);
}

// Get a single random user
module.exports.getRandomUser = (req, res) => {
    const randomUser = users[Math.floor(Math.random()*users.length)];
    res.send(randomUser);
}

// For add new user in users.json file
module.exports.saveUser = (req, res) => {
    const newUserData = req.body;
    users.push({id:uuidv4(), ...newUserData});
    saveUsersData(users);
    res.status(200).send({
        success: true,
        messages: `${newUserData.name} Successfully added in users list`,
        data: newUserData
    });
}

// For update the value from user.json file
module.exports.updateUser = (req, res) => {
    const {id, gender, name, contact, address, photoUrl} = req.body;

    users.forEach(element => {
        if(element.id === id) {
            if (gender) element.gender = gender;
            if (name) element.name = name;
            if (contact) element.contact = contact;
            if (address) element.address = address;
            if (photoUrl) element.photoUrl = photoUrl;
        }
    });

    saveUsersData(users);

    res.status(200).send({
        success: true,
        messages: `User with id:${id} Successfully updated`,
    });
}

// For update multiple user value from user.json file
module.exports.bulkUpdateUser = async(req, res) => {
    const updatedUsersDataList = req.body;

    updatedUsersDataList.forEach(updatedValue => {
        const {id, gender, name, contact, address, photoUrl} = updatedValue;
        
        users.forEach(user => {
            if(user.id === id) {
                if (gender) user.gender = gender;
                if (name) user.name = name;
                if (contact) user.contact = contact;
                if (address) user.address = address;
                if (photoUrl) user.photoUrl = photoUrl;
            }
        });
    });

    saveUsersData(users);

    res.status(200).send({
        success: true,
        messages: `Users data Successfully updated`,
    });
}

// For deleting user by id
module.exports.deleteUser = (req, res) => {
    const {id} = req.body;

    const newUserList = users.filter(user => user.id !== id);
    saveUsersData(newUserList);

    res.status(200).send({
        success: true,
        messages: `User with id:${id} Successfully deleted`,
    });
}
