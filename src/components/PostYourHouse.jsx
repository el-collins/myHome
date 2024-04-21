import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useUser } from "./Provider/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostYourHouse = () => {
  const [property, setProperty] = useState({
    name: "",
    price: "",
    property_type: "",
    phone_number: "",
    street_address: "",
    area: "",
    state: "",
    number_of_rooms: 0,
    number_of_toilets: 0,
    running_water: false,
    POP_available: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isWater, setIsWater] = useState(false);
  const [image, setImage] = useState(null);
  const [isPop, setIsPop] = useState(false);
  const { token, currentUser } = useUser();
  const ENDPOINT = "https://my-home-xlox.onrender.com";

  const handleChange = (event) => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

    const areValidFiles = files.every((file) =>
      validImageTypes.includes(file.type)
    );

    if (areValidFiles) {
      setImage(files);
    } else {
      toast.error("Invalid file input, please select only image files.");
      event.target.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image || image.length === 0) {
      toast.error("Please upload an image.");
      return;
    }
    setIsLoading(true);

    const upload = {
      name: property.name,
      price: property.price,
      property_type: property.property_type,
      phone_number: currentUser.phone_number,
      property_location_details: {
        street_address: property.street_address,
        area: property.area,
        state: property.state,
      },
      property_features: {
        number_of_rooms: property.number_of_rooms,
        number_of_toilets: property.number_of_toilets,
        running_water: isWater,
        POP_available: isPop,
      },
    };

    const formData = new FormData();

    for (const key in upload) {
      if (key === "property_location_details" || key === "property_features") {
        formData.append(key, JSON.stringify(upload[key]));
      } else {
        formData.append(key, upload[key]);
      }
    }

    for (const file of image) {
      formData.append("images", file);
    }
    const postProperty = () => {
      return axios.post(`${ENDPOINT}/properties`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    };
    toast
      .promise(postProperty(), {
        pending: "Posting property...",
        success: "Property posted successfully!",
        error: "Error posting property.",
      })
      // .then(() => {
      //   handleClose();
      // }) .catch((error) => {
      //   toast.error(`Error posting property: ${error.message}`);
      //   setIsLoading(false);
      //   window.location.reload();
      // })
      .finally(() => {
        handleClose();
        setIsLoading(false);
        // set a timer to reload the page after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);

        // window.location.reload();
      });
  };

  const handleClose = () => {
    document.getElementById("post_your_house_modal").close();
  };

  return (
    <div className="p-6 border flex flex-col items-center justify-center rounded-[20px] bg-white">
      <div className="text-center w-full p-2 pb-4 relative border-b-[1px]">
        <button
          type="button"
          onClick={() => {
            handleClose();
          }}
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

      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <div className="flex justify-between">
            <div className="mt-4 w-[350px] rounded-lg p-2">
              <label
                htmlFor="name"
                className="text-black block absolute p-1 -mt-4 ml-3"
              >
                Listing Name*
              </label>
              <input
                autoComplete="off"
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                required
                placeholder="Name for the property to be listed"
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
                autoComplete="off"
                onChange={handleChange}
                name="property_type"
                type="text"
                id="category"
                required
                placeholder="Duplex, Flats, Bungalow, Selfcon, Single room"
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
                autoComplete="off"
                onChange={handleChange}
                name="street_address"
                type="text"
                id="Address"
                required
                placeholder="14 Golf view layout"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
              />
            </div>

            <div className="mt-4 w-[350px] rounded-lg p-2">
              <label className="text-black block absolute p-1 -mt-4 ml-3">
                Area*
              </label>
              <input
                autoComplete="off"
                onChange={handleChange}
                name="area"
                type="text"
                id="area"
                required
                placeholder="Trans-Ekulu"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="mt-4 rounded-lg p-2">
              <label className="text-black block absolute p-1 -mt-4 ml-3">
                Amount*
              </label>
              <label className="text-black block absolute p-1 mt-3 text-[20px] bg-transparent ml-3">
                &#8358;
              </label>
              <input
                autoComplete="off"
                onChange={handleChange}
                name="price"
                type="text"
                id="Amount"
                required
                value={property.price}
                placeholder="400,000"
                className="w-[340px] pl-11 px-4 py-2 border rounded-lg focus:outline-none h-[50px] border-[#575DFB]"
              />
            </div>

            <div className="mt-4 flex justify-between items-center gap-1">
              <div className="">
                <select
                  name="number_of_rooms"
                  className="w-full h-[50px] rounded-[10px] border border-[#C4C4C4] pl-4"
                  onChange={(e) =>
                    setProperty({
                      ...property,
                      number_of_rooms: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Number of Rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="">
                <select
                  name="number_of_toilets"
                  className="w-full h-[50px] rounded-[10px] border border-[#C4C4C4] pl-4"
                  onChange={(e) =>
                    setProperty({
                      ...property,
                      number_of_toilets: e.target.value,
                    })
                  }
                  required
                >
                  <option value="" defaultValue>
                    Number of Toilets
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          <div className="w-full pl-5 flex justify-between">
            <div className="flex flex-col">
              <input
                type="file"
                name="file"
                multiple
                className="mt-4 file:bg-[#575DFB] file:rounded-sm"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex gap-1 items-center">
              <label>Has POP?</label>
              <input
                type="checkbox"
                className="rounded-md w-6 h-6 ml-2"
                checked={isPop}
                onChange={() => setIsPop(!isPop)}
              />
            </div>

            <div className="flex gap-1 items-center">
              <p>Running water?</p>
              <input
                type="checkbox"
                className="rounded-md w-6 h-6 ml-2"
                checked={isWater}
                onChange={() => setIsWater(!isWater)}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`sm:w-[420px] h-[50px] w-[350px] my-8 rounded-[10px] bg-[#575DFB] text-white  transition duration-200 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#434BE6]"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader className="bg-transparent" color="#ffffff" />
          ) : (
            "Upload"
          )}
        </button>
      </form>
    </div>
  );
};

export default PostYourHouse;
