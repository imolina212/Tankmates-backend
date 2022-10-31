const db = require("../db/index.js");

const getTanksList = async () => {
    try {
        const tanksList = await db.any("SELECT * FROM tanks");
        return tanksList;
    } catch (err) {
        return err;
    }
}

const getTank = async (id) => {
    try {
        const tank = await db.one("SELECT * FROM tanks WHERE id=$1", id);
        return tank;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getTanksList,
    getTank,
}