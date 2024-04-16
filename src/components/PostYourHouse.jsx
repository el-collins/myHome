import React from 'react';

const PostYourHouse = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg bg-white">
      {/* Post Your House Header */}
      <div className="bg-white text-purple-700 text-center py-2 relative">
        <h2 className="text-lg font-bold">Post Your House</h2>
        <div className="h-full absolute right-0 top-0 bg-white w-1"></div>
      </div>

      {/* Category Input */}
      <div className="mt-4 rounded-lg p-2 ">
        <label htmlFor="category" className="text-black block mb-1">Category*</label>
        <input
          type="text"
          id="category"
          placeholder="Houses and Apartments for Rent"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple"
        />
      </div>

      {/* Select Location Input */}
      <div className="mt-4 rounded-lg p-2">
        <label htmlFor="location" className="text-black block mb-1">Select Location*</label>
        <input
          type="text"
          id="location"
          placeholder="Enugu Trans-Ekulu"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-600"
        />
      </div>

      {/* Add Photos Section */}
      <div className="mt-4">
        <p className="text-black mb-1"><strong>Add Photos</strong></p>
        <p className="text-black mb-1">Add at least 5 photos for this category</p>
        <p className='font-x'>First picture is the cover photo. You can change the order of photos: just grab your photos and drag.</p>
        <div className="bg-purple-600 w-20 h-20 flex items-center justify-center rounded-lg mt-2">
          <span className=" text-2">+</span>
        </div>
        <p className="text-xs text-black mt-2">Supported formats are *.jpg and *.png</p>
      </div>

      {/* Verify Button */}
      <button className="mt-4 bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full w-full">
        Verify
      </button>
    </div>
  );
};

export default PostYourHouse;
