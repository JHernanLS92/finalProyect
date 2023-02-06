const { product} = require("../models");

class ProductServices {
    static async newProduct(newProd) {
        try {
            const result = await product.create(newProd);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async allProducts(){
        try {
            const result = await product.findAll({
                attributes:["id", "name", "description", "image"]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;