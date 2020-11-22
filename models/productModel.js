const products = require('../data/product.json')
const {v4:uuidv4} = require('uuid')
const {writeDataToFile} = require('../utils')
function findAll(){
    return new Promise(
        (resolve,reject)=>{
            resolve(products)
        }
    )
}
function findById(id){
    return new Promise(
        (resolve,reject)=>{
            const product = products.find((p)=>p.id===id)
            console.log("products delivered");
            resolve(product);
        }
    )
}
function create(product){
   return new Promise((resolve,reject)=>
{
    const newProduct ={id:uuidv4(),...product};
    products.push(newProduct);
    writeDataToFile('./data/product.json',products);
    resolve(newProduct);
}
   );
}
module.exports = {
    findAll,
    findById,
    create,

}