const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Listing = require("../../models/Listing");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//Create a new listing
router.post(
  "/",
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

    const listing = await newListing.save();
    res.json(listing);
  }
);

//Edit existing listing
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

//Get all listings
router.get("/", auth, async (req, res) => {
  try {
    const listings = await Listing.find().sort({ date: -1 });
    res.json(listings);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//Get single listing
router.get("/:id", auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.json(listing);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

//Delete single listings
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

//Fav and unfav a listing
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
      return res.json(listing.favedBy);
    }

    listing.favedBy.push(req.user.id);
    await listing.save();
    res.json(listing.favedBy);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "İlan bulunamadı" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
