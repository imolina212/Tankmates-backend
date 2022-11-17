const db = require("../db/index.js");

const getAllTankMates = async (tankId) => {
	try {
		const allTankMates = await db.any(
			`
            SELECT
                species.id as species_id,
                species_name,
                scientific_name,
                origin_id,
                pic,
                species_type,
                min_temp,
                max_temp,
                min_ph,
                max_ph,
                temperament,
                max_length,
				ARRAY_AGG(species_in_tank.id) AS tankmate_ids
            FROM species_in_tank 
            JOIN species 
            ON species.id = species_in_tank.species_id
            WHERE tank_id=$1
            GROUP BY species.id
            ;
        `,
			tankId
		);
		return allTankMates;
	} catch (err) {
		return err;
	}
};

const getTankMate = async (tankId, speciesId) => {
	try {
		const tankMate = await db.any(
			"SELECT * FROM species_in_tank WHERE tanks_id=$1 AND species_id=$2",
			[tankId, speciesId]
		);
		return tankMate;
	} catch (err) {
		return err;
	}
};

const createTankMate = async (tankId, speciesId) => {
	try {
		const newTankMateId = await db.one(
			"INSERT INTO species_in_tank (tank_id, species_id) VALUES($1, $2) RETURNING id as tankmate_id",
			[tankId, speciesId]
		);
		const newTankMate = await db.one("SELECT * FROM species WHERE id=$1", [
			speciesId,
		]);
		newTankMate.tankmate_id = newTankMateId;
		newTankMate.tank_id = tankId;
		return newTankMate;
	} catch (error) {
		return error;
	}
};

const deleteTankMate = async (tankmateId) => {
	try {
		const deletedTankMate = await db.oneOrNone(
			`DELETE FROM species_in_tank WHERE id=$1`,
			tankmateId
		);
		return deletedTankMate;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllTankMates,
	getTankMate,
	createTankMate,
	deleteTankMate,
};
