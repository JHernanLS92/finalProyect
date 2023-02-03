const { Router } = require("express");
const { addToCart } = require("../controllers/productInCart.controller");
const router = Router();

/**
 * @openapi
 * /api/v1/cart/addcart:
 *   post:
 *     summary: Create a new product into cart
 *     tags: [Cart]
 *     requestBody:
 *       description: Put product in cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addtocart'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schema/addtocart'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

router.post("/addcart", addToCart);


module.exports = router