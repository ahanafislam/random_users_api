const { getUsersData, saveUsersData } = require('../utils/usersData.js');
const { v4: uuidv4 } = require('uuid');

const users = getUsersData();

// Get all random user list
module.exports.getUsers = (req, res) => {
    res.send(users);
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
    const user = users.find(user => user.id === id);

    if(!user) {
        return res.status(400).send({
            success: false,
            messages: `Sorry ${id} is not a valid user id.`,
        })
    }

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

// For deleting user by id
module.exports.deleteUser = (req, res) => {
    const {id} = req.body;
    const user = users.find(user => user.id === id);

    if(!user) {
        return res.status(400).send({
            success: false,
            messages: `Sorry ${id} is not a valid user id.`,
        })
    }
    
    const newUserList = users.filter(user => user.id !== id);
    saveUsersData(newUserList);

    res.status(200).send({
        success: true,
        messages: `User with id:${id} Successfully deleted`,
    });
}
