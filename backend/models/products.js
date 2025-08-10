const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true},
    image: { type: String }, // Store image URL or path as a string
    quantity: { type: Number, required: true}
});

module.exports = mongoose.model('Products', productSchema);