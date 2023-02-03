const { Router } = require("express");
const {addCart} = require("../controllers/cart.controller") ;
const router = Router();

router.post("/", addCart);

module.exports = router;