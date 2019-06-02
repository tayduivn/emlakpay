const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  msg: { type: String, required: true }
});

module.exports = Message = mongoose.model("Message", MessageSchema);
