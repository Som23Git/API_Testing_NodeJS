const Product = require('../models/productModel')


// @desc Gets All Products from DB
// @route GET /api/products
async function getProducts(req, res){
    try{
        const products = await Product.findAll();
        res.writeHead(200, 'Success', {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products));

    } catch(error){
        console.log(error);
    }
}

// @desc Gets Single Product from DB
// @route GET /api/product/:id
async function getProduct(req, res, id){
    try{
        const product = await Product.findById(id);

        if(!product){
            res.writeHead(404, 'Not Found', {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: `Not Found`}));
        } else {
            res.writeHead(200, 'Success', {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(product));
        }

    } catch(error){
        console.log(error);
    }
}


// @desc Create a Product
// @route POST /api/products
async function createProduct(req, res){
    try{
        const product = {
            title: 'Test Product',
            desc: 'This is my product',
            price: 100
        }
        const newProduct = await Product.create(product);
        res.writeHead(201, 'Created', {'Content-Type':'application/json'})
        return res.end(JSON.stringify(newProduct));

    } catch(error){
        console.log(error);
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct
}