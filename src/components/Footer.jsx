import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="container">
      <div className="bg-primary w-full my-10 shadow-2xl rounded-2xl py-12 px-6 md:px-12">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl py-6 hover:bg-white/20 hover:scale-105 transition duration-300">
            <div className="bg-white/20 p-4 rounded-full">
              <MdOutlineLocationOn className="text-3xl text-white" />
            </div>
            <span className="text-lg text-white font-medium">
              BTM, Bangalore
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl py-6 hover:bg-white/20 hover:scale-105 transition duration-300">
            <div className="bg-white/20 p-4 rounded-full">
              <MdAddIcCall className="text-3xl text-white" />
            </div>
            <span className="text-lg text-white font-medium">
              +91 9845345678
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl py-6 hover:bg-white/20 hover:scale-105 transition duration-300">
            <div className="bg-white/20 p-4 rounded-full">
              <BiLogoGmail className="text-3xl text-white" />
            </div>
            <span className="text-lg text-white font-medium">
              restro@info.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
