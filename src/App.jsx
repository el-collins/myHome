import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HOMES } from "../src/assets/data/homes";
import Card from "./components/Card/Card";
import Header from "../src/components/header/index";
import { BottomNav } from "./components/Auth/BottomNav";
import PropertyDetails from "./components/propetrydetails/PropertyDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from './components/wishlist'; // Correct import with uppercase
import PostYourHouse from './components/PostYourHouse';
import axios from "axios";
import UserProfile from "./components/userprofile/UserProfile";
import { UserProvider } from "./components/Provider/UserContext";

function App() {
  const [newHome, setNewHome] = useState(HOMES);
  const [location, setLocation] = useState(false);
  const [cheapest, setCheapest] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [showWishlist, setShowWishlist] =useState(false);
  const [propertyList, setPropertyList] = useState([{}]);

  const ENDPOINT = "https://3f77-105-120-130-202.ngrok-free.app/";

  useEffect(() => {
    const response = axios.get(`${ENDPOINT}/api/v1/properties`).then((res) => {
      setPropertyList(res.data);
    });
  });

  // Function to fetch wishlist items from the API

  const searchLocation = () => {
    setLocation(!location);
    setCheapest(false);
    setNewHome(HOMES);
  };

  const searchCheapest = () => {
    const prices = HOMES.filter((x) => x.value.amount !== null);
    prices.sort((a, b) => a.value.amount - b.value.amount);
    const sorted = [...prices];
    setCheapest((prev) => !prev);
    setLocation(false);
    setNewHome(cheapest ? HOMES : sorted);
  };

  const uniqueLocations = [...new Set(HOMES.map((items) => items.value.LGA))];

  const filterSearch = (LGA) => {
    const filteredSearch = HOMES.filter((items) => items.value.LGA === LGA);
    setNewHome(filteredSearch);
    setLocation(!location);
  };
  const filterSearchMobile = (LGA) => {
    const filteredSearch = HOMES.filter((items) => items.value.LGA === LGA);
    setNewHome(filteredSearch);
  };
  const toggleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };

  return (
    <div className="text-black">
      <Header
        searchLocation={searchLocation}
        location={location}
        uniqueLocations={uniqueLocations}
        cheapest={cheapest}
        searchCheapest={searchCheapest}
        filterSearch={filterSearch}
        setNewHome={setNewHome}
        setLocation={setLocation}
        toggleMobileFilter={toggleMobileFilter}
        mobileFilter={mobileFilter}
        filterSearchMobile={filterSearchMobile}
      />
      <div className="">

          <Routes>
            <Route
              exact
              path="/"
              element={<Card newHome={newHome} setNewHome={setNewHome} />}
            />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Routes>
      </div>
      <BottomNav />
      <ToastContainer />
      {/* <Wishlist/> */}
      {/* <PostYourHouse /> */}
      
       
    </div>
  );
}

export default App;
