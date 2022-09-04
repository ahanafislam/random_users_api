const { getUsersData } = require("../utils/usersData");

// Validate user before save
const saveRequestValidator = (req, res, next) => {
    const userData = req.body;
    const {id, gender, name, contact, address, photoUrl} = userData;
    const users = getUsersData();

    const user = users.find(user => user.id === id);

    if(user) {
        return res.status(400).send({
            success: false,
            messages: `Sorry id with ${id} user already exists.`,
        })
    }

    if(Object.keys(userData).length === 0) {
        return res.status(400).send({
            success: false,
            messages: `Sorry you can not save an empty object`,
        })
    }

    if (id) {
        if(typeof id !== 'string') {
            return res.status(400).send({
                success: false,
                messages: `Sorry only string type id is acceptable`,
            })
        }
    }

    if(!gender) {
        return res.status(400).send({
            success: false,
            messages: `Sorry gender is required`,
        })
    }

    if(!name) {
        return res.status(400).send({
            success: false,
            messages: `Sorry name is required`,
        })
    }

    if(!contact) {
        return res.status(400).send({
            success: false,
            messages: `Sorry contact is required`,
        })
    }

    if(!address) {
        return res.status(400).send({
            success: false,
            messages: `Sorry address is required`,
        })
    }

    if(!photoUrl) {
        return res.status(400).send({
            success: false,
            messages: `Sorry photoUrl is required`,
        })
    }

    next();
}

module.exports = saveRequestValidator;
