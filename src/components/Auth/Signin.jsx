import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserContext";

export const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setCurrentUser } = useUser(); // Get the setCurrentUser function from context

  const ENDPOINT = "https://79b1-102-90-64-25.ngrok-free.app"
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login", { username, password },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {

        const token = response.data.access_token;
        // Store token in local storage
        localStorage.setItem("token", token);

        // Decode token to get user information
        const decodedToken = jwtDecode(token);
         // Set current user state
        setCurrentUser(decodedToken);
        // Redirect or update UI as needed upon successful login
        handleClose()

        navigate("/");
        toast("Logged successfully");
      } else {
        // Handle other response statuses
        toast("Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
      handleClose()
      toast("Incorrect email or password");
    }
  };

  const handleClose = () => {
    document.getElementById("my_modal_4").close();
  };
  return (
    <div className="px-5 rounded-xl cursor-default">
      <form
        // method="dialog"
        onSubmit={handleSubmit}
        className="flex flex-col sm:p-4 p-7 sm:pb-[150px] pb-11 rounded-[30px]"
      >
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
            <p className="text-[28px] sm:text-[36px] text-[#575DFB]">Login</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="w-[px] p-4 flex text-center justify-center text-[18px]  sm:text-[24px]">
              Welcome back to myHome!
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 ">
              <p className="ml-2">Email</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#575DFB] absolute sm:mt-[88px] mt-[80px] ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="abc@example.com"
              type="email"
              required
              className="sm:w-[420px] sm:h-[50px] w-[350px] border-[#575DFB] mt-2 rounded-[10px] pl-11 "
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <p className="ml-41 ">Your password</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#575DFB] absolute sm:mt-[88px] mt-[80px] ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
              required
              className="sm:w-[420px] sm:h-[50px] w-[350px] border-[#575DFB] mt-2 rounded-[10px] pl-11"
            />
          </div>
        </div>
        <a
          className=" text-[12px] text-[#575DFB] border-b-[#575DFB] border-b-[1px] w-[102px] mt-3"
          href=""
        >
          Forgot Password?
        </a>
        <div className=" flex flex-col justify-center items-center mt-9">
          <button
            type="submit"
            className="sm:w-[420px] h-[50px] w-[350px] mt-2 rounded-[10px] bg-[#575DFB] text-white"
          >
            Login
          </button>
          <div className="flex justify-center items-center gap-5 mt-7">
            <div className="w-[120px] border-[1px] h-0 border-[#000000D990]"></div>
            <p>or</p>
            <div className="w-[120px] sm:w-[180px] border-[#000000D990] border-[1px] h-0"></div>
          </div>
          <div className="sm:w-[420px] h-[50px] w-[350px] overflow-hidden  mt-6 border-black rounded-[10px] flex justify-center items-center border-[1px]">
            <div className="h-6 w-6 mr-2">
              <img src="/Images/Logo.svg" />
            </div>
            <a href="">Continue with Google</a>
          </div>
          <div className="text-[12px] flex gap-1 mt-4  w-[220px] ">
            <p className="bold">Don't have an account?</p>
            <button
              onClick={() => {
                document.getElementById("register_modal").showModal();
                handleClose()
              }}
              className="text-[#575DFB]"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
