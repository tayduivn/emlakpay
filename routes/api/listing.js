const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Listing = require("../../models/Listing");
const Profile = require("../../models/Profile");
const multer = require("multer");
const multerGCS = require("multer-google-storage");
const config = require("config");

const GOOGLE_CLOUD_PROJECT_ID = config.get("gc-project");
const GOOGLE_CLOUD_KEYFILE = config.get("gc-key");
const BUCKET_NAME = config.get("gc-storage");

let uploadHandler = multer({
  storage: multerGCS.storageEngine({
    keyFilename: GOOGLE_CLOUD_KEYFILE,
    projectId: GOOGLE_CLOUD_PROJECT_ID,
    bucket: BUCKET_NAME
  })
});

router.post("/", [auth, uploadHandler.array("files", 10)], async (req, res) => {
  let location = {
    province: req.body.province,
    district: req.body.district,
    neighborhood: req.body.neighborhood
  };
  const newListing = new Listing({
    user: req.user.id,
    title: req.body.title,
    location: location,
    price: req.body.price,
    propertyType: req.body.propertyType,
    propertyStatus: req.body.propertyStatus,
    grossm2: req.body.grossm2,
    netm2: req.body.netm2,
    roomCount: req.body.roomCount,
    loungeCount: req.body.loungeCount,
    bathroomCount: req.body.bathroomCount,
    age: req.body.age,
    floor: req.body.floor,
    totalFloor: req.body.totalFloor,
    heating: req.body.heating,
    balcony: req.body.balcony,
    furnished: req.body.furnished,
    inSite: req.body.inSite,
    usageStatus: req.body.usageStatus,
    dues: req.body.dues,
    swap: req.body.swap
  });
  if (req.body.brief) newListing.brief = req.body.brief;
  if (req.body.side) newListing.side = req.body.side;
  if (req.files && req.files.length > 0) {
    let arr = [];
    req.files.forEach(file => {
      arr.push(file.path);
    });
    newListing.img = arr;
  }
  try {
    const listing = await newListing.save();
    res.json(listing);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "İlan bulunamadı" });
  }
});

router.put(
  "/edit/:id",
  [
    auth,
    [
      check("title", "Başlık boş bırakılamaz")
        .not()
        .isEmpty(),
      check("province", "Şehir boş bırakılamaz")
        .not()
        .isEmpty(),
      check("district", "İlçe boş bırakılamaz")
        .not()
        .isEmpty(),
      check("neighborhood", "Mahalle boş bırakılamaz")
        .not()
        .isEmpty(),
      check("price", "Fiyat boş bırakılamaz")
        .not()
        .isEmpty(),
      check("propertyType", "Emlak tipi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("propertyStatus", "İlan tipi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("grossm2", "Bürüt m2 boş bırakılamaz")
        .not()
        .isEmpty(),
      check("netm2", "Net m2 boş bırakılamaz")
        .not()
        .isEmpty(),
      check("roomCount", "Oda sayısı boş bırakılamaz")
        .not()
        .isEmpty(),
      check("loungeCount", "Salon sayısı boş bırakılamaz")
        .not()
        .isEmpty(),
      check("bathroomCount", "Banyo sayısı boş bırakılamaz")
        .not()
        .isEmpty(),
      check("age", "Emlak yaşı boş bırakılamaz")
        .not()
        .isEmpty(),
      check("floor", "Bulunduğu kat boş bırakılamaz")
        .not()
        .isEmpty(),
      check("totalFloor", "Toplam kat sayısı boş bırakılamaz")
        .not()
        .isEmpty(),
      check("heating", "Isınma bilgisi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("balcony", "Balkon bilgisi bırakılamaz")
        .not()
        .isEmpty(),
      check("furnished", "Mobilya bilgisi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("inSite", "Site bilgisi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("usageStatus", "Kullanım durumu boş bırakılamaz")
        .not()
        .isEmpty(),
      check("dues", "Aidat bilgisi boş bırakılamaz")
        .not()
        .isEmpty(),
      check("swap", "Takas bilgisi boş bırakılamaz")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let location = {
      province: req.body.province,
      district: req.body.district,
      neighborhood: req.body.neighborhood
    };
    const newListing = {
      user: req.user.id,
      title: req.body.title,
      location: location,
      price: req.body.price,
      propertyType: req.body.propertyType,
      propertyStatus: req.body.propertyStatus,
      grossm2: req.body.grossm2,
      netm2: req.body.netm2,
      roomCount: req.body.roomCount,
      loungeCount: req.body.loungeCount,
      bathroomCount: req.body.bathroomCount,
      age: req.body.age,
      floor: req.body.floor,
      totalFloor: req.body.totalFloor,
      heating: req.body.heating,
      balcony: req.body.balcony,
      furnished: req.body.furnished,
      inSite: req.body.inSite,
      usageStatus: req.body.usageStatus,
      dues: req.body.dues,
      swap: req.body.swap
    };
    if (req.body.brief) newListing.brief = req.body.brief;
    if (req.body.side) newListing.side = req.body.side;

    try {
      const oldListing = await Listing.findById(req.params.id);
      if (!oldListing) {
        return res.status(404).json({ msg: "İlan bulunamadı" });
      }
      if (oldListing.user.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ msg: "Bu işlemi yapmaya izniniz bulunmamaktadır." });
      }
      const listing = await Listing.findByIdAndUpdate(
        oldListing._id,
        newListing,
        { new: true }
      );
      res.json(listing);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const listings = await Listing.find().sort({ date: -1 });
    res.json(listings);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    const profile = await Profile.findOne({ user: listing.user });
    if (!listing) {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.json({ listing: listing, profile: profile });
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    if (listing.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "Bu işlemi yapmaya izniniz bulunmamaktadır." });
    }
    await listing.remove();
    res.json({ msg: "İlan başarıyla kaldırıldı." });
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

router.put("/fav/:id", auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    let favIndex = listing.favedBy
      .map(fav => fav.toString())
      .indexOf(req.user.id);

    if (favIndex !== -1) {
      listing.favedBy.splice(favIndex, 1);
      await listing.save();
      return res.json(listing);
    }

    listing.favedBy.push(req.user.id);
    await listing.save();
    res.json(listing);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

router.get("/filter/:q", auth, async (req, res) => {
  try {
    var decodedQuery = new Buffer.from(req.params.q, "base64").toString();
    const queryObject = JSON.parse(decodedQuery);

    const listings = await Listing.find(queryObject);
    return res.json(listings);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
