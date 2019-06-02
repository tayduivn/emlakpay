const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const Message = require("../../models/Message");

router.post(
  "/",
  [
    check("email", "Lütfen geçerli bir e-posta adresi giriniz.").isEmail(),
    check("name", "Lütfen isminizi giriniz.")
      .not()
      .isEmpty(),
    check("msg", "Lütfen mesajınızı giriniz.")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, name, msg } = req.body;

    try {
      const message = new Message({ email, name, msg });
      const newMsg = await message.save();
      res.json(newMsg);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
