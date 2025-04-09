

import React, { useEffect, useState } from "react";
// import CarCard from "./components/CarCard";
import CarCard from "./Components/CarCard";
// import Filters from "./components/Filters";
import Filters from "./Components/Filters";
// import Wishlist from "./components/Wishlist";
import Wishlist from "./Components/Wishlist";

const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch mock data
  useEffect(() => {
    fetch("/data/cars.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch(err => {
        console.error("Error loading car data:", err);
      });
  }, []);
  const addToWishlist = (car) => {
    const updated = [...wishlist, car];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(car => car.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🚗 Car Finder App</h1>
      <Filters cars={cars} setFilteredCars={setFilteredCars} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filteredCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            wishlist={wishlist}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
          />
        ))}
      </div>
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  );
};

export default App;

