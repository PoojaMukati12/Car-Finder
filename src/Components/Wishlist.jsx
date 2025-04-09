import React from "react";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-2">Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist.</p>
      ) : (
        <ul className="space-y-2">
          {wishlist.map(car => (
            <li key={car.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              {car.name}
              <button onClick={() => removeFromWishlist(car.id)} className="text-red-500">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
