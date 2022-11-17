const db = require("../db/index.js");

const getSpeciesList = async () => {
	try {
		const speciesList = await db.any("SELECT * FROM species");
		return speciesList;
	} catch (err) {
		return err;
	}
};

const getSingleSpecies = async (id) => {
	try {
		const singleSpecies = await db.one(
			"SELECT * FROM species WHERE id=$1",
			id
		);
		return singleSpecies;
	} catch (err) {
		throw err;
	}
};

const getSingleSpeciesByName = async (speciesName, filters = "") => {
	const searchTerm = `%${speciesName}%`;
	try {
		const singleSpecies = await db.any(
			`SELECT * FROM species
            WHERE LOWER(species_name) LIKE LOWER($1) 
			AND id NOT IN ($2:csv)
			LIMIT 5;`,
			[searchTerm, filters.split(",")]
		);
		return singleSpecies;
	} catch (err) {
		console.log("getSingleSpeciesByName", err);
		throw err;
	}
};

module.exports = {
	getSpeciesList,
	getSingleSpecies,
	getSingleSpeciesByName,
};
