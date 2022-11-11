const express = require("express");
const users = express.Router();

const { getAllUsers, getUser, loginUser } = require("./../queries/users");

const tanksController = require("./tanksController");
users.use("/:userId/tanks", tanksController);

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
	const { email } = request.body;
	console.log("email =>", email);
	try {
		const user = await loginUser(email);
		if (user) {
			response.status(200).json(user);
		} else {
			console.log("user", user);
			response.status(400).json({ err: "User not found" });
		}
	} catch (err) {
		console.log(err);
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

module.exports = users;
