import React from "react";
import { FaBus } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="py-15 md:py-20">
      <div className="container">
        <h1 className="text-center text-shadow-dark font-semibold p-3">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-10 gap-4">
          <div className="text-center flex items-center justify-center flex-col">
            <p className="text-dark font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <p className="text-5xl rotate-90 text-primary leading-none">...</p>
            <FaBus className=" text-5xl text-primary mx-auto" />
          </div>
          <div className="text-center flex items-center justify-center flex-col">
            <FaBus className=" text-5xl text-primary mx-auto" />

            <p className="text-5xl rotate-90 text-primary leading-none">...</p>
            <p className="text-dark font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="text-center flex items-center justify-center flex-col">
            <p className="text-dark font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <p className="text-5xl rotate-90 text-primary leading-none">...</p>
            <FaBus className=" text-5xl text-primary mx-auto" />
          </div>
          <div className="text-center flex items-center justify-center flex-col">
            <FaBus className=" text-5xl text-primary mx-auto" />

            <p className="text-5xl rotate-90 text-primary leading-none">...</p>
            <p className="text-dark font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
