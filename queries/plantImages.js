const db = require("../db/index.js");

const getPlantImagesById = async (plant_id) => {
	try {
		let plantImages = await db.any(
			"SELECT * FROM plant_images WHERE plant_id=$1",
			plant_id
		);
		return plantImages;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getPlantImagesById,
};
