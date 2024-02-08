const { addProduct, getProduct } = require("../controllers/productController");

const router = require("express").Router();

//add product route
router.post('/add', addProduct);

//get all products route
router.get('/get', getProduct);

module.exports = router;