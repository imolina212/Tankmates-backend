const db = require("../db/index.js");

// const getTanksList = async () => {
// 	try {
// 		const tanksList = await db.any("SELECT * FROM tanks");
// 		return tanksList;
// 	} catch (err) {
// 		return err;
// 	}
// };

const getTank = async (id) => {
	try {
		const tank = await db.one("SELECT * FROM tanks WHERE id=$1", id);
		return tank;
	} catch (err) {
		throw err;
	}
};

// const getTanksOfUserId = async (userId) => {
// 	try {
// 		const usersTanksList = await db.any(
// 			"SELECT * FROM tanks WHERE user_id=$1",
// 			userId
// 		);
// 		return usersTanksList;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

const getTanksOfUserId = async (userId) => {
	try {
		const tanksWithMates = await db.any(
			`
			SELECT
				tanks.id AS tank_id,
				user_id,
				tank_name,
				size,
				is_saltwater,
				waterchange_frequency,
				ARRAY_AGG(
					tankmate
				) AS tankmates
			FROM tanks
			LEFT JOIN (
				SELECT 
					tank_id,
					JSON_BUILD_OBJECT(
						'tankmate_id',species_in_tank.id,
						'tank_id', tank_id,
						'species_id',species_id,
						'species_name',species_name,
						'scientific_name',scientific_name,
						'origin_id',origin_id,
						'pic',pic,
						'species_type',species_type,
						'min_temp',min_temp,
						'max_temp',max_temp,
						'min_ph',min_ph,
						'max_ph',max_ph,
						'temperament',temperament,
						'max_length',max_length
					) AS tankmate
				FROM species
				JOIN species_in_tank
				ON species.id = species_in_tank.species_id
			) tankmates
			ON tanks.id = tankmates.tank_id
			WHERE user_id=$1
			GROUP BY tanks.id
			`,
			userId
		);
		return tanksWithMates;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	// getTanksList,
	getTank,
	// getAllTanksInfo,
	getTanksOfUserId,
};
