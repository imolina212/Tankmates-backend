//import code for express
const express = require('express');

//initialize app
const app = express();

const speciesRouter = require('./routers/speciesRouter');
const namesRouter = require('./routers/namesRouter')

//middleware
app.use('/species', speciesRouter);
app.use('/names', namesRouter);

//route
app.get('/', (_, response) => {
    response.send("Hello World")
})

//export app
module.exports = app;