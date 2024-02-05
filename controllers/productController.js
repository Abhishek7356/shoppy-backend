
const Product = require('../database/models/productSchema')
//add product
exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}


//get all product
exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}