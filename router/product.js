const { addProduct, getProduct } = require("../controllers/productController");

const router = require("express").Router();

//add product route
router.post('/add/product', addProduct);

//get all products route
router.get('/get/products', getProduct);

module.exports = router;