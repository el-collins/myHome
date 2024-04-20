import axios from "axios";
import React, { useState } from "react";

const PostYourHouse = () => {
  const [pop, setPOP] = useState(false);
  const [water, setWater] = useState(false);
  const [property, setProperty] = useState({
    name: "",
    price: 0,
    property_type: "",
    phone_number: "",
    street_address: "",
    area: "",
    state: "Enugu",
    number_of_rooms: 0,
    number_of_toilets: 0,
    running_water: false,
    POP_available: false,
  });
  const upload ={
      "name": property.name,
      "price": property.price,
      "property_type": property.property_type,
      "phone_number": "+2347084857362",
      "property_location_details": {
        "street_address": property.street_address,
        "area": property.area,
        "state": "Enugu"
      },
      "property_features": {
        "number_of_rooms": property.number_of_rooms,
        "number_of_toilets": property.number_of_toilets,
        "running_water": property.running_water,
        "POP_available": property.POP_available
      }
    }

  const updatePost = (e) => {
    const { name, value } = e.target;
    if (name === "running_water" || name === "POP_available") {
      setProperty((prevProperty) => ({
        ...prevProperty,
        property_features: {
          ...prevProperty.property_features,
          [name]: e.target.checked,
        },
      }));
    } else {
      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: value,
      }));
    }
  };

  const post = () => {
    axios.post("https://f459-105-120-130-202.ngrok-free.app/api/v1/property", upload).then().catch
    console.log(property);
    console.log(upload);
  };

  const togglePop = () => {
    setProperty((prevProperty) => ({...prevProperty,
      POP_available : !property.POP_available 
    }));
    console.log(property.POP_available);
  };

  const toggleWater = () => {
    setProperty((prevProperty) => ({...prevProperty,
      running_water : !property.running_water 
    }))
    console.log(property.running_water);
  };

  const handleClose = () => {
    document.getElementById("post_your_house_modal").close();
  };

  return (
    <div className="p-4 pb-[50px] pl-5 border flex flex-col items-center justify-center rounded-[20px] bg-white">
      <div className="text-center w-full p-2 pb-4 relative border-b-[1px]">
        <button
          type="button"
          onClick={handleClose}
          className="absolute left-0 top-0 bg-transparent"
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
        <div className="flex justify-between">
          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label
              htmlFor="location"
              className="text-black block absolute p-1 -mt-4 ml-3"
            >
              Listing Name*
            </label>
            <input
              onChange={updatePost}
              name="name"
              type="text"
              id="location"
              placeholder="Input a name for the property being listed"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
          <div className="mt-4 w-[350px] rounded-lg p-2 ">
            <label
              htmlFor="category"
              className="absolute ml-3 text-black block -mt-4 p-1"
            >
              Category*
            </label>
            <input
              onChange={updatePost}
              name="property_type"
              type="text"
              id="category"
              placeholder="Duplex, Flats, Bungalow, selfcon, single room"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label className="text-black block absolute p-1 -mt-4 ml-3">
              Address*
            </label>
            <input
              onChange={updatePost}
              name="street_address"
              type="text"
              id="Address"
              placeholder="31 ABC street"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>

          <div className="mt-4 w-[350px] rounded-lg p-2">
            <label className="text-black block absolute p-1 -mt-4 ml-3">
              Area*
            </label>
            <input
              onChange={updatePost}
              name="area"
              type="text"
              id="area"
              placeholder="Trans-Ekulu"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mt-4 rounded-lg p-2">
            <label className="text-black block absolute p-1 -mt-4 ml-3">
              Amount*
            </label>
            <label className="text-black block absolute p-1 mt-3 text-[20px] bg-transparent ml-3">
              &#8358;
            </label>
            <input
              onChange={updatePost}
              name="price"
              type="text"
              id="Amount"
              placeholder=""
              className="w-[340px] pl-11 px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
            />
          </div>
          <div className="mt-4 w-[390px] flex flex-wrap gap-4 justify-start pl-11 items-center">
            <div className="flex gap-1">
              <p>Rooms</p>
              <select
                id="rooms"
                name="number_of_rooms"
                onChange={updatePost}
                className="border-[1px] border-[black] outline-none text-black p-0 h-6 flex items-center justify-center text-center"
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex gap-1">
              <p>Baths</p>
              <select
                id="baths"
                name="number_of_toilets"
                onChange={updatePost}
                className="border-[1px] border-[black] outline-none appearance-none h-6 flex items-center justify-center text-center p-0"
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <p>POP</p>
              <div
                onClick={togglePop}
                className="w-6 h-6 border-black border-[1px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 bg-transparent ${
                    property.POP_available ? "block" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
            <div onClick={toggleWater} className="flex gap-1 items-center">
              <p>Flowing water</p>
              <div className="w-6 h-6 border-black border-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 bg-transparent ${
                    property.running_water ? "block" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full mt-4">
        <p className="text-black ml-5 mb-1">Add Photos</p>
        <div className="w-full pl-5 flex justify-between">
          <div className="flex flex-col">
            <input
              type="file"
              name="file"
              multiple
              className="mt-4 file:bg-[#575DFB] file:rounded-sm"
            />
            <input type="file" name="file" multiple className="mt-4" />
          </div>
          <div className="flex flex-col">
            <input type="file" name="file" multiple className="mt-4" />
            <input type="file" name="file" multiple className="mt-4" />
          </div>
        </div>
      </div> */}

      {/* <div className="mt-2 w-full pl-3">
        <p className="text-xs text-black ">Supported format is *.jpg</p>
        <p className="font-x w-[60%] mt-5">
          First picture is the cover photo. You can change the order of photos:
          just grab your photos and drag.
        </p>
      </div> */}

      <button
        onClick={post}
        className=" mt-6 bg-[#575DFB] w-[40%] hover:bg-[#575DFB90] text-white h-[50px] rounded-[10px]"
      >
        Next
      </button>
      <p className="text-[11px]">click next to upload images</p>

    </div>
  );
};

export default PostYourHouse;
