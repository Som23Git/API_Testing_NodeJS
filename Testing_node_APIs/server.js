const http = require('http');
// const products = require('./data.json')
const { getProducts } = require('./controllers/productController');

// const server1 = http.createServer(function(req,res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// });

// const server = http.createServer(function(req,res){
//     if(req.url === '/api/products' && req.method === 'GET' ){
//         res.writeHead(200, 'Success', {'Content-Type': 'application/json'})
//         res.end(JSON.stringify(products));
//     } else {
//         res.writeHead(404, 'Not Found', {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({Message: 'Try Again, the Route Not Found'}));
//     }
// });

const server = http.createServer(function(req,res){
    if(req.url === '/api/products' && req.method === 'GET' ){
        getProducts(req,res)
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET' ){
        
        const id = req.url.split('/')[3]
        getProducts(req,res,id)

    } else {
        res.writeHead(404, 'Not Found', {'Content-Type': 'application/json'})
        res.end(JSON.stringify({Message: 'Try Again, the Route Not Found'}));
    }
});


const PORT = process.env.PORT || 5020;
server.listen(PORT, () => console.log(`Server running on PORT - ${PORT}`));