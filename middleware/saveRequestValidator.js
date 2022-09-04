// Validate user before save
const saveRequestValidator = (req, res, next) => {
    const {gender, name, contact, address, photoUrl} = req.body;

    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            success: false,
            messages: `Sorry you can not save an empty object`,
        })
    }

    if(!gender) {
        return res.status(400).send({
            success: false,
            messages: `Sorry gender id required`,
        })
    }

    if(!name) {
        return res.status(400).send({
            success: false,
            messages: `Sorry name id required`,
        })
    }

    if(!contact) {
        return res.status(400).send({
            success: false,
            messages: `Sorry contact id required`,
        })
    }

    if(!address) {
        return res.status(400).send({
            success: false,
            messages: `Sorry address id required`,
        })
    }

    if(!photoUrl) {
        return res.status(400).send({
            success: false,
            messages: `Sorry photoUrl id required`,
        })
    }

    next();
}

module.exports = saveRequestValidator;
