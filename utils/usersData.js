const fs = require('fs');

const dataPath = './users.json';

// For read data from user.json file
module.exports.getUsersData = () => {
    const usersData = fs.readFileSync(dataPath);
    return JSON.parse(usersData);
}

// For save data from user.json file
module.exports.saveUsersData = data => {
    const newUserData = JSON.stringify(data);
    fs.writeFileSync(dataPath, newUserData);
}
