const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('wishlist', wishlistSchema);