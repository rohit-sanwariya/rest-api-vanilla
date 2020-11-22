const http = require('http');
const products = require('./data/product.json')
const {getProducts,getProduct,createProducts} = require('./controllers/productControllers');
const server = http.createServer((req,res)=>{
    console.log(123);
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/html")
    // res.write(`<h1>Hello world</h1>`);
    if(req.url === '/api/products' && req.method ==="GET"){
        getProducts(req,res);
}
else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
   console.log("app andar hai match ke");
    const id = req.url.split('/')[(req.url.split('/').length-1)]
     getProduct(req,res,id)
}
else if(req.url === '/api/products' && req.method ==="POST"){
    console.log("create");
    createProducts(req,res);
}
else{
    res.writeHead(404,{"Content-Type":"text/html"})
res.write(`<h1>Page not found</h1>`);
res.end()
}

});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`server running on ${PORT}`))

