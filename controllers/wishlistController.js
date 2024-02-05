
const Wishlist = require('../database/models/wishlistSchema')

//add wishlist item
exports.addWishlistItem = async (req, res) => {
    const { _id, ...others } = req.body;
    try {
        const exist = await Wishlist.findOne({ productId: _id })
        if (exist) {
            res.status(501).json("This product is all ready exist in your wishlist")
        } else {
            const wishlist = new Wishlist({ ...others, productId: _id })
            await wishlist.save()
            res.status(200).json(wishlist)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


//get all wishlist items
exports.getWishlistItems = async (req, res) => {
    try {
        const wishlistItem = await Wishlist.find();
        res.status(200).json(wishlistItem)
    } catch (err) {
        res.status(500).json(err)
    }
}

//delete wishlistItem items
exports.deleteWishlistItem = async (req, res) => {
    try {
        const deleteItem = await Wishlist.findByIdAndDelete(req.params.id);
        res.status(200).json("Item deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
}