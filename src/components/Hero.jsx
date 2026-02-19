import React from "react";
import hero from "../assets/hero.png";
import heroBg from "../assets/heroBg.png";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover  bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="container min-h-[650px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-7 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-cursive text-dark leading-tight">
              Fresh & Healthy <span className="text-primary">Meals</span>{" "}
              Delivered in Assam
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Delicious meals at your doorstep at an affordable price. Eat
              healthy, live better.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start">
              <button className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full shadow-md transition">
                Order Now
              </button>

              <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition">
                View Menu
              </button>
            </div>
          </div>

          <div>
            <img
              src={hero}
              alt="Healthy food"
              className="w-[350px] sm:w-[450px] mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
