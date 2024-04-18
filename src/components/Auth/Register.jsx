import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  const PHONE_REGEX = /^\+\d{1,3}\d{6,14}$/;
  const ENDPOINT = "https://8eb6-102-90-58-223.ngrok-free.app";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to backend
      const response = await axios.post(
        `${ENDPOINT}/api/register`,
        { phone_number, email, name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        // Registration successful
        document.getElementById("my_modal_4").showModal()
        handleClose()
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

  const handleClose = () => {
    document.getElementById("register_modal").close();
  };

  return (
    <div className="px-5 rounded-xl">

      <form onSubmit={handleSubmit} className="flex flex-col p-4 pb-[80px] rounded-[30px]">

        {/* Form Inputs */}
        <div className=" flex flex-col justify-center items-center relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-1 right-1 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 18 12-12M6 6l12 12"
              />
            </svg>
          </button>

          <div className="absolute top-1 w-full bg-transparent"></div>
          <div className="flex justify-center items-center  w-[100%] border-b-[1px] p-6">
            <p className="text-[28px] sm:text-[36px] text-[#575DFB]">
              Register
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="w-[488px] leading-snug p-4 flex text-center justify-center text-[18px]  sm:text-[24px]">
              Create an account to access all the features of myHome!
            </p>
          </div>
          <div className="mt-4">
            <p>Phone Number</p>
            <input
              type="tel"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[450px] h-[50px] mt-2 rounded-[10px]"
              pattern={PHONE_REGEX.source}
              title="Please enter a valid phone number starting with a country code"
              required
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
              pattern={PASSWORD_REGEX.source}
              title="Password must contain at least one digit, one uppercase letter, and be at least 8 characters long"
              required
            />
          </div>
          <div className=" flex flex-col justify-center items-center mt-9">
            <button
              type="submit"
              className="w-[450px] h-[50px] mt-2 rounded-[10px] bg-[#575DFB] text-white"
            >
              Register
            </button>
          </div>
          <div className="text-[12px] flex gap-1 mt-4  w-[220px] ">
            <p className="bold">Have an account?</p>
            <button
              onClick={(e) => {
                document.getElementById("my_modal_4").showModal();
                handleClose();
                e.preventDefault();
              }}
              className="text-[#575DFB]"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

