let users = [
    {
        id: 1,
        gender: 'Male',
        name: "John Doe",
        contact: "+8801740652266",
        address: "Dhaka, Bangladesh",
        photoUrl: "www.photourl.com"
    },
];

module.exports.getUsers = (req, res) => {
    res.send(users);
}
