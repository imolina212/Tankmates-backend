const db = require("../db/index.js");

const getPlantsList = async () => {
	try {
		const plantsList = await db.any("SELECT * FROM plants");
		return plantsList;
	} catch (err) {
		throw err;
	}
};

const getPlantById = async (id) => {
	try {
		const plant = await db.one("SELECT * FROM plants WHERE id=$1", id);
		return plant;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	getPlantsList,
	getPlantById,
};
