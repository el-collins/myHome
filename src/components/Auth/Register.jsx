import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const ENDPOINT = "https://79b1-102-90-64-25.ngrok-free.app"
  // http://127.0.0.1:8000
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to backend
      const response = await axios.post(
        `${ENDPOINT}/api/register`,
        { phone, email, name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        // Registration successful
        navigate("/"); // Redirect to login page
        toast("Registration successful");
      } else {
        // Handle other response statuses
        toast("Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast("Registration failed");
    }
  };

  return (
    <div className="px-5 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col p-4 pb-[150px] rounded-[30px]">
        {/* Form Inputs */}
        <div className="mt-4">
          <p>Phone Number</p>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
        <div className="mt-4">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
        <div className="mt-4">
          <p>Your Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
        <div className="mt-4">
          <p>Your Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
        {/* Submit Button */}
        <div className=" flex flex-col justify-center items-center mt-9">
          <button
            type="submit"
            className="w-[450px] h-[50px] mt-2 rounded-[10px] bg-[#575DFB] text-white"
          >
            Register
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
