const { Router } = require("express");
const { getCart } = require("../controllers/cart.controller") ;
const router = Router();

/**
 * @openapi
 * /api/v1/cart/:
 *   get:
 *     summary: Get proucts in cart
 *     tags: [Cart]
 *     requestBody:
 *       description: Get all product cart
 *     responses:
 *       200:
 *         description: Getall
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               #ref: 'components/schema/cart'
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

router.get("/", getCart);

module.exports = router;