const db = require("../db/index.js");

const getProductsList = async () => {
    try {
        const productsList = await db.any("SELECT * FROM products");
        return productsList;

    } catch (err) {
        return err;
    }
}

const getSingleProduct = async (id) => {
    try {
        const singleProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return singleProduct;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getProductsList,
    getSingleProduct,
}