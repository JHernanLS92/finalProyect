const { Router } = require("express");
const { register, login } = require("../controllers/auth.cotroller");
const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Create a new user into aplication
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to create anew user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
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
 * /api/v1/auth/login:
 *   post:
 *     summary: Login into application
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login to a existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/loginResponse'
 *       400:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found / Something wrong / User or password not provided
 */

router.post("/register", register);
router.post("/login", login);

module.exports = router;
