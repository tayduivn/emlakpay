const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

//Get current user data
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
//Authenticate user and get token
router.post(
  "/",
  [
    check("email", "Lütfen geçerli bir e-posta adresi giriniz.").isEmail(),
    check("password", "Lütfen şifrenizi giriniz.").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Geçersiz e-posta veya şifre. Lütfen bilgilerinizi kontrol ediniz, üye değilseniz üye olunuz."
            }
          ]
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Geçersiz e-posta veya şifre. Lütfen bilgilerinizi kontrol ediniz, üye değilseniz üye olunuz."
            }
          ]
        });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
