const express = require("express");
const users = express.Router();

const {
	getAllUsers,
	getUser,
	loginUser,
	signupUser,
} = require("./../queries/users");

users.get("/", async (_, response) => {
	try {
		const allUsers = await getAllUsers();
		if (allUsers) {
			response.status(200).json(allUsers);
		} else {
			response.status(400).json({ err: "Users not found" });
		}
	} catch (err) {
		response.status(500).json(err);
	}
});

users.post("/login", async (request, response) => {
	console.log("req + res", request.body);
	const { email, password } = request.body;
	console.log("email =>", email);
	try {
		const user = await loginUser(email, password);
		if (user) {
			response.status(200).json(user);
		} else {
			response
				.status(400)
				.json({ err: "Email / Password combination not found" });
		}
	} catch (err) {
		response.status(500).json(err);
	}
});

users.get("/:userId", async (request, response) => {
	const { userId } = request.params;
	try {
		const user = await getUser(userId);
		if (user) {
			response.status(200).json(user);
		} else {
			response.status(400).json({ err: "User not found" });
		}
	} catch (err) {
		response.status(500).json(err);
	}
});

users.post("/signup", async (request, response) => {
	try {
		const userId = await signupUser(request.body);

		response.status(200).json(userId);
	} catch (err) {
		response.status(500).json(err);
	}
});

module.exports = users;
