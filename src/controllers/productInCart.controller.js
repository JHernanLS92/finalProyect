const ProductInCartServices = require("../services/productInCart.services");

const addToCart = async (req,res) => {
    try {
        const product = req.body;
        const result = await ProductInCartServices.addInCart(product)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports =  {
    addToCart
}