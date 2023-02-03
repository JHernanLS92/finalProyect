const ProductServices = require("../services/product.services.js");

const createProduct = async (req, res) =>{
    try {
        const newProd = req.body;
        const result = await ProductServices.newProduct(newProd);
        res.status(201).json({ message: "Product created", result });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getProducts = async (req,res) =>{
    try {
        const result = await ProductServices.allProducts();
        res.status(200).json( result );
    } catch (error) {
        res.status(400).json(error.message);
    }
};



module.exports = {
    createProduct,
    getProducts
};