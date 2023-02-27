const db = require("../db/index.js");

const getProductReviewsById = async (product_id) => {
	try {
		const productReviews = await db.any(
			"SELECT * FROM product_reviews WHERE product_id=$1",
			product_id
		);
		return productReviews;
	} catch (error) {
		throw error;
	}
};

const createProductReview = async (product_id, user_id) => {
	try {
		const newProductReview = await db.one(
			"INSERT INTO product_reviews (product_id, user_id, content, rating, title, username, email, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7, $8",
			[product_id, user_id]
		);
		return newProductReview;
	} catch (error) {
		throw error;
	}
};

getAverageProductRatingById = async (product_id) => {
	try {
		const productRating = await db.one(
			`SELECT AVG(rating)
			FROM product_reviews
			WHERE product_id = 1;`,
			product_id
		);
		console.log("productRating -->", productRating);
		return productRating;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getProductReviewsById,
	createProductReview,
};
