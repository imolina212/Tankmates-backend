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

const loginUser = async (email) => {
	try {
		const userId = await db.one(
			"SELECT id FROM users WHERE email=$1",
			email
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
};
