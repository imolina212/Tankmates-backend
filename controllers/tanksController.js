const express = require("express");
const tanks = express.Router();

const {
	// getTanksList,
	getTank,
	// getAllTanksInfo,
	getTanksOfUserId,
} = require("../queries/tanks.js");
// const { getSingleSpecies } = require("../queries/species.js");
const {
	getAllTankMates,
	// createTankMate,
	// getTankMate,
} = require("../queries/tankmates.js");
const { getTankHistory } = require("../queries/tankHistory.js");

// users/:userId/tanks
const tankLogsController = require("./tankLogsController");
tanks.use("/:tankId/tanklogs", tankLogsController);

tanks.get("/user/:userId", async (request, response) => {
	try {
		console.log("TANK REQ PARAMS", request.params);
		const tanksList = await getTanksOfUserId(request.params.userId);
		console.log("list of tanks", tanksList);

		if (tanksList) {
			response.status(200).json(tanksList);
		} else {
			response.status(500).json({ err: "No Tanks Found" });
		}
	} catch (err) {
		console.log(err);
		response.status(500).json(err);
	}
});

tanks.get("/:tankId", async (request, response) => {
	const { tankId } = request.params;

	try {
		console.log("/:tankId GET ROUTE TANK ID", tankId);
		if (!/[0-9]/.test(tankId)) {
			response.send("Tank id must be a number");
		}

		const tank = await getTank(tankId);

		if (tank) {
			// tank.tankmates = await getAllTankMates(tankId);
			// tank.history = await getTankHistory(tankId);
			response.json(tank);
		} else {
			response.send("Tank not found");
		}
	} catch (err) {
		console.log(err);
		response.status(500).json(err);
	}
});

// tanks.get("/:tankId/tankmates", async (request, response) => {
// 	const { tankId } = request.params;
// 	try {
// 		const allTankMates = await getAllTankMates(tankId);

// 		if (allTankMates[0]) {
// 			response.status(200).json(allTankMates);
// 		} else {
// 			response.status(500).json({ error: "No Tankmates Found" });
// 		}
// 	} catch (err) {
// 		console.log(err);
// 		response.status(500).json(err);
// 	}
// });

// tanks.post("/:tankId/tankmates", async (request, response) => {
// 	const { tankId } = request.params;
// 	const { speciesId } = request.body;

// 	try {
// 		if (tankId && speciesId) {
// 			const tankMate = await createTankMate(tankId, speciesId);

// 			response.status(200).json(tankMate);
// 		} else {
// 			response.status(400).json({ err: "tankmate not created" });
// 		}
// 	} catch (err) {
// 		console.log(err);
// 		response.status(500).json(err);
// 	}
// });

module.exports = tanks;
