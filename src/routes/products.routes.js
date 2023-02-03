const { Router } = require("express");
const {createProduct, getProducts} = require("../controllers/product.controller");
const router = Router();

/**
 * @openapi
 * /api/v1/product/newproduct:
 *   post:
 *     summary: Create a new product into aplication
 *     tags: [Products]
 *     requestBody:
 *       description: Required fields to create new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/newproduct'
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
 *                   example: Product created
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
 * /api/v1/product/:
 *   get:
 *     summary: get all roucts
 *     tags: [Products]
 *     requestBody:
 *       description: Get all products of database
 *     responses:
 *       201:
 *         description: Getall
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schema/getproduct'
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

router.post("/newproduct", createProduct);
router.get("/", getProducts);

module.exports = router;