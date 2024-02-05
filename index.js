
const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./database/connection')
const productRoute = require('./router/product')
const cartRoute = require('./router/cart')
const wishlistRoute = require('./router/wishlist')

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api', productRoute)
app.use('/api', cartRoute)
app.use('/api', wishlistRoute)


app.get('/', (req, res) => {
    res.send("working")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server listening on port 4000")
});