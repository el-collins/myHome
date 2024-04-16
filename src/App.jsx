import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HOMES } from "../src/assets/data/homes";
import Card from "./components/Card/Card";
import Header from "../src/components/header/index";
import { BottomNav } from "./components/Auth/BottomNav";
import PropertyDetails from "./components/propetrydetails/PropertyDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [newHome, setNewHome] = useState(HOMES);
  const [location, setLocation] = useState(false);
  const [cheapest, setCheapest] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);

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
        </Routes>
      </div>
      <BottomNav />
      <ToastContainer />
    </div>
  );
}

export default App;
