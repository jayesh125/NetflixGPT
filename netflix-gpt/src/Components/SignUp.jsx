import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ toggle }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    const auth = getAuth();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Validation
    if (!name) {
      setError("Name is required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
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
        <h1 className="text-3xl font-bold text-white pb-6 px-1">Sign Up</h1>
        <input
          ref={nameRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="text"
          placeholder="Name"
        />
        <input
          ref={emailRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="text"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="password"
          placeholder="Password"
        />
        <input
          ref={confirmPasswordRef}
          className="m-2 p-2 font-bold rounded-md bg-gray-600 text-black placeholder:text-white placeholder:font-semibold"
          type="password"
          placeholder="Re-Type Password"
        />
        <p className="text-red-500 text-sm p-2">{error}</p>
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
