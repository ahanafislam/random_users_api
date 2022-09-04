const bulkUpdateValidate = (req, res, next) => {
    updatedValue = req.body;

    if(!Array.isArray(updatedValue)) {
        return res.status(400).send({
            success: false,
            messages: `Please send data by array of object`,
        })
    }

    next();
}

module.exports = bulkUpdateValidate;
