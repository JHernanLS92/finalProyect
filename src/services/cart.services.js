const { productincart, product } = require("../models");

class CartServices {
    static async getAllOfCart(){
        try {
            const result = await productincart.findAll({
                attributes: ['id'],
                include: {
                    model: product, 
                    as: "product"
                }
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;