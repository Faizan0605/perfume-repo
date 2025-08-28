const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true }, // Full description
  price: { type: Number, required: true },
  image: String, // URL or base64
  sizes: [{ type: String }], // e.g., ["30ml", "50ml", "100ml"]
  created_at: { type: Date, default: Date.now },
});

const Perfume = mongoose.model("Perfume", perfumeSchema);

module.exports = Perfume;
