import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Skills.css";

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
          <div className="icons flex flex-wrap">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight" className="">
          <h1 className="text-4xl text-sky-600">Habilidades blandas</h1>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
