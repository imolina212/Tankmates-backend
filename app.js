const express = require('express');
const cors = require('cors');

const app = express();

const speciesController = require('./controllers/speciesController');
const productsController = require('./controllers/productsController');
const tanksController = require('./controllers/tanksController');
const tankmatesController = require('./controllers/tankmatesController');

app.use(cors());
app.use(express.json());

app.use('/species', speciesController);
app.use('/products', productsController);
app.use('/tanks', tanksController);
app.use('/tankmates', tankmatesController);

app.get('/', (_, response) => {
    response.send("Welcome to Tankmates app")
})

app.get('*', (_, response) => {
    response.send("404 Page not found")
})

module.exports = app;