const http = require('http');
const product = require('./data/product.json')
const server = http.createServer((req,res)=>{
    console.log(123);
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/html")
    // res.write(`<h1>Hello world</h1>`);

    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(product))
  



    res.end()
});

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on ${PORT}`))

