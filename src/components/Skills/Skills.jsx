import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

export const Skills = () => {
  return (
    <div
      name="Skills"
      id="Skills"
      className="h-screen flex justify-center items-center text-white"
    >
      <div className="flex justify-around w-full font-semibold">
        <AnimationOnScroll animateIn="animate__fadeInLeft" className="">
          <h1 className="text-4xl text-sky-600">Tecnologías</h1>
          <div>
            <img
              width={50}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight" className="">
          <h1 className="text-4xl text-sky-600">Habilidades blandas</h1>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
