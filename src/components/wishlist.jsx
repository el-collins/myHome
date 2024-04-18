import React from 'react';

const Wishlist = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg bg-gray-100">
      {/* Header */}
      <div className="bg-white text-purple-800 rounded-t-lg text-center py-2">
        <h2 className="text-lg font-bold">Create Wishlist</h2>
      </div>

      {/* Welcome message */}
      <div className="mt-4 text-center text-black">
        <p>Welcome back to <strong>myHome!</strong></p>
      </div>

      {/* Form */}
      <div className="mt-4">
        <label htmlFor="wishlist-name" className="">
          Name
        </label>
        <input
          type="text"
          id="wishlist-name"
          placeholder="My Wishlist"
          maxLength="50"
          className="w-full px-4 py-2 mt-1 border rounded-lg"
        />
        <p className="text-xs text-black mt-1">15/50 characters</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300">
          Clear
        </button>
        <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-purple-700">
          Create
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
