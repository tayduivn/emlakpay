const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Listing = require("../../models/Listing");
const { check, validationResult } = require("express-validator/check");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(400).json({
        msg:
          "Bu kullanıcıya ait bir profil bulunamadı. Lütfen bir profil oluşturun."
      });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);

    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("name", "İsim alanı zorunludur.")
        .not()
        .isEmpty(),
      check("surname", "Soy isim alanı zorunludur.")
        .not()
        .isEmpty(),
      check("phoneNo", "İletişim numarası alanı zorunludur.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      surname,
      company,
      bio,
      phoneNo,
      email,
      avatar,
      linkedin,
      twitter,
      facebook
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (surname) profileFields.surname = surname;
    if (company) profileFields.company = company;
    if (bio) profileFields.bio = bio;
    if (phoneNo) profileFields.phoneNo = phoneNo;
    if (email) profileFields.email = email;
    if (avatar) profileFields.avatar = avatar;

    profileFields.social = {};
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);
//get all profiles
router.get("/", auth, async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//get profile by user id
router.get("/user/:user_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    });
    if (!profile) {
      return res.status(400).json({ msg: "Profil bulunamadı." });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profil bulunamadı." });
    }
    res.status(500).send("Server Error");
  }
});

//Delete the user, profile and related properties
router.delete("/", auth, async (req, res) => {
  try {
    await Listing.deleteMany({ user: req.user.id });
    await Profile.findOneAndDelete({ user: req.user.id });
    await User.findOneAndDelete({ _id: req.user.id });
    res.json({
      msg: "Kullanıcı ve kullanıcıya ait bütün veriler başarıyla silindi."
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
