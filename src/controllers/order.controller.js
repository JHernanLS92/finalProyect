const orderServices = require("../services/order.services");

const createOrder = async (req, res) => {
    try {
        const order = req.body;
        const result = await orderServices.create(order);
        res.status(201).json({message: "Orden creada" ,result});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createOrder
}