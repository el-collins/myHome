import { HOMES } from "../../assets/data/homes";
import "./style.css";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate  } from "react-router-dom";

export default function Card({newHome, setNewHome}) {
  const navigate = useNavigate();
  
  const liked = (id) => {
    const newFavourite = newHome.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setNewHome(newFavourite)
  };
  
  const redirectToDetails = (id) => {
    // Redirect to the details page for the selected property
    navigate(`/property/${id}`);
  };
  
  return (
    <div className="min-h-screen flex flex-wrap gap-6 justify-center mt-5">
      {newHome.map((home,id) => (
        <div key={id} className="singleCard pb-6">
          <svg
            onClick={() => liked(home.id)}
            xmlns="http://www.w3.org/2000/svg"
            fill= {`${home.checked ? "red" :"#00000070" }`}
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

          <Carousel className="carouselImg" >
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
