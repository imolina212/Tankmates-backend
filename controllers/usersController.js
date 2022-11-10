const express = require("express");
const users = express.Router();

const { getAllUsers } = require("./../queries/users");

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

module.exports = users;
