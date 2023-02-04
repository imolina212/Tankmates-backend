const express = require("express");
const plantReviews = express.Router();

const {
	getPlantReviewsById,
	createPlantReview,
} = require("../queries/plantReviews.js");

plantReviews.get("/:id", async (request, response) => {
	try {
		const plantReviews = await getPlantReviewsById(request.params.id);

		if (plantReviews.length === 0) {
			response.status(500).json({ error: "No Plant Reviews Found" });
		} else {
			response.status(200).json(plantReviews);
		}
	} catch (error) {
		console.log(error);
	}
});

plantReviews.post("/plants/:plant_id/:id", async (_, response) => {
	try {
		const plantReview = await createPlantReview();
		return plantReview;
	} catch (error) {
		throw error;
	}
});

module.exports = plantReviews;
