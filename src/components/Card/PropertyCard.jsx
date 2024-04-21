import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';


function PropertyCard({
  property,
  index,
  toggleWishlist,
  currentUser,
  wishlist,
}) {
  const redirectToDetails = (id) => {
    console.log(id);
    window.location.href = `/property/${id}`;
    // const redirectToDetails = (id) => navigate(`/property/${id.toString()}`);
  };

  return (

    <div className="block rounded-lg bg-white w-72 ">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <svg
          onClick={() => toggleWishlist(property.id.toString())}
          xmlns="http://www.w3.org/2000/svg"
          fill={`${
            currentUser && wishlist.has(property.id) ? "red" : "#00000070"
          }`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8 absolute z-10 bg-transparent text-white mt-3 ml-[10px]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
 
        <Carousel className="">
          {property?.images.map((img) => (
            <div key={index} onClick={() => redirectToDetails(property.id)}>
              <img
                className="rounded-lg  sm:m-h-64 md:h-64 w-full"
                src={img}
                alt=""
              />
              <Link to={`property/${property.id}`}>
                {" "}
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </Link>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            {property.property_location_details.state}
          </h5>
          <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
            5.0{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </h5>
        </div>
        <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
          {property.property_location_details.area}
        </p>

        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {property.property_location_details.street_address}
        </p>
        <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
        
          &#8358;
          {(property.price).toLocaleString("en-NG", {})}
        </h5>
      </div>
    </div>
  );
}

export default PropertyCard;