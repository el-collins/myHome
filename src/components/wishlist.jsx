import React from 'react';

const Wishlist = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bottom-20 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-full h-full w-full bg-white rounded-lg p-8 relative">
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4">My Wishlist</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src="..\public\Images\Enugu house1.jpg"
                alt="House 2"
                className="rounded-lg h-[400px] w-[1000px] object-cover"
              />
              <div>
                <p className="text-black text-xl">New Haven, Enugu</p>
                <p className="text-slate-400 text-xl">8 Umualor street</p>
                <p className="text-black text-xl">&#8358;300,000.00</p>
              </div>
            </div>
            <div>
              <img
                src="..\public\Images\Enugu house2.jpg"
                alt="House 2"
                className="rounded-lg h-[400px] w-[1000px] object-cover"
              />
              <div className="text-xl">
                <p className="text-black">Independence Layout, Enugu</p>
                <p className="text-slate-400">12 Abananze street</p>
                <p className="text-black">&#8358;250,000.00</p>
              </div>
            </div>
            <div>
              <img
                src="..\public\Images\Enugu house3.jpg"
                alt="House 3"
                className="rounded-lg h-[400px] w-[1000px] object-cover"
              />
              <div className="text-xl">
                <p className="text-black">GRA, Enugu</p>
                <p className="text-slate-400">9b Wike street</p>
                <p className="text-black">&#8358;500,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
