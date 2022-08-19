const pgp = require('pg-promise')();

require ("dotenv").config();

const databaseURL = process.env.DB_URL;

const cn = {
    connectionString : databaseURL,
    allowExitOnIdle: true,
    max: 30
}

const db = pgp(cn);

module.exports = db;