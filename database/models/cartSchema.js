const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('cart', cartSchema);