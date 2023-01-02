const Product = require('../models/productModel')


async function getProducts(req, res){
    try{
        const products = await Product.findAll();
        res.writeHead(200, 'Success', {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products));

    } catch(error){
        console.log(error);
    }
}

module.exports = {
    getProducts
}