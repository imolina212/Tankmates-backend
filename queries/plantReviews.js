const db = require("../db/index.js");

const getPlantReviewsById = async (plant_id) => {
	try {
		const plantReviews = await db.any(
			"SELECT * FROM plant_reviews WHERE plant_id=$1",
			plant_id
		);
		return plantReviews;
	} catch (error) {
		throw error;
	}
};

const createPlantReview = async (plant_id, user_id) => {
	try {
		const newPlantReview = await db.one(
			"INSERT INTO plant_reviews (plant_id, user_id, content, rating, title, username, email, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7, $8",
			[plant_id, user_id]
		);
		return newPlantReview;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getPlantReviewsById,
	createPlantReview,
};
