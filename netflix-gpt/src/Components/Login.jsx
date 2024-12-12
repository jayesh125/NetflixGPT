import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignToggle = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <HeaderLogin />
      {isSignUp ? (
        // Sign In
        <div className="absolute -inset-0 w-full h-full flex flex-col items-center justify-center">
          <form
            className="bg-black bg-opacity-90 rounded-lg text-white p-6 px-6 flex flex-col"
            action=""
          >
            <h1 className="text-3xl font-bold text-white pb-6 px-1">Sign In</h1>
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="text"
              placeholder="Email"
            />
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-700 m-2 p-1 w-1/2 rounded-md" type="submit">
              Sign In
            </button>
            <a className="m-2 text-sm text-blue-400" href="#">
              Forgot Password?
            </a>
            <p className="text-sm mx-2">
              Don't have account Please{" "}
              <a className="text-sm text-blue-400" onClick={handleSignToggle}>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      ) : (
        // Sign Up
        <div className="absolute -inset-0 w-full h-full flex flex-col items-center justify-center">
          <form
            className="bg-black bg-opacity-90 rounded-lg text-white p-6 px-6 flex flex-col"
            action=""
          >
            <h1 className="text-3xl font-bold text-white pb-6 px-1">Sign Up</h1>
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="text"
              placeholder="Name"
            />
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="text"
              placeholder="Email"
            />
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="password"
              placeholder="Password"
            />
            <input
              className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
              type="password"
              placeholder="Re Type Password"
            />
            <button className="bg-red-700 m-2 w-1/2 p-1 rounded-md" type="submit">
              Sign Up
            </button>
            <p className="text-sm mx-2">
              Already have an account{" "}
              <a className="text-sm text-blue-400" onClick={handleSignToggle}>
                Sign In
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
