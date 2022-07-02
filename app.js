//import code for express
const express = require('express');

//initialize app
const app = express();

const speciesRouter = require('./routers/speciesRouter')

//middleware
app.use('/species', speciesRouter);

//route
app.get('/', (request, response) => {
    response.send("Hello World")
})

//export app
module.exports = app;