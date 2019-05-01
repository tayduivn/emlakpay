const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: { type: String, required: true },
  brief: { type: String, required: true },
  location: {
    province: { type: String, required: true },
    district: { type: String, required: true },
    neighborhood: { type: String, required: true }
  },
  price: { type: Number, required: true },
  listingDate: { type: Date, default: Date.now },
  propertyType: { type: String, required: true }, //Konut İşyeri Arsa Bina Devremülk "Turistik Tesis"
  propertyStatus: { type: String, required: true }, //Satılık Kiralık
  grossm2: { type: Number, required: true },
  netm2: { type: Number, required: true },
  roomCount: { type: Number, required: true },
  loungeCount: { type: Number, required: true },
  bathroomCount: { type: Number, required: true },
  age: { type: String, required: true }, //0, 1-5, 5-10, 10-15, 15-20, 20-25, 25-30, 31+
  floor: { type: Number, required: true },
  totalFloor: { type: Number, required: true },
  heating: { type: String, required: true }, //Yok "Soba" "Doğalgaz Sobası" "Kat Kaloriferi" "Merkezi" "Merkezi (Pay Ölçer)" "Doğalgaz (Kombi)" "Yerden Isıtma" Klima" Fancoil Ünitesi" "Güneş Enerjisi" Jeotermal Şömine VRV "Isı Pompası"
  balcony: { type: Boolean, required: true },
  furnished: { type: Boolean, required: true },
  usageStatus: { type: String, required: true }, //Boş Kiracılı Mülk Sahibi
  dues: { type: Number, required: true },
  swap: { type: Boolean, required: true },
  side: { type: String } //Batı Doğu Güney Kuzey
});

module.exports = Listing = mongoose.model("Listing", ListingSchema);
