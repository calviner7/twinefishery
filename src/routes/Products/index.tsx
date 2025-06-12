import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fishData = [
  {
    name: "Hybrid Grouper",
    scientificName: "Epinephelus Fuscoguttatus",
    wallpaper: "deepsea",
    image:
      "https://res.cloudinary.com/do4q8ygop/image/upload/v1745588814/hybridgrouper_oummpt.png",
    nutrition: {
      length: "60-100cm",
      energy: "290kJ",
      protein: "15g",
      fat: "1.0g",
    },
    profile: {
      length: "60-100cm",
      weight: "1.5kg",
      availability: "Year round, peaking Jun to Sep",
      quota: "43,784 GWT",
    },
  },
  {
    name: "Hybrid Grouper",
    scientificName: "Epinephelus Fuscoguttatus",
    wallpaper: "deepsea",
    image:
      "https://res.cloudinary.com/do4q8ygop/image/upload/v1745588814/hybridgrouper_oummpt.png",
    nutrition: {
      length: "40-70cm",
      energy: "260kJ",
      protein: "20g",
      fat: "0.8g",
    },
    profile: {
      length: "40-70cm",
      weight: "1.2kg",
      availability: "May to Oct",
      quota: "30,000 GWT",
    },
  },
  {
    name: "Hybrid Grouper",
    scientificName: "Epinephelus Fuscoguttatus",
    wallpaper: "deepsea",
    image:
      "https://res.cloudinary.com/do4q8ygop/image/upload/v1745588814/hybridgrouper_oummpt.png",
    nutrition: {
      length: "50-90cm",
      energy: "270kJ",
      protein: "18g",
      fat: "0.9g",
    },
    profile: {
      length: "50-90cm",
      weight: "1.4kg",
      availability: "Year round",
      quota: "25,000 GWT",
    },
  },
];

export default function FishGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFish = fishData[selectedIndex];

  return (
    <div
      className="w-full h-full overflow-hidden text-white flex flex-col"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/do4q8ygop/image/upload/v1745588899/${selectedFish.wallpaper}_kf59c1.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <header className="flex justify-between items-center p-4 border-white/20">
        <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Our Seafood
        </h1>
        <button className="bg-white text-black rounded px-4 py-2 text-xs sm:text-sm">
          Switch to Crustaceans
        </button>
      </header>

      <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 md:px-16 gap-6 md:gap-12">
        {/* Fish Image + Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left"
          >
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                  {selectedFish.name}
                </h2>
                <h3 className="text-lg font-normal text-gray-400 mt-2 md:text-xl">
                  <i>{selectedFish.scientificName}</i>
                </h3>
              </div>
              <img
                src={selectedFish.image}
                alt={selectedFish.name}
                className="w-full md:w-[600px] h-auto mb-8 rounded-lg shadow-lg"
              />
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Nutrition</h3>
                  <p>Length: {selectedFish.nutrition.length}</p>
                  <p>Energy: {selectedFish.nutrition.energy}</p>
                  <p>Protein: {selectedFish.nutrition.protein}</p>
                  <p>Fat: {selectedFish.nutrition.fat}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Profile</h3>
                  <p>Length: {selectedFish.profile.length}</p>
                  <p>Weight: {selectedFish.profile.weight}</p>
                  <p>Availability: {selectedFish.profile.availability}</p>
                  <p>Quota: {selectedFish.profile.quota}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Fish Selection */}
        <div className="flex flex-wrap justify-center md:flex-col gap-4 md:gap-6 mt-6 md:mt-0">
          {fishData.map((fish, index) => (
            <button
              key={fish.name}
              className={`w-16 h-16 md:w-20 md:h-20 sm:w-24 sm:h-24 rounded-full border-2 transition-all duration-200 ${
                selectedIndex === index ? "border-white" : "border-white/30"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={fish.image}
                alt={fish.name}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
