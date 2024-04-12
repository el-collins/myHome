export const SignIn = () => {
  return (
    <form
      method="dialog"
      className="flex flex-col p-4 pb-[150px] rounded-[30px]"
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
              className="w-[30px] h-[30px]  "
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
          <p className="text-[36px] text-[#575DFB]">Login</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="w-[488px] p-4 flex text-center justify-center text-[24px]">
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
              className="w-6 h-6 text-[#575DFB] absolute mt-[88px] ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>

          </div>
            <input
            placeholder="abc@example.com"
              type="email"
              className="w-[420px] h-[50px] border-[#575DFB] mt-2 rounded-[10px] pl-11 "
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
              className="w-6 h-6 text-[#575DFB] absolute mt-[88px] ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

          </div>
            <input
            placeholder="......"
              type="password"
              className="w-[420px] h-[50px] border-[#575DFB] mt-2 rounded-[10px] pl-11"
            />
        </div>
      </div>
      <a className="ml-8 text-[12px] text-[#575DFB] border-b-[#575DFB] border-b-[1px] w-[102px] mt-3" href="">
        Forgot Password?
      </a>
      <div className=" flex flex-col justify-center items-center mt-9">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-[450px] h-[50px] mt-2 rounded-[10px] bg-[#575DFB] text-white"
        >
          Login
        </button>
        <div className="flex justify-center items-center gap-5 mt-7">
          <div className="w-[180px] border-[1px] h-0 border-[#000000D990]"></div>
          <p>or</p>
          <div className="w-[180px] border-[#000000D990] border-[1px] h-0"></div>
        </div>
        <div className="w-[450px] overflow-hidden h-[50px] mt-6 border-black rounded-[10px] flex justify-center items-center border-[1px]">
          <div className="h-6 w-6 mb-11 mr-2">
            <img src="/Images/Logo.svg"   />
          </div>
          <a href="">Continue with Google</a>
        </div>
        <div className="text-[12px] flex gap-1 mt-4 mr-[270px]">
          <p className="bold">Don't have an account?</p>
          <a href="" className="text-[#575DFB]">Register</a>
        </div>
      </div>
    </form>
  );
};
