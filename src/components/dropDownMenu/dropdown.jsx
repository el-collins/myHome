import MenuBox from "./MenuBox";
import "./dropdown.css";
import { useEffect, useState, useRef } from "react";

// Component: Dropdown
// Description: A dropdown menu that toggles between login and register options
function Dropdown({ toggleLogin, toggleRegister }) {

  // State: isOpen
  // Type: Boolean
  // Description: A state variable to keep track of whether the dropdown menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Ref: dropdownRef
  // Type: React.RefObject
  // Description: A reference to the dropdown menu DOM element
  const dropdownRef = useRef(null);

  // Function: handleClick
  // Description: A function to toggle the isOpen state when the dropdown menu is clicked
  const handleClick = () => {
    setIsOpen((prev) =>!prev);
  };

  // Effect: handleClickOutside
  // Description: An effect that listens for clicks outside the dropdown menu and closes it if a click is detected
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current &&!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Dropdown Menu */}
      <div ref={dropdownRef} className="menu cursor-pointer">
        {/* Dropdown Toggle Button */}
        <div className="flex p-2 border-[2px] rounded-full hover:shadow-md transition" onClick={handleClick}>
          {/* Dropdown Toggle Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:h-8 md:w-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* Dropdown Toggle Avatar */}
          <div>
            <img src="/Images/placeholder.jpg" alt="" className="w-6 h-6 md:h-8 md:w-8 rounded-full" />
          </div>
        </div>
        {/* Dropdown Menu Box */}
        <MenuBox isOpen={isOpen} handleClick={handleClick} toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
      </div>
    </>
  );
}

export default Dropdown;