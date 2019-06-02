const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Listing = require("../../models/Listing");
const { check, validationResult } = require("express-validator/check");

const multer = require("multer");
const multerGCS = require("multer-google-storage");
const config = require("config");

const GOOGLE_CLOUD_PROJECT_ID = config.get("gc-project");
const GOOGLE_CLOUD_KEYFILE = "./config/Emlakpay-b544e179f709.json";
const BUCKET_NAME = config.get("gc-storage");

let uploadHandler = multer({
  storage: multerGCS.storageEngine({
    keyFilename: GOOGLE_CLOUD_KEYFILE,
    projectId: GOOGLE_CLOUD_PROJECT_ID,
    bucket: BUCKET_NAME
  })
});

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
      facebook,
      city
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
    if (city) profileFields.city = city;

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
    const profiles = await Profile.find().populate("user");
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

router.post(
  "/avatar",
  [auth, uploadHandler.single("file")],
  async (req, res) => {
    if (req.file) {
      try {
        const oldProfile = await Profile.findOne({ user: req.user.id });
        oldProfile.avatar = req.file.path;
        const profile = await oldProfile.save();
        return res.json(profile);
      } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Hata, foto yüklenemedi" });
      }
    }
    return res.status(400).send({ msg: "Hata, foto bulunamadı" });
  }
);

module.exports = router;
