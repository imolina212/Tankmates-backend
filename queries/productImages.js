const db = require("../db/index.js");

const getProductImagesById = async (product_id) => {
	try {
		let productImages = await db.any(
			"SELECT * FROM product_images WHERE product_id=$1",
			product_id
		);
		return productImages;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getProductImagesById,
};
