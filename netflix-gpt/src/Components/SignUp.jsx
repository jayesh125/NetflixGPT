import React, { useRef } from "react";
import { useState } from "react";
import { checkValidDataSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const SignUp = ({ toggle }) => {
  const [error, setError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const rePassword = useRef(null);

  const handleSignUp = () => {
    const error = checkValidDataSignUp(
      name.current.value,
      email.current.value,
      password.current.value,
      rePassword.current.value
    );
    if (error) {
      setError(error);
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + errorMessage);
      });
    
  };

  return (
    <div className="absolute -inset-0 w-full h-full flex flex-col items-center justify-center">
      <form
        className="bg-black bg-opacity-60 rounded-lg text-white p-6 px-6 flex flex-col"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold text-white pb-6 px-1">Sign Up</h1>
        <input
          ref={name}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="text"
          placeholder="Name"
        />
        {console.log(error)}
        <input
          ref={email}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="password"
          placeholder="Password"
        />
        <input
          ref={rePassword}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="password"
          placeholder="Re-Type Password"
        />

        <button
          className="bg-red-700 m-2 w-1/2 p-1 rounded-md"
          type="submit"
          onClick={handleSignUp}
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
