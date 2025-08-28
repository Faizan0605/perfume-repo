const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB (ensure your URI specifies the correct database)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "perfumeStore" // explicitly set the database
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Perfume schema
const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true }, // Full description
  price: { type: Number, required: true },
  image: String, // URL or base64
  sizes: [{ type: String }], // e.g., ["30ml", "50ml", "100ml"]
  created_at: { type: Date, default: Date.now },
});

// Review schema 
const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

// 'perfumes' is the collection name
const Perfume = mongoose.model("Perfume", perfumeSchema);


// API route to get all perfumes
app.get("/api/perfumes", async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);    // send as JSON response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//api for aingle perfume
app.get("/api/perfumes/:id", async (req, res) => {
    const perfume = await Perfume.findById(req.params.id);
    res.json(perfume);
});

// Get all reviews
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new review
app.post("/api/reviews", async (req, res) => {
  try {
    const { username, rating, comment } = req.body;
    const review = new Review({ username, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5221;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
