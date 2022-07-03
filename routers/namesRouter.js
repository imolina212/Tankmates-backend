const express = require('express');
const router = express.Router();

const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('../utils/stringUtils')

router.get('/capitalizeName/:name', (request, response) => {
    try {
        const name = request.params.name;
        console.log(name);

        const capitalizedName = capitalizeFirstLetter(name);

        response.send(capitalizedName);

    } catch (err){
        response.send("There was an error.");
    }
})

router.get('/:name/:times', (request, response) => {
    try {
        const name = request.params.name;

        const times  = request.params.times;

        const repeatedNames = repeatNTimesWithSpace(name, times);

        response.send(repeatedNames);
    } catch (err){
        response.send("There was an error.");
    }
})



module.exports = router;