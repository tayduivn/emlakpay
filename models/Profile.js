const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  company: { type: String },
  bio: { type: String },
  phoneNo: { type: String },
  email: { type: String },
  avatar: { type: String },
  city: { type: String },
  social: {
    linkedin: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("Profile", ProfileSchema);
