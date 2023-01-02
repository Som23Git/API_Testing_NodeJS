const products = require('../data.json')

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(products)
    });
};

module.exports = {
    findAll
}