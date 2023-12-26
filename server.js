// Import necessary modules and files
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products.js');
const productCtrl = require('./controllers/productController');
const Product = require('./models/product.js');
const Order = require('./models/order.js')
const orderRoutes = require('./routes/orderRoutes.js')
const initializeDatabase = require("./initializeDatabase")
const methodOverride = require('method-override');
// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')
})

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))


        // Use product and order routes
        app.use('/products', productRoutes);
        app.use('/orders', orderRoutes);
      
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      
