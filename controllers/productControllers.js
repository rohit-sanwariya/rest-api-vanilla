const ProductModel = require("../models/productModel");

async function getProducts(req, res) {
  try {
    const products = await ProductModel.findAll();
    console.log("worked");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//Specific products

async function getProduct(req, res, id) {
  try {
    const product = await ProductModel.findById(id);
    if(!product){
        console.log("no can do amigo!");
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message:"product not found"}));
    }
    else{
        console.log("worked");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

//create product POST

async function createProducts(req,res){
try {
  const product ={
    title:"Real",
    desc:"descripton",
    price:100,
  };
const newProduct = await ProductModel.create(product);
res.writeHead(201,{'Content-Type':'application/json'});
console.log(newProduct);
res.end(JSON.stringify(newProduct));

} catch (error) {
  console.log(error);
}
}


module.exports = {
  getProducts,
  getProduct,
  createProducts,
};
