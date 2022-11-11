const db = require("../db/index.js");

const getTankHistory = async (tankId) => {
	try {
		const tankHistory = await db.any(
			"SELECT * FROM tank_history WHERE tank_id=$1",
			tankId
		);
		return tankHistory;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getTankHistory };
