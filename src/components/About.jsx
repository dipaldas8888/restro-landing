import React from "react";
import AboutBg from "../assets/polygon.png";

function About() {
  return (
    <section
      className="bg-cover bg-center  min-h-[500px] py-10"
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      <div className="container">
        <h1 className="text-center font-bold">About Us</h1>
        <div className="bg-white w-[1600px] h-[300px] mx-auto"></div>
      </div>
    </section>
  );
}

export default About;
