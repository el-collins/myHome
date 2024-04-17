import { HOMES } from "../../assets/data/homes";
import "./style.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../Provider/UserContext";

export default function Card({ newHome, setNewHome }) {
  const { currentUser } = useUser(); // Access the currentUser from user context
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  
  console.log(currentUser);
  const token = localStorage.getItem("token");
  console.log(token);

  const ENPOINT = "http://127.0.0.1:8000";

  // Fetch the user's wishlist when the component is mounted
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`${ENPOINT}/wishlist/`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        // Update the wishlist state with the fetched wishlist
        setWishlist(new Set(response.data.map((item) => item.property_id)));
        setIsLoading(false); // Set isLoading to false after the data has been fetched
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Also set isLoading to false if an error occurs
      }
    };

    fetchWishlist();
  }, []); // Empty dependency array means this effect will only run once, when the component is mounted

  const addToWishlist = async (propertyId) => {
    if (wishlist.has(propertyId)) {
      // Property is already in wishlist, remove it
      try {
        const response = await axios.delete(
          `${ENPOINT}/wishlist/${propertyId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Remove property from local state
        setWishlist((prevWishlist) => {
          const newWishlist = new Set(prevWishlist);
          newWishlist.delete(propertyId);
          return newWishlist;
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      // Property is not in wishlist, add it
      try {
        // /wishlist/?property_id=afd'
        const response = await axios.post(
          `${ENPOINT}/wishlist/?property_id=${propertyId}`,
          {},
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        // Add property to local state
        setWishlist((prevWishlist) => {
          const newWishlist = new Set(prevWishlist);
          newWishlist.add(propertyId);
          return newWishlist;
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // const liked = async (id) => {
  //   if (!currentUser) {
  //     navigateToLogin();
  //     return;
  //   }

  //   try {
  //     // Assuming your backend API endpoint for adding to wishlist is '/wishlist'
  //     await axios.post("/wishlist", { property_id: id });

  //     const newFavourite = newHome.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, checked: !item.checked };
  //       }
  //       return item;
  //     });

  //     setNewHome(newFavourite);
  //   } catch (error) {
  //     console.error("Error adding property to wishlist:", error);
  //   }
  // };

  const liked = (id) => {
    const newFavourite = newHome.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setNewHome(newFavourite);
  };

  const redirectToDetails = (id) => {
    // Redirect to the details page for the selected property
    navigate(`/property/${id}`);
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
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
    // </div>
  ) : (
    <div className="min-h-screen flex flex-wrap gap-6 justify-center mt-5">
      {newHome.map((home, id) => (
        <div key={id} className="singleCard pb-6">
          <svg
            onClick={() => {
              addToWishlist(home.id);
              // liked(home.id);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={`${wishlist.has(home.id) ? "red" : "#00000070"}`}
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
    </div>
  );
}
