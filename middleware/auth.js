const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      msg: "Token bulunamadı. Bu işlemi yapmaya izniniz bulunmamaktadır."
    });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Geçersiz token. Bu işlemi yapmaya izniniz bulunmamaktadır."
    });
  }
};
