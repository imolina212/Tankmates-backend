//import code for express
const express = require('express');
const cors = require('cors');

//initialize app
const app = express();

const speciesRouter = require('./routers/speciesRouter');
const namesRouter = require('./routers/namesRouter')

//middleware
app.use(cors());
app.use(express.json());

app.use('/species', speciesRouter);
app.use('/names', namesRouter);

//route
app.get('/', (_, response) => {
    response.send("Welcome to Tankmates app")
})

//export app
module.exports = app;