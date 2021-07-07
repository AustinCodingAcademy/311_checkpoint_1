const users = require("../data/index");
const sampleUser = require("../data/sampleUser");


const userCounter = users.length; 

const listUsers = (req, res) => {
    res.json(users);
}

const showUsers = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find(user => user.id === Number(id));
    if (id > users.length-1 || id < users.length-1) {
        res.statusCode = 404;
        res.send('404: Resource could not be found.');
    } else {
        res.json(foundUser);
    }
}

const createUser = (req, res) => {
    let newUser = {
        "id": userCounter,
        "name": sampleUser.name,
        "username": sampleUser.username,
        "email": sampleUser.email,
        "address":{
        "street": sampleUser.address.street,
        "suite": sampleUser.address.suite,
        "city": sampleUser.address.city,
        "zipcode": sampleUser.address.zipcode,
        "geo": {
            "lat": sampleUser.address.geo.lat,
            "lng": sampleUser.address.geo.lng
        }
        },
        "phone": sampleUser.phone,
        "website": sampleUser.website,
        "company": {
        "name": sampleUser.company.name,
        "catchPhrase": sampleUser.company.catchPhrase,
        "bs": sampleUser.company.bs
        }
    }

    users.push(newUser);
}

const updateUser = (req, res) => {
        const id = req.params.id;
        if (id > users.length-1 || id < users.length-1) {
            res.statusCode = 404;
            res.send('404: Resource could not be found.');
        } else {
            res.json(users[id].username = req.body.username);
        }
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    if (id > users.length-1 || id < users.length-1) {
        res.statusCode = 404;
        res.send('404: Resource could not be found.');
    } else {
        users.splice((id-1), 1);
        res.send(`1 User deleted`);
    }
}

module.exports = {
    listUsers,
    showUsers,
    createUser,
    updateUser,
    deleteUser
}