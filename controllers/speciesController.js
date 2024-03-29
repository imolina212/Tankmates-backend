const express = require("express");
const species = express.Router();

const {
	getSpeciesList,
	getSingleSpecies,
	getSingleSpeciesByName,
} = require("../queries/species.js");

species.get("/", async (_, response) => {
	try {
		const speciesList = await getSpeciesList();

		if (speciesList.length === 0) {
			response.status(500).json({ error: "No Species Found" });
		} else {
			response.status(200).json(speciesList);
		}
	} catch (err) {
		console.log(err);
	}
});

species.get("/search/:name", async (request, response) => {
	const { name } = request.params;
	const { filters } = request.query;
	console.log("REQ PARAMS NAME", name, filters);
	try {
		const singleSpecies = await getSingleSpeciesByName(name, filters);

		if (singleSpecies) {
			response.json(singleSpecies);
		} else {
			response.send("Species not found");
		}
	} catch (err) {
		response.status(500).send("An error occurred");
	}
});

species.get("/:id", async (request, response) => {
	const speciesId = request.params.id;

	try {
		if (!/[0-9]/.test(speciesId)) {
			response.send("Species id must be a number");
		}

		const singleSpecies = await getSingleSpecies(speciesId);

		if (singleSpecies) {
			response.json(singleSpecies);
		} else {
			response.send("Species not found");
		}
	} catch (err) {
		response.status(500).send("An error occurred");
	}
});

module.exports = species;
