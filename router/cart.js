const { addCartItem, getCartItems, deleteCartItems } = require("../controllers/cartController");

const router = require("express").Router();

//add cart item route
router.post('/add/item', addCartItem);

//get all cart item route
router.get('/get/item', getCartItems);

//delete cart item route
router.delete('/delete/item/:id', deleteCartItems);

module.exports = router;