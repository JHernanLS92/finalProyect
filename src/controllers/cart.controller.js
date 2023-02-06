const CartServices = require("../services/cart.services");

const getCart = async (req, res) => {
    try {
        const result = await CartServices.getAllOfCart();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json( error.message);
    }
}

module.exports = {
    getCart
}