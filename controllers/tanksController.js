const express = require('express');
const tanks = express.Router();

const { getTanksList, getTank } = require("../queries/tanks.js");

tanks.get('/', async (_, response) => {
    try{
        const tanksList = await getTanksList();
        
        if(tanksList.length === 0) {
            response.status(500).json({error: "No Tanks Found"})
        } else {
            response.status(200).json(tanksList)
        }
    } catch(err) {
        console.log(err)
    }
})

tanks.get('/:id', async (request, response) => {
    const tankId = request.params.id;
    
    try{
        if(!/[0-9]/.test(tankId)){
            response.send('Tank id must be a number');
        }

        const tank = await getTank(tankId);
        
        if(tank){
            response.json(tank);
        } else {
            response.send('Tank not found');
        }
    } catch(err){
        response.status(500).send("An error occurred");
    }
})

module.exports = tanks;