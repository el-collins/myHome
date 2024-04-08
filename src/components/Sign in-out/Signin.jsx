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
          <p>Login</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="w-[488px] p-4 flex text-center justify-center">
            Welcome back to myHome!
          </p>
        </div>
        <div className="mt-4">
          <p>email</p>
          <input
            type="email"
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
        <div className="mt-4">
          <p>Your password</p>
          <input
            type="password"
            className="w-[450px] h-[50px] mt-2 rounded-[10px]"
          />
        </div>
      </div>
      <a className="ml-4 mt-3" href="">
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
        <div className="w-[450px] h-[50px] mt-6 border-black rounded-[10px] flex justify-center items-center border-[1px]">
          <a href="">Continue with Google</a>
        </div>
      </div>
    </form>
  );
};
