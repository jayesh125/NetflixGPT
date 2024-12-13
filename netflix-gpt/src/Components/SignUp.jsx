import React from "react";

const SignUp = ({toggle}) => {

  return (
    <div className="absolute -inset-0 w-full h-full flex flex-col items-center justify-center">
      <form
        className="bg-black bg-opacity-90 rounded-lg text-white p-6 px-6 flex flex-col"
        action=""
        onSubmit={(e) => e.preventDefault()}
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
          placeholder="Re-Type Password"
        />

        <button
          onClick={handleButtonClick}
          className="bg-red-700 m-2 w-1/2 p-1 rounded-md"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-sm mx-2">
          Already have an account{" "}
          <a className="text-sm text-blue-400 cursor-pointer" onClick={toggle}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
