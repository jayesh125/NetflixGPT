import React from "react";
import "../index.css";

const HeaderLogin = () => {
  return (
    <>
      <div className="absolute z-20 bg-gradient-to-b from-black flex flex-row justify-between w-full">
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
      <div className="absolute bg-black h-auto w-auto flex self-center items-center justify-center">
        <img
          className="opacity-55 rounded-xl "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="bg-img"
        />
      </div>
    </>
  );
};

export default HeaderLogin;
