const express = require("express");
const tankHistory = express.Router();

const { getTankHistory } = require("../queries/tankHistory");

tankHistory.get("/:tankId", async (request, response) => {
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

module.exports = tankHistory;
