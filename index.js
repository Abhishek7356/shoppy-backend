
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./router/product')
const cartRoute = require('./router/cart')
const wishlistRoute = require('./router/wishlist')

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/wishlist', wishlistRoute)

//return rejectWithValue('No user found');

app.get('/', (req, res) => {
    res.send("working")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server listening on port 4000")
    try {
        mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log("mongodb connected successfully."))
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
});