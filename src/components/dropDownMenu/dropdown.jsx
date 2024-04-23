import { useUser } from "../Provider/UserContext";
import MenuBox from "./MenuBox";
import "./dropdown.css";
import { useEffect, useState, useRef } from "react";


function Dropdown({ toggleLogin, toggleRegister }) {
  const {loading,setToken,currentUser } = useUser(); 
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prev) =>!prev);
  };

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

  if(loading) return <> loading... </>
  return (
    <>
      <div ref={dropdownRef} className="menu cursor-pointer">
        <div className="flex p-2 border-[2px] rounded-full hover:shadow-md transition" onClick={handleClick}>
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
          <div>
            <img src="/Images/placeholder.jpg" alt="" className="w-6 h-6 md:h-8 md:w-8 rounded-full hidden sm:block" />
          </div>
        </div>
        <MenuBox isOpen={isOpen} handleClick={handleClick} toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
      </div>
    </>
  );
}

export default Dropdown;