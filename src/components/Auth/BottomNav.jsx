import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserContext";

export const BottomNav = () => {
  const navigate = useNavigate();
  const urlLocation = useLocation();
  const { currentUser, loading, token } = useUser();
  const [wishlist, setWishlist] = useState(false);
  const [explore, setExplore] = useState(false);
  const [profile, setProfile] = useState(false);

  const isUserProfile = urlLocation.pathname.includes("/user/profile");
  const isWishlistPage = urlLocation.pathname.includes("/wishlistpage");

  useEffect(() => {
    isWishlistPage ? setWishlist(true) : setProfile(false);
    isUserProfile ? setProfile(true) : setWishlist(false);
    !isWishlistPage && !isUserProfile
      ? setExplore(true)
      : (setProfile(false), setWishlist(false));
  }, []);

  const toggleWishlist = () => {
    currentUser
      ? (navigate("/wishlistpage"),
        setExplore(false),
        setProfile(false),
        setWishlist(true))
      : document.getElementById("my_modal_4").showModal();
  };

  const toggleExplore = () => {
    navigate("/");
    setExplore(true);
    setProfile(false);
    setWishlist(false);
  };

  const toggleProfile = () => {
    currentUser
      ? (navigate("/user/profile"),
        setExplore(false),
        setProfile(true),
        setWishlist(false))
      : document.getElementById("my_modal_4").showModal();
  };

  return (
    <div className="fixed border-t-[1px] sm:hidden z-50 bottom-0 left-0 right-0 pt-2 pb-1 bg-white ">
      <div className=" flex items-center gap-[30px] justify-center">
        <button
          onClick={() => {
            toggleExplore();
          }}
          className={`flex flex-col items-center  ${
            explore ? "text-[#575DFB]" : "text-[#00000080]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={` w-6 h-6 ${
              explore ? "text-[#575DFB]" : "text-[#00000080]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <p
            className={`${
              explore ? "text-[#575DFB]" : "text-[#00000080]"
            } text-[12px]`}
          >
            Explore
          </p>
        </button>
        <button
          onClick={() => {
            toggleWishlist();
          }}
          className="flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isWishlistPage ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={` w-6 h-6  ${
              isWishlistPage ? "text-white" : "text-[#00000080]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <p
            className={`${
              isWishlistPage ? "text-[#575DFB]" : "text-[#00000080]"
            } text-[12px]`}
          >
            Wishlists
          </p>
        </button>
        <button
          onClick={() => {
            toggleProfile();
          }}
          className="flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={` w-6 h-6  ${
              isUserProfile ? "text-[#575DFB]" : "text-[#00000080]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p
            className={`${
              isUserProfile ? "text-[#575DFB]" : "text-[#00000080]"
            } text-[12px]`}
          >
            {currentUser? "Profile" : "Log in"}
          </p>
        </button>
      </div>
    </div>
  );
};
