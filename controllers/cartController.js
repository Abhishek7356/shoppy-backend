
const Cart = require('../database/models/cartSchema')
//add cart
exports.addCartItem = async (req, res) => {
    const { _id } = req.body;
    try {
        const exist = await Cart.findOne({ product: _id })
        if (exist) {
            res.status(501).json("This product is all ready exist in your cart")
        } else {
            const cart = new Cart({ product: _id })
            await cart.save()
            res.status(200).json(cart)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


//get all cart items
exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find().populate('product');
        res.status(200).json(cartItems)
    } catch (err) {
        res.status(500).json(err)
    }
}

//delete cart items
exports.deleteCartItems = async (req, res) => {
    try {
        const deleteItem = await Cart.findOneAndDelete({ product: req.params.id });
        res.status(200).json("Item deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
}
