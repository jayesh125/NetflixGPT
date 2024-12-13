import React from "react";
import "../index.css";

const HeaderLogin = () => {
  return (
    <>
      <div className="absolute z-20  flex flex-row justify-between w-full">
        <img
          className="h-[60px] p-3 bg-transparent"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/RED_Movie_Logo.png/800px-RED_Movie_Logo.png"
          alt="logo"
        />
        <ul className="flex space-x-6 text-white p-3 self-center">
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">English (US)</a>
          </li>
        </ul>
      </div>
      <div className="absolute bg-black bg-gradient-to-t from-red-800 h-full w-full flex self-center items-center justify-center">
        <img
          className="h-5/6 w-5/6 rounded-xl"
          src="https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
          alt="bg-img"
        />
      </div>
    </>
  );
};

export default HeaderLogin;
