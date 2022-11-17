const db = require("../db/index");

const getAllUsers = async () => {
	try {
		const allUsers = await db.any("SELECT * FROM users");
		return allUsers;
	} catch (err) {
		console.log(err);
	}
};

const getUser = async (id) => {
	try {
		const user = await db.any("SELECT * FROM users WHERE id=$1", id);
		return user;
	} catch (err) {
		console.log(err);
	}
};

const loginUser = async (email, password) => {
	try {
		const userId = await db.one(
			"SELECT id FROM users WHERE email=$1 AND user_password=$2",
			[email, password]
		);
		return userId;
	} catch (err) {
		console.log(err);
	}
};

const signupUser = async ({
	username,
	firstname,
	lastname,
	email,
	password,
}) => {
	try {
		const userId = await db.one(
			`INSERT INTO users (username, firstname, lastname, email, user_password)
			VALUES ($1, $2, $3, $4, $5)
			RETURNING id`,
			[username, firstname, lastname, email, password]
		);
		return userId;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAllUsers,
	getUser,
	loginUser,
	signupUser,
};
