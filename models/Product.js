const mongoose = require("mongoose");

 
const productSchema = new mongoose.Schema({

    name : String,
    price : Number,   
    img : String,
    desc : String, 
    quantity:{
        type:Number,
        default:1
    },
    category:String  


})

const Product = mongoose.model("Product", productSchema);
 
module.exports = Product