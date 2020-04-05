const users = require("../data/index");
// adding to be able to use sample user in createUser
const sample = require("../data/sampleUser");

const listUsers = (req, res) => {
	res.json(users);
};
const showUser = (req, res) => {
	// find user by id
	let findUsers = users.find((user) => user.id == parseInt(req.params.id));
	{
		if (findUsers) {
			// return user
			res.send(findUsers);
		} else {
			// if id not found give status & message
			res.status(404).json(`Member id ${req.params.id} not found.`);
		}
	}
};

const createUser = (req, res) => {
	let counter = users.length + 1;
	// changes the counter on the sample object to increment instead of 99
	sample.id = counter;
	sample.email = "justdoingstuffforfun@haha.com";
	//creates the user from the sampleUser.js file
	users.push(sample);

	// returns new user
	res.json(users[users.length - 1]);
};

const updateUser = (req, res) => {
	//finds the user by id
	let update = users.find((user) => user.id === parseInt(req.params.id));
	// updating key values for selected user id using sampleUser file
	if (update) {
		update.name = sample.name;
		update.email = sample.email;
		update.phone = sample.phone;
		// return updated user
		res.send(update);
	} else {
		// if id not found give status & message
		res.status(404).json({
			msg: `User ${req.params.id} is not found.`
		});
	}
};

const deleteUser = (req, res) => {
	//find user to "delete"
	const findUser = users.find((user) => user.id === parseInt(req.params.id));
	if (findUser) {
		//set user to inactive (per se)
		findUser.isActive = "false";
		// send message the deletion has occurred
		res.json(`User ${req.params.id} has been deleted`);
	} else {
		// if id not found give status & message
		res
			.status(404)
			.json(`No member with the id of ${req.params.id} was found.`);
	}
};

module.exports = {
	listUsers,
	showUser,
	createUser,
	updateUser,
	deleteUser
};
