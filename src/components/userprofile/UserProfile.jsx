import { useEffect, useState } from "react";
import { useUser } from "../Provider/UserContext";
import Cookies from "js-cookie";
import PropertyCard from "../Card/PropertyCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import EditButton from "./EditButton";
import { Card, Dropdown } from "flowbite-react";
// import Image from "next/image";

const UserProfile = () => {
  const ENDPOINT = "https://my-home-xlox.onrender.com";
  const [myProperties, setMyProperties] = useState([]);
  const {currentUser} = useUser();

  // add an account section to this code. where the user can change or update his profile, update his name, phone
  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get(`${ENDPOINT}/users/me/properties`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      console.log(response.data);
      setMyProperties(response.data);
    };

    if (currentUser?.id) fetchProperties();
  }, [currentUser?.id]);

  // Delete handler
  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(`${ENDPOINT}/users/me/properties/${propertyId}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      // Refresh the data in your component (e.g., remove the item from state)
      fetchProperties();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      {currentUser ? (
        <div className="w-full h-screen">
          <Card className="">
            <div className="flex justify-end px-4 pt-4">
              <Dropdown inline label="settings">
                <Dropdown.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Account Delete
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                alt="Bonnie image"
                height="96"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl text-gray-900 dark:text-white font-bold">
                {currentUser?.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Role: User
              </span>
              <div className="mt-4 flex justify-center items-center space-x-3 lg:mt-6">
                <p className="font-bold">Properties Listed:</p>

                <a
                  // href="#"
                  className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-base font-bold text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  {myProperties.length}
                </a>
              </div>
            </div>
          </Card>

          <div className="mt10 shadow-xl p-5 card">
            <h2 className="mt-5 text-2xl font-extrabold text-black sm:text-3xl text-left">
              My Properties
            </h2>
            {/* <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left">
          Here are the properties you have listed on our platform.
        </p> */}
            <div className="flex flex-wrap gap-6 justify-center items-center mt-5">
              {myProperties.map((property, index) => (
                <PropertyCard
                  key={index}
                  property={property}
                  index={index}
                  showLike={false}
                  showIcons={true}
                  // handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  // toggleWishlist={toggleWishlist}
                  // currentUser={currentUser}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </div>
  );
};

export default UserProfile;
