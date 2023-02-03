const express = require("express");
const plantImages = express.Router();

const { getPlantImagesById } = require("../queries/plantImages.js");

plantImages.get("/:id", async (request, response) => {
	const plantId = request.params.id;
	console.log("plantId -->", plantId);
	try {
		const images = await getPlantImagesById(plantId);

		if (images) {
			response.status(200).json(images);
		} else {
			response.send("Plant not found");
		}
	} catch (error) {
		throw error;
	}
});

module.exports = plantImages;
