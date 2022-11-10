const db = require("../db/index");

const getAllUsers = async () => {
	try {
		const allUsers = await db.any("SELECT * FROM users");
		return allUsers;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAllUsers,
};
