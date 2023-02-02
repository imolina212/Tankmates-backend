const express = require("express");
const plants = express.Router();

const { getPlantsList, getPlantById } = require("../queries/plants.js");

plants.get("/", async (_, response) => {
	try {
		const plantsList = await getPlantsList();

		if (plantsList.length === 0) {
			response.status(500).json({ error: "No Plants Found" });
		} else {
			response.status(200).json(plantsList);
		}
	} catch (err) {
		throw err;
	}
});

plants.get("/:id", async (request, response) => {
	const plantId = request.params.id;

	try {
		const plant = await getPlantById(plantId);

		if (plant) {
			response.status(200).json(plant);
		} else {
			response.send("Product not found");
		}
	} catch (err) {
		throw err;
	}
});

module.exports = plants;
