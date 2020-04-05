const users = require("../data/index");
// const sample = require("../data/sampleUser");

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
	let newUser = {
		id: counter,
		name: "Brett Smith",
		username: "brsmith",
		email: "brsmith@june.biz",
		address: {
			street: "Roger Ave",
			suite: "Apt. 294",
			city: "Austin",
			zipcode: "78758",
			geo: {
				lat: "-37.3159",
				lng: "81.1496"
			}
		},
		phone: "1-786-244-8273 x2095",
		website: "brett.org",
		company: {
			name: "Smith-Crona LLC",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		}
	};
	// adds new user
	users.push(newUser);
	// returns new user
	res.json(users[users.length - 1]);
};

const updateUser = (req, res) => {
	// find the id

	const update = users.find((user) => user.id == parseInt(req.params.id));
	// if found change the name
	if (update) {
		// find the id & change the name
		users.find((user) => user.id == parseInt(req.params.id)).name =
			req.body.name;
		// send back the updated user
		res.send(update);
	} else {
		// if id not found give status & message
		res.status(404).json(`Member id ${req.params.id} not found.`);
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
