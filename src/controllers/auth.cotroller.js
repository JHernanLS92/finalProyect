const AuthServices = require("../services/auth.services");
const CartServices = require("../services/cart.services")
const transporter = require("../utils/mailers");

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      await CartServices.newCart({user_id: result.id, total_price: 0});
      res.status(201).json({ message: "User created" });
      await transporter.sendMail({
        to: result.email,
        from: "jhernan.lopez92@gmail.com",
        subject: "Email confirmation",
        html: "<h1>Bienvenido a ecommerce</h1> <p>Tienes que confirmar tu email</p> <p>Solo haz clic en el siguiente <a>enlace</a></p>"
        
      });
    } else {
      res.status(400).json({ message: "Somethin wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = await AuthServices.genToken(userData);
      result.user.token = token;
      res.json(result.user);
    }else{
      res.status(400).json("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: "Something wrong" });
  }
};

module.exports = {
  register,
  login,
};
