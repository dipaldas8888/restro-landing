import React from "react";
import kiwi from "../assets/PNG/kiwi.png";
import apple from "../assets/PNG/apple.png";
import leaf from "../assets/PNG/leaf.png";

function Banner() {
  return (
    <section className="container relative">
      <div>
        <h1 className="py-7 text-2xl font-semibold text-dark text-center">
          Taste the Difference
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-12 py-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatibus aliquid quos ipsum enim fugiat distinctio dolore,
            doloribus eveniet veniam ut. Culpa quae nemo pariatur labore ipsa,
            temporibus ea nostrum?
          </p>

          <div className="hidden sm:block"></div>

          <div className="hidden sm:block"></div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, quasi corporis. Et voluptas quae nulla, corrupti
            provident obcaecati ad ipsa laudantium vel ut molestias officiis
            dolores unde eum tempora impedit?
          </p>
        </div>

        <div className="absolute top-7 -left-16 opacity-50 ">
          <img src={kiwi} />
        </div>

        <div className="absolute top-8 -right-3 opacity-50">
          <img src={leaf} className="hidden sm:block" />
        </div>
        <div className="absolute top-50 -left-3 opacity-50">
          <img src={apple} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
