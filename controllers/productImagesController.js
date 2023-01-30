const express = require("express");
const productImages = express.Router();

const { getProductImagesById } = require("../queries/productImages.js");

productImages.get("/:id", async (request, response) => {
	const productId = request.params.id;
	try {
		const images = await getProductImagesById(productId);

		if (images) {
			response.status(200).json(images);
		} else {
			response.send("Product not found");
		}
	} catch (error) {
		throw error;
	}
});

module.exports = productImages;
