import React from "react";
import { useParams } from "react-router-dom";
import { HOMES } from "../../assets/data/homes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const propertyId = Number(id);
  const property = HOMES.find((home) => home.id === propertyId);

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 text-black">
      <h1 className="text-2xl font-semibold my-4">{property.value.location}</h1>
{/* grid grid-cols-1 md:grid-cols-2 gap-8 */}
      <div className="">
        <div className="md:col-span-1">
          <Carousel>
            {property.value.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="md:col-span-1">
          <p className="text-black">{property.value.address}</p>
          <p className="text-3xl font-bold mt-2">
            ₦ {property.value.amount}.00
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <p className="text-black">{property.value.reviews}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-black">{property.value.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
