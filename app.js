//import code for express
const express = require('express');
const cors = require('cors');

//initialize app
const app = express();

const speciesController = require('./controllers/speciesController');
const productsController = require('./controllers/productsController');

//middleware
app.use(cors());
app.use(express.json());

app.use('/species', speciesRouter);
app.use('/products', productsRouter);

//route
app.get('/', (_, response) => {
    response.send("Welcome to Tankmates app")
})

//export app
module.exports = app;