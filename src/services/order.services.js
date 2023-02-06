const {order} = require("../models");

class orderServices{
    static async newOrder(user) {
        try {
            const result = await order.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = orderServices;