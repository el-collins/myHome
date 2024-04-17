import React from "react";

const PostYourHouse = () => {
  const handleClose = () => {
    document.getElementById("post_your_house_modal").close();
  };
  return (
    <div className="p-4 pb-[50px] pl-5 border flex flex-col items-center justify-center rounded-[20px] bg-white">
      <div className="text-center w-full p-2 pb-4 relative border-b-[1px]">
        <button
          type="button"
          onClick={handleClose}
          className=" absolute left-0 top-0 bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[30px] h-[30px] ml-1 bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 18 12-12M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg text-[#575DFB] font-bold">Post Your House</h2>
      </div>

      <div className="mt-6">
        <div className="flex gap-3">
          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label
              htmlFor="location"
              className="text-black block absolute p-1 -mt-4 ml-3"
            >
              Listing Name*
            </label>
            <input
              type="text"
              id="location"
              placeholder="Input a name for the property being listed"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
          <div className="mt-4 w-[350px] rounded-lg p-2 ">
            <label
              htmlFor="category"
              className="absolute ml-3  text-black block -mt-4 p-1"
            >
              Category*
            </label>
            <input
              type="text"
              id="category"
              placeholder="Duplex, Flats, Bungalow, selfcon, single room"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label
              htmlFor="location"
              className="text-black block absolute p-1 -mt-4 ml-3"
            >
              Address*
            </label>
            <input
              type="text"
              id="location"
              placeholder="31 ABC street"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>

          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label
              htmlFor="location"
              className="text-black block absolute p-1 -mt-4 ml-3"
            >
              Area*
            </label>
            <input
              type="text"
              id="location"
              placeholder="Trans-Ekulu"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mt-4 rounded-lg p-2">
            <label
              htmlFor="location"
              className="text-black block absolute p-1 -mt-4 ml-3"
            >
              Amount*
            </label>
            <label
              htmlFor="location"
              className="text-black block absolute p-1 mt-3 text-[20px] bg-transparent ml-3"
            >
              &#8358;
            </label>
            <input
              type="text"
              id="location"
              placeholder=""
              className="w-[340px] pl-11 px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div >
          <div className="mt-4 w-[370px] pl-1 flex justify-between items-center">
              <div>
                <p>rooms</p>
              </div>
              <div>
                <p>baths</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>POP ceiling</p>
                <div className="w-6 h-6  border-black border-[1px]"></div>
              </div>
              <div className="flex gap-1 items-center"> 
                <p>Flowing water</p>
                <div className="w-6 h-6  border-black border-[1px]"></div>

              </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="text-black ml-5 mb-1">Add Photos</p>
      <div className="w-full pl-5 flex justify-between">
        <div className="flex flex-col">
          <input type="file" name="file" multiple className="mt-4 file:bg-[#575DFB] file:rounded-sm" />
          <input type="file" name="file" multiple className="mt-4" />
        </div>
        <div className="flex flex-col">
          <input type="file" name="file" multiple className="mt-4" />
          <input type="file" name="file" multiple className="mt-4" />
        </div>
      </div>
      </div>
      

      <div className="mt-2 w-full pl-3">
        <p className="text-xs text-black ">
          Supported format is *.jpg 
        </p>
        <p className="font-x w-[60%] mt-5">
          First picture is the cover photo. You can change the order of photos:
          just grab your photos and drag.
        </p>
        
      </div>

      <button className="mt-4 bg-[#575DFB] w-[40%] hover:bg-[#575DFB90] text-white h-[50px] rounded-[10px]">
        Post
      </button>
    </div>
  );
};

export default PostYourHouse;
