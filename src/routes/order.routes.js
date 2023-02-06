const { Router } = require("express");
const { createOrder } = require("../controllers/order.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/auth/order:
 *   post:
 *     summary: Create a new Order
 *     tags: [Cart]
 *     requestBody:
 *       description: Required fields to create anew user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/order'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
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

router.post("/order", createOrder);

module.exports = router;