import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

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
        <SignIn toggle={handleSignToggle}/>
      ) : (
        // Sign Up
        <SignUp toggle={handleSignToggle}/>
      )}
    </>
  );
};

export default Login;
