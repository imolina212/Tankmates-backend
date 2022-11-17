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

const createTankLog = async (tankLog) => {
	try {
		const newTankLog = await db.any(
			"INSERT INTO tank_history (tank_id, waterchange_date, gallons_changed, ph, ammonia, nitrite, nitrate) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[
				tankLog.tank_id,
				tankLog.waterchange_date,
				tankLog.gallons_changed,
				tankLog.ph,
				tankLog.ammonia,
				tankLog.nitrite,
				tankLog.nitrate,
			]
		);
		return newTankLog;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getTankHistory, createTankLog };
