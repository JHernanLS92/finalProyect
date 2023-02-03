const { cart } = require("../models");

class CartServices {
    static async newCart(nCart){
        try {
            const result = await cart.create(nCart);
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;