const db = require("../db/index.js");

const getAllTankMates = async () => {
    try {
        const allTankMates = await db.any("SELECT * FROM species_in_tank");
        return allTankMates;
    } catch (err) {
        return err;
    }
}

const getTankMate = async (id) => {
    try {
        const tankMate = await db.any("SELECT * FROM species_in_tank WHERE id=$1", id);
        return tankMate;
    } catch (err) {
        return err;
    }
}

const createTankMate = async (tankMate) => {
    try {
        const newTankMate = await db.one(
            "INSERT INTO species_in_tank (tank_id, species_id) VALUES($1, $2) RETURNING *",
            [tankMate.tank_id, tankMate.species_id]
        );
        console.log(newTankMate);
        return newTankMate;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllTankMates, getTankMate, createTankMate
}