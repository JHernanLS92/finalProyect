const cart = require("../models/cart");
const {order, productinorder } = require("../models/order");

class ProductInOrderServices{
    static async addInOrder(){
        try {
            const result = await productinorder.create(newOrd);
            const prod = await product.findOne( {where: {id: result.product_id}} );
            const ord = await order.findOne( {where: { id: newOrd.order_id}});
            await order.update( { total_price: cart.total_price }, {where: {id: newProduct.cart_id} } );
            return result;
        } catch (error) {
            throw error;
        }
    }
}