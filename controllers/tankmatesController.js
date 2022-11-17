const express = require("express");
const tankmates = express.Router();

const {
	getAllTankMates,
	getTankMate,
	createTankMate,
	deleteTankMate,
} = require("../queries/tankmates.js");

tankmates.get("/tank/:tankId", async (request, response) => {
	try {
		const allTankMates = await getAllTankMates(request.params.tankId);

		if (allTankMates[0]) {
			response.status(200).json(allTankMates);
		} else {
			response.status(500).json({ error: "No Tankmates Found" });
		}
	} catch (err) {
		console.log(err);
	}
});

tankmates.get("/:tanks_id", async (request, response) => {
	const { id } = request.params;
	const tankMate = await getTankMate(id);
	if (tankMate) {
		response.json(tankMate);
	} else {
		response.status(404).json({ error: "not found" });
	}
});

tankmates.post("/tank/:tankId", async (request, response) => {
	try {
		const tankMate = await createTankMate(
			request.params.tankId,
			request.body.speciesId
		);
		response.json(tankMate);
	} catch (error) {
		response.status(400).json({ error: error });
	}
});

tankmates.delete("/:tankmateId", async (request, response) => {
	try {
		const tankMate = await deleteTankMate(request.params.tankmateId);
		response.json(tankMate);
	} catch (error) {
		response.status(400).json({ error: error });
	}
});

module.exports = tankmates;
