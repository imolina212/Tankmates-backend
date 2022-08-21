const express = require('express');
const router = express.Router();


const db = require("../db/index");


router.get('/', async (request, response) => {

    let { limit=25, min, max } = request.query;

    limit = Number(limit);

    let speciesDataForDelivery = await db.any('SELECT * FROM species');
    
    speciesDataForDelivery = speciesDataForDelivery.slice(0, limit)

    response.send(speciesDataForDelivery);


})

// router.put('\:id', async (req, res) => {

// })

router.get('/:id', async (request, response) => {
    try{
        const speciesId = request.params.id;

        if(!/[0-9]/.test(speciesId)){
            response.send('Species id must be a number');
        }

        const singleSpecies = await db.oneOrNone('SELECT * FROM species WHERE id = $1', [speciesId])
        
        if(singleSpecies){
            response.json(singleSpecies);
        } else {
            response.send('Species not found');
        }
    } catch(err){
        response.status(500).send("An error occurred");
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const speciesId = req.params.id;
        
        await db.none('DELETE FROM water_parameters WHERE species_id = $1', [speciesId]);

        const deletedSpecies = await db.one('DELETE FROM species WHERE id = $1 RETURNING *', [speciesId]);

        res.json(deletedSpecies);

    } catch (err) {

        res.status(500).send(err);

    }
})

//write a route to get a student by their full name

//implement min an max ids for get students

//write a route to get the grade average of a student by their id

//get all students sorted by their last name





module.exports = router;