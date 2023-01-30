const express = require("express");
const productReviews = express.Router();

const {
	getProductReviewsById,
	createProductReview,
} = require("../queries/productReviews.js");

productReviews.get("/:id", async (request, response) => {
	try {
		const allProductReviews = await getProductReviewsById(
			request.params.id
		);

		if (allProductReviews.length === 0) {
			response.status(500).json({ error: "No Product Reviews Found" });
		} else {
			response.status(200).json(allProductReviews);
		}
	} catch (error) {
		console.log(error);
	}
});

productReviews.post("/products/:product_id/:id", async (_, response) => {
	try {
		const productReview = await createProductReview();
	} catch (error) {
		throw error;
	}
});

module.exports = productReviews;
