const { addWishlistItem, getWishlistItems, deleteWishlistItem } = require("../controllers/wishlistController");

const router = require("express").Router();

//add wishlist item route
router.post('/add/wishlist/item', addWishlistItem);

//get all wishlist item route
router.get('/get/wishlist/item', getWishlistItems);

//delete wishlist item route
router.delete('/delete/wishlist/item/:id', deleteWishlistItem);

module.exports = router;
