const mongoose=require("mongoose");
const Product=require("./models/Product");
require("dotenv").config();

// mongoose.connect('mongodb://127.0.0.1:27017/kiosk')
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("db connected sucessfully".yellow)) 
.catch((err)=> console.log(err));



const products=
[
    {
        name: "Classic Burger",
        price: 600,
        img: "https://static.toiimg.com/thumb/83565509.cms?imgsize=19211&width=509&height=340",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Coco-Cola",
        price: 500,
        img: "../../public/images/beverage1.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "World Famous Fries",
        price: 10,
        img: "../../public/images/fries1.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Bacon, Egg & Cheese Biscuit",
        price: 800,
        img: "../../public/images/breakfast1.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Hamburger Happy Meal",
        price: 350,
        img: "../../public/images/meal1.jpeg",
        desc: "Special Happy Meal designed for kids with a toy included.",
        quantity: 1,
        category: "happy"
    },
    {
        name: "Spicy Chicken Wings",
        price: 450,
        img: "../../public/images/chicken1.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Mocha Latte",
        price: 10,
        img: "../../public/images/coffee1.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "McFlurry with OREO Cookies",
        price: 700,
        img: "../../public/images/sweet1.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Egg McMuffin",
        price: 800,
        img: "../../public/images/breakfast2.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "World Famous Fries®",
        price: 10,
        img: "../../public/images/fries2.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"  
    },
    {
        name: "Sprite",
        price: 500,
        img: "../../public/images/beverage2.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Big Mac",
        price: 600,
        img: "../../public/images/burger1.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "4 Piece Chicken McNuggets Happy Meal",
        price: 350,
        img: "../../public/images/meal2.jpeg",
        desc: "Special Happy Meal designed for kids with a toy included.",
        quantity: 1,
        category: "happy"
    },
    {
        name: "Deluxe McCrispy",
        price: 450,
        img: "../../public/images/chicken2.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Americano",
        price: 10,
        img: "../../public/images/coffee2.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "McFlurry with M&M's Candies",
        price: 700,
        img: "../../public/images/sweet2.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Sausage McMuffin",
        price: 800,
        img: "../../public/images/breakfast3.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Tangy Barbeque Sauce",
        price: 10,
        img: "../../public/images/fries3.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Dr Pepper",
        price: 500,
        img: "../../public/images/beverage3.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Quarter Pounder with Cheese",
        price: 600,
        img: "../../public/images/burger2.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "6 Piece Chicken McNuggets Happy Meal",
        price: 350,
        img: "../../public/images/meal3.jpeg",
        desc: "Special Happy Meal designed for kids with a toy included.",
        quantity: 1,
        category: "happy"
    },
    {
        name: "Spicy McCrispy",
        price: 450,
        img: "../../public/images/chicken3.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Premium Roast Coffee",
        price: 10,
        img: "../../public/images/coffee3.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Vanilla Cone",
        price: 700,
        img: "../../public/images/sweet3.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Sausage McMuffin with Egg",
        price: 800,
        img: "../../public/images/breakfast4.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Spicy Buffalo Sauce",
        price: 10,
        img: "../../public/images/fries4.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Fanta Orange",
        price: 500,
        img: "../../public/images/beverage4.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Double Quarter Pounder with Cheese",
        price: 600,
        img: "../../public/images/burger3.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Spicy Deluxe McCrispy",
        price: 450,
        img: "../../public/images/chicken4.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Iced Caramel Macchiato",
        price: 10,
        img: "../../public/images/coffee4.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Chocolate Shake",
        price: 700,
        img: "../../public/images/sweet4.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Sausage Biscuit",
        price: 800,
        img: "../../public/images/breakfast5.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Creamy Ranch Sauce",
        price: 10,
        img: "../../public/images/fries5.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Diet Coke",
        price: 500,
        img: "../../public/images/beverage5.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Quarter Pounder with Cheese Deluxe",
        price: 600,
        img: "../../public/images/burger4.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Lilet-O-Fish",
        price: 450,
        img: "../../public/images/chicken5.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Iced Mocha",
        price: 10,
        img: "../../public/images/coffee5.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Vanilla Cone",
        price: 700,
        img: "../../public/images/sweet5.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Sausage Biscuit with Egg",
        price: 800,
        img: "../../public/images/breakfast6.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Honey Mustard Sauce",
        price: 10,
        img: "../../public/images/fries6.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Hi-C Orange Lavaburst",
        price: 500,
        img: "../../public/images/beverage6.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "McDouble",
        price: 600,
        img: "../../public/images/burger5.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "McChicken",
        price: 450,
        img: "../../public/images/chicken6.jpeg",
        desc: "Delicious and spicy chicken wings for a flavorful experience.",
        quantity: 1,
        category: "chicken"
    },
    {
        name: "Iced Coffee",
        price: 10,
        img: "../../public/images/coffee6.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Chocolate Shake",
        price: 700,
        img: "../../public/images/sweet6.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Bacon, Egg & Cheese McGriddles",
        price: 800,
        img: "../../public/images/breakfast7.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Honey Sauce",
        price: 10,
        img: "../../public/images/fries7.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Frozen Fanta Blue Raspberry",
        price: 500,
        img: "../../public/images/beverage7.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Quarter Pounder with Cheese Bacon",
        price: 600,
        img: "../../public/images/burger6.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Iced Caramel Coffee",
        price: 10,
        img: "../../public/images/coffee7.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Vanilla Shake",
        price: 700,
        img: "../../public/images/sweet7.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Sausage McGriddles",
        price: 800,
        img: "../../public/images/breakfast8.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Sweet 'N Sour Sauce",
        price: 10,
        img: "../../public/images/fries8.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Frozen Coca-Cola Classic",
        price: 500,
        img: "../../public/images/beverage8.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Cheeseburger",
        price: 600,
        img: "../../public/images/burger7.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Iced French Vanilla Coffee",
        price: 10,
        img: "../../public/images/coffee8.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Chocolate Shake",
        price: 700,
        img: "../../public/images/sweet8.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },
    {
        name: "Big Breakfast",
        price: 800,
        img: "../../public/images/breakfast9.jpeg",
        desc: "Delicious breakfast platter with eggs, sausage, and pancakes.",
        quantity: 1,
        category: "breakfast"
    },
    {
        name: "Ketchup Packet",
        price: 10,
        img: "../../public/images/fries9.jpeg",
        desc: "Golden and crispy fries served with ketchup.",
        quantity: 1,
        category: "fries"
    },
    {
        name: "Strawberry Banana Smoothie",
        price: 500,
        img: "../../public/images/beverage9.jpeg",
        desc: "Healthy and refreshing smoothie with a mix of fruits.",
        quantity: 1,
        category: "beverages"
    },
    {
        name: "Double Cheeseburger",
        price: 600,
        img: "../../public/images/burger8.jpeg",
        desc: "Juicy and flavorful classic burger with cheese and veggies.",
        quantity: 1,
        category: "burgers"
    },
    {
        name: "Caramel Frappe",
        price: 10,
        img: "../../public/images/coffee9.jpeg",
        desc: "Classic Caffe Americano for coffee lovers.",
        quantity: 1,
        category: "coffee"
    },
    {
        name: "Hot Fudge Sundae",
        price: 700,
        img: "../../public/images/sweet9.jpeg",
        desc: "A delightful platter of assorted sweets and treats.",
        quantity: 1,
        category: "sweets"
    },

]

async function seedProducts(){


    await Product.deleteMany({})
    await Product.insertMany(products);

   console.log("products have been seeded sucessfully")

}
seedProducts();

