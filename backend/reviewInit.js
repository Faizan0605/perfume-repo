const mongoose = require("mongoose");
const Review = require("./models/reviews.js"); // adjust path if needed

main()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/perfumeStore");
}

// Sample reviews data (without productId)
let reviewsData = [
  {
    username: "John Doe",
    rating: 5,
    comment: "Absolutely love this perfume! Smells amazing and lasts all day.",
    createdAt: new Date(),
  },
  {
    username: "Emily Smith",
    rating: 4,
    comment: "Nice fragrance, but I wish it lasted a bit longer.",
    createdAt: new Date(),
  },
  {
    username: "Michael Brown",
    rating: 5,
    comment: "My favorite perfume! Will definitely buy again.",
    createdAt: new Date(),
  },
  {
    username: "Sarah Lee",
    rating: 4,
    comment: "Great scent, perfect for daily wear.",
    createdAt: new Date(),
  },
  {
    username: "David Johnson",
    rating: 5,
    comment: "Elegant and long-lasting fragrance. Highly recommend!",
    createdAt: new Date(),
  },
  {
    username: "Olivia Williams",
    rating: 4,
    comment: "Beautiful scent, but a bit pricey.",
    createdAt: new Date(),
  }
];

// Insert all reviews
Review.insertMany(reviewsData)
  .then(() => {
    console.log("Reviews inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error inserting reviews:", err);
    mongoose.connection.close();
  });
