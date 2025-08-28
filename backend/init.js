const mongoose = require("mongoose");
const Perfume = require("./models/perfume.js"); 

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/perfumeStore");
}

let allPerfumesData = [
  {
    name: "Eternal Bloom",
    brand: "Flora Essence",
    description: "A floral blend of rose, jasmine, and peony for a fresh, romantic scent.",
    price: 2499,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Midnight Noir",
    brand: "Luxe Aroma",
    description: "A bold fragrance with notes of oud, amber, and sandalwood for evening wear.",
    price: 3499,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Ocean Breeze",
    brand: "Aqua Scent",
    description: "Fresh marine notes with citrus and lavender for a cool, uplifting vibe.",
    price: 1999,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml"],
    created_at: new Date(),
  },
  {
    name: "Golden Aura",
    brand: "Elite Perfumes",
    description: "Luxurious mix of vanilla, musk, and patchouli for a warm, lasting fragrance.",
    price: 4299,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Citrus Charm",
    brand: "Fresh Notes",
    description: "Zesty lemon, bergamot, and grapefruit for an energetic and refreshing scent.",
    price: 1599,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml"],
    created_at: new Date(),
  },
  {
    name: "Eternal Bloom",
    brand: "Flora Essence",
    description: "A floral blend of rose, jasmine, and peony for a fresh, romantic scent.",
    price: 2499,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Midnight Noir",
    brand: "Luxe Aroma",
    description: "A bold fragrance with notes of oud, amber, and sandalwood for evening wear.",
    price: 3499,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Ocean Breeze",
    brand: "Aqua Scent",
    description: "Fresh marine notes with citrus and lavender for a cool, uplifting vibe.",
    price: 1999,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml"],
    created_at: new Date(),
  },
  {
    name: "Golden Aura",
    brand: "Elite Perfumes",
    description: "Luxurious mix of vanilla, musk, and patchouli for a warm, lasting fragrance.",
    price: 4299,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["50ml", "100ml"],
    created_at: new Date(),
  },
  {
    name: "Citrus Charm",
    brand: "Fresh Notes",
    description: "Zesty lemon, bergamot, and grapefruit for an energetic and refreshing scent.",
    price: 1599,
    image: "https://i.postimg.cc/CxZygMDG/3.webp",
    sizes: ["30ml", "50ml"],
    created_at: new Date(),
  },
];



Perfume.insertMany(allPerfumesData)
  .then(() => {
    console.log("Perfume data inserted successfully!");
  })
  .catch((err) => {
    console.log("Error inserting perfumes:", err);
  });
