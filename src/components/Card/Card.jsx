import { HOMES } from "../../assets/data/homes";
import "./style.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../Provider/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card({ newHome, setNewHome }) {
  const { currentUser } = useUser(); // Access the currentUser from user context
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  // https://my-home-xlox.onrender.com/docs

  const ENDPOINT = "https://my-home-xlox.onrender.com";

  // Fetch the current user when the component is mounted
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/api/me`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data;

        setWishlist(new Set(user.wishlist));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentUser();
  }, []);
 

  const toggleWishlist = async (propertyId) => {
    if (!currentUser) {
      // User is not logged in, redirect to login page
      toast("User is not logged in");
      return;
    }
    
    try {
      const response = await axios.get(`${ENDPOINT}/api/me`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;

      // Create a new set based on the current wishlist
      const updatedWishlist = new Set([...wishlist]);

      // Check if property is in wishlist
      if (user.wishlist.includes(propertyId)) {
        // Property is in wishlist, remove it
        await axios.delete(
          `${ENDPOINT}/api/user/wishlist/?property_id=${propertyId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Update the wishlist state
        updatedWishlist.delete(propertyId);

        // Show toast message for property removed from wishlist
        toast("Property removed from wishlist");
      } else {
        // Property is not in wishlist, add it
        const response = await axios.post(
          `${ENDPOINT}/api/user/wishlist/?property_id=${propertyId}`,
          {},
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Update the wishlist state
        updatedWishlist.add(propertyId);

        // Show toast message for property added to wishlist
        toast("Property added to wishlist");
      }
      // Update the wishlist state with the new set
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <div className="flex items-center justify-center"> */}
      <div
        role="status"
        className="-translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    // </div>
    <div className="min-h-screen flex flex-wrap gap-6 justify-center mt-5">
      {newHome.map((home, id) => (
        <div key={id} className="singleCard pb-6">
          <svg
            onClick={() => toggleWishlist(home.id.toString())}
            xmlns="http://www.w3.org/2000/svg"
            fill={`${currentUser && wishlist.has(home.id) ? "red" : "#00000070"}`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 absolute z-10 bg-transparent text-white mt-3 ml-[10px]`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <Carousel className="carouselImg">
            {home.value.images.map((img) => (
              <div key={id} onClick={() => redirectToDetails(home.id)}>
                <img src={img} alt="" />
              </div>
            ))}
          </Carousel>
          <div className="infoDiv">
            <div className="location">
              <p className="pmain">{home.value.location}</p>
              <p className="p2">{home.value.address}</p>
              <p>&#8358; {home.value.amount}.00</p>
            </div>
            <div className="rating">
              <div className="star mt-1">
                <img src="./Images/Star 1.svg" alt="" />
              </div>

              <p>{home.value.rating}</p>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}
