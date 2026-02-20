import React from "react";
import AboutBg from "../assets/polygon.png";

function About() {
  return (
    <section
      className="bg-cover bg-center min-h-[500px] py-10"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-3xl mb-8">About Us</h1>
        <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[80%] h-[300px] md:h-[300px] mx-auto p-8">
          <p className=" text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            At our restaurant, every dish is crafted with passion and the
            freshest ingredients. From traditional favorites to modern flavors,
            our meals are designed to bring comfort, taste, and unforgettable
            experiences to your table.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
