const { response } = require("express");
const express = require("express");
const tankLogs = express.Router({ mergeParams: true });

const { getTankHistory, createTankLog } = require("../queries/tankHistory");

tankLogs.get("/:tankId", async (request, response) => {
	const { tankId } = request.params;

	try {
		const tankHistoryInfo = await getTankHistory(tankId);

		if (tankHistoryInfo) {
			response.status(200).json(tankHistoryInfo);
		} else {
			response.status(404).json({ error: "Tank history id not found" });
		}
	} catch (error) {
		console.log(error);
		response.status(500).json(error);
	}
});

tankLogs.post("/:tankId", async (request, response) => {
	const { tankId } = request.params;

	try {
		const newTankLog = await createTankLog(tankId);
		response.status(200).json(newTankLog);
	} catch (err) {
		console.log(err);
	}
});

module.exports = tankLogs;
