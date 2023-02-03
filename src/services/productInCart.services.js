const { productincart,cart, product } = require("../models");

class ProductInCartServices {

    static async addInCart(newProduct){
        try {
            const result = await productincart.create(newProduct);
            const prod = await product.findOne( {where: {id: result.product_id}} );
            const car = await cart.findOne( {where: { id: newProduct.cart_id}});
            await cart.update( { total_price: car.total_price + (prod.price * newProduct.quantity )}, {where: {id: newProduct.cart_id} } );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCartServices;