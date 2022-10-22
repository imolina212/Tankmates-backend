const express = require('express');
const products = express.Router();

const { getProductsList, getSingleProduct } = require("../queries/products.js");


products.get('/', async (_, response) => {
    try{
        const productsList = await getProductsList();
        
        if(productsList.length === 0) {
            response.status(500).json({error: "No Products Found"})
        } else {
            response.status(200).json(productsList)
        }
    } catch(err) {
        console.log(err)
    }
})

products.get('/:id', async (request, response) => {
    const productId = request.params.id;
    
    try{
        const singleProduct = await getSingleProduct(productId);
        
        if(singleProduct){
            response.json(singleProduct);
        } else {
            response.send('Product not found');
        }
    } catch(err){
        response.status(500).send("An error occurred");
    }
})

module.exports = products;