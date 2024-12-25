import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = ({ toggle }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    const auth = getAuth();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      setError(null); // Clear errors on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="absolute -inset-0 w-full h-full flex flex-col items-center justify-center">
      <form
        className="bg-black bg-opacity-60 rounded-lg text-white p-6 px-6 flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold text-white pb-6 px-1">Sign In</h1>
        <input
          ref={emailRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-white placeholder:text-white placeholder:font-semibold"
          type="text"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-white placeholder:text-white placeholder:font-semibold"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-sm p-2">{error}</p>
        <button
          onClick={handleSignIn}
          className="bg-red-700 m-2 p-1 w-1/2 rounded-md"
          type="submit"
        >
          Sign In
        </button>
        <a className="m-2 text-sm text-blue-400" href="#">
          Forgot Password?
        </a>
        <p className="text-sm mx-2">
          Don't have account?{" "}
          <a className="text-sm text-blue-400 cursor-pointer" onClick={toggle}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
