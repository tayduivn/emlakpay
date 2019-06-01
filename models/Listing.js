const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: { type: String },
  brief: { type: String },
  location: {
    province: { type: String },
    district: { type: String },
    neighborhood: { type: String }
  },
  price: { type: Number },
  listingDate: { type: Date, default: Date.now },
  propertyType: { type: String }, //Konut İşyeri Arsa Bina Devremülk "Turistik Tesis"
  propertyStatus: { type: String }, //Satılık Kiralık
  grossm2: { type: Number },
  netm2: { type: Number },
  roomCount: { type: Number },
  loungeCount: { type: Number },
  bathroomCount: { type: Number },
  age: { type: Number },
  floor: { type: Number },
  totalFloor: { type: Number },
  heating: { type: String }, //Yok "Soba" "Doğalgaz Sobası" "Kat Kaloriferi" "Merkezi" "Merkezi (Pay Ölçer)" "Doğalgaz (Kombi)" "Yerden Isıtma" Klima" Fancoil Ünitesi" "Güneş Enerjisi" Jeotermal Şömine VRV "Isı Pompası"
  balcony: { type: Boolean },
  furnished: { type: Boolean },
  inSite: { type: Boolean },
  usageStatus: { type: String }, //Boş Kiracılı Mülk Sahibi
  dues: { type: Number },
  swap: { type: Boolean },
  side: { type: String }, //Batı Doğu Güney Kuzey
  favedBy: { type: Array, default: [] },
  img: { type: Array, default: [] }
});

module.exports = Listing = mongoose.model("Listing", ListingSchema);
