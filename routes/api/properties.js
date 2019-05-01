const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Property route"));

module.exports = router;
