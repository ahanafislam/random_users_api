const { getUsersData } = require("../utils/usersData");

// For checking the user is exist or not
const validateUserExistence = (req, res, next) => {
    const users = getUsersData();
    const {id} = req.body;

    if(typeof id !== 'string') {
        return res.status(400).send({
            success: false,
            messages: `Sorry only string type id is acceptable`,
        })
    }

    const user = users.find(user => user.id === id);

    if(!user) {
        return res.status(400).send({
            success: false,
            messages: `Sorry ${id} is not a valid user id.`,
        })
    }

    next();
}

module.exports = validateUserExistence;
