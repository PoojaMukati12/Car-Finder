import React, { useState, useEffect } from "react";

const Filters = ({ cars, setFilteredCars }) => {
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = [...new Set(cars.map(car => car.brand.trim().toLowerCase()))]
      .map(b => b.charAt(0).toUpperCase() + b.slice(1));
    setBrands(uniqueBrands);
  }, [cars]);

  const handleFilter = () => {
    let result = [...cars];
    if (brand) {
      result = result.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
    }
    setFilteredCars(result);
  };

  return (
    <div className="flex items-center gap-4">
      <select
        className="border p-2 rounded"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        {brands.map((b, i) => (
          <option key={i} value={b}>{b}</option>
        ))}
      </select>
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;
