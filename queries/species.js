const db = require("../db/index.js");

const getSpeciesList = async () => {
    try {
        const speciesList = await db.any("SELECT * FROM species");
        return speciesList;

    } catch (err) {
        return err;
    }
}

const getSingleSpecies = async (id) => {
    try {
        const singleSpecies = await db.one("SELECT * FROM species WHERE id=$1", id);
        return singleSpecies;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getSpeciesList,
    getSingleSpecies,
}