const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    description: String,
    image : String,
    type : String,
})



const Product = mongoose.models.Product || mongoose.model('Product', productSchema);



module.exports = Product

