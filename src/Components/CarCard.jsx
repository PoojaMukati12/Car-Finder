import React from "react";

const CarCard = ({ car, wishlist, addToWishlist, removeFromWishlist }) => {
  const isWished = wishlist.some(item => item.id === car.id);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-xl mb-3 transition-opacity duration-300 hover:opacity-90"
      />
      <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
      <p className="text-sm text-gray-500">{car.brand} • {car.fuelType}</p>
      <p className="text-lg text-indigo-600 font-semibold mt-1">${car.price.toLocaleString()}</p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-600">{car.seatingCapacity} Seats</span>
        <button
          onClick={() => isWished ? removeFromWishlist(car.id) : addToWishlist(car)}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
            isWished
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          {isWished ? "💔 Remove" : "❤️ Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
