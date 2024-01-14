const express = require('express');
const fs = require('fs');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const bodyParser=require('body-parser'); 
require('dotenv').config();
const PORT= process.env.PORT || 8000;  
const Product = require("./models/Product");
app.use(bodyParser.json());
const stripe = require('stripe')(process.env.SECRET_KEY);
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        { 
          price_data: {
            currency: 'usd', 
            product_data: {
              name: 'Burger', 
            },
            unit_amount: 1000, 
          }, 
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:${PORT}/success`,
      cancel_url: `http://localhost:${PORT}/cancel`,
    });
  
    res.redirect(303, session.url); 
  });
  
let mode;
let category;
let list=[];
let toggle=false;
let name;

// mongoose.connect('mongodb://127.0.0.1:27017/kiosk')
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("db connected sucessfully".yellow)) 
.catch((err)=> console.log(err));


app.use('/public', express.static('public'));



app.engine("ejs", ejsMate); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method")); 


app.get("/", (req, res) => {
    res.render("pages/homePage")
});
app.get("/mode", (req, res) => {
    res.render("pages/mode")
});
app.get("/modee", async (req, res) => {
    mode=req.query.mode;
    const products= await Product.find({});
    toggle=false;
    list=[];
    res.render("pages/main",{products,list,toggle})
});
app.get("/category", async (req, res) => {
    category=req.query.category;
    toggle=false;
    const products=await Product.find({category});
    res.render("pages/main3",{products,list,toggle,name});
}); 
app.get('/newProd',async(req,res)=>{
    const products=await Product.find({category});
    toggle=true;
    res.render('pages/main3',{products,list,toggle,name});
});
app.get('/products',async(req,res)=>{
    const product=await Product.findById(req.query.id);
    category=product.category;
    const products=await Product.find({category});
    list.push(product);
    name=product.name;
    res.render('pages/main3',{products,list,toggle,name});
});
app.get('/productss',async(req,res)=>{
    const products=await Product.find({});
    toggle=false;
    res.render('pages/main3',{products,list,toggle,name});
});
app.get('/updateD',async(req,res)=>{
    const products=await Product.find({category});
    const product=await Product.findById(req.query.id);
    product.quantity-=1;
    await product.save();
    list.forEach((item)=>{
        if(item._id.valueOf()===req.query.id)item.quantity-=1;
    });
    res.render('pages/main3',{products,list,toggle,name});
});
app.get('/updateI',async(req,res)=>{
    const products=await Product.find({category});
    const product=await Product.findById(req.query.id);
    product.quantity+=1;
    await product.save();
    list.forEach((item)=>{
        if(item._id.valueOf()===req.query.id)item.quantity+=1;
    });

    res.render('pages/main3',{products,list,toggle,name});
});
app.get('/cancel',(req,res)=>{
    list=[];
    toggle=false;
    res.render('pages/homePage');
})
app.get('/confirm',(req,res)=>{
    let total=0;
    list.forEach((item)=>{
        total+=item.price*item.quantity;
    });
    res.render('pages/confirm',{list,total,mode});
});
app.get('/cash',(req,res)=>{    
    res.render('pages/cash');
});





app.listen(PORT, () => 
    console.log("Server listening at port ".blue ,`http://localhost:${PORT}`.red)
)




