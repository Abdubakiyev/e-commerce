import React, { useState } from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';

export default function SearchBar() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="bg-white shadow p-4 flex flex-col items-center">
      <div className="flex gap-2 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="flex-1 border border-gray-300 px-4 py-2 rounded outline-none"
        />

        <button
          onClick={toggleAdvanced}
          className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition"
        >
          <FaSlidersH />
          <span className="text-sm">Advanced</span>
        </button>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          <FaSearch />
          Search
        </button>
      </div>

      {showAdvanced && (
        <div className="mt-4 w-full max-w-4xl bg-white shadow-lg p-6 rounded border">
          {/* Address Section */}
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <div className="grid grid-cols-4 gap-4">
              <input type="text" placeholder="Country" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Region" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="City" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Zip code" className="border px-3 py-2 rounded" />
            </div>
          </div>

          {/* Apartment Info Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Apartment info</h3>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" placeholder="Rooms" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Size" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Sort" className="border px-3 py-2 rounded" />
            </div>
          </div>

          {/* Price Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Min price" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Max price" className="border px-3 py-2 rounded" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={toggleAdvanced}
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
