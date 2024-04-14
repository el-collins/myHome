import {useRef, useState } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const Register = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  return (
    <form
      method="dialog"
      className="flex flex-col sm:p-4 p-2 overflow-hidden sm:pb-[100px] max-w-[400px] sm:max-w-[600px] pb-[50px] rounded-[30px]"
    >
      <div className=" flex flex-col justify-center items-center relative">
        <div className="absolute top-1 w-full bg-transparent">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] ml-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center  w-[100%] border-b-[1px] p-6">
          <p className="text-[28px] sm:text-[36px] text-[#575DFB]">Register</p>
        </div>
        <p className=" leading-snug p-4 text-[18px] sm:w-[488px] w-[80%] sm:text-[24px] flex text-center justify-center">
          Create an account to access all the features of myHome!
        </p>
        <div className="flex items-center justify-center">
          <div className="mt-4">
            <p>Phone Number</p>
            <input
              type="number"
              className="sm:w-[420px] sm:h-[50px] w-[350px] mt-2 border-[#575DFB] rounded-[10px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <p>email</p>
          <input
            type="email"
            className="sm:w-[420px] sm:h-[50px] w-[350px]  border-[#575DFB] mt-2 rounded-[10px]"
          />
        </div>
      <div className="mt-4 ml-4">
        <p>Your Name</p>
        <input type="Text" className="sm:w-[420px] sm:h-[50px] w-[350px]  border-[#575DFB] mt-2 rounded-[10px]" />
      </div>
      <div className="mt-4 ml-4">
        <p>Your password</p>
        <input
          type="password"
          className="sm:w-[420px] sm:h-[50px] w-[350px] border-[#575DFB]  mt-2 rounded-[10px]"
        />
      </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-9">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="sm:w-[420px] h-[50px] w-[350px]  mt-2 rounded-[10px] bg-[#575DFB] text-white"
        >
          Register
        </button>
        <div className="text-[12px] flex gap-1 mt-4 ">
            <p className="bold">Have an account?</p>
            <button
              onClick={() => {
                document.getElementById("my_modal_4").showModal();
              }}
              className="text-[#575DFB]"
            >
              Login
            </button>
          </div>
      </div>
    </form>
  );
};
