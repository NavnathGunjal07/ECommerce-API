const mongoose = require('mongoose');

//creating product schema
const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
},{
    timestamps: true
});

//exporting product schema
const Post = mongoose.model('Product', productSchema);
module.exports = Post;