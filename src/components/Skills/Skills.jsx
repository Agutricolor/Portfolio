import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Skills.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const Skills = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  const handleAnimation = () => {
    setIsAnimated(!isAnimated);
  };
  return (
    <div
      name="Skills"
      id="Skills"
      className="h-screen flex justify-center items-center text-white"
    >
      <div className="flex justify-evenly w-full font-semibold">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl text-sky-600">Tecnologías</h1>
          <div className="icons flex flex-wrap justify-center py-5">
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              onClick={handleAnimation}
              animate={
                isAnimated
                  ? {
                      opacity: [0.7, 1, 0.7],
                      scale: [null, 1.3, 1.1],
                    }
                  : {}
              }
              transition={
                isAnimated
                  ? {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
                  : {}
              }
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight" className="">
          <h1 className="text-4xl text-sky-600">Habilidades blandas</h1>
          <motion.ul
            className="flex flex-col justify-center items-center text-xl"
            onClick={handleAnimation}
            animate={
              isAnimated
                ? {
                    scale: [null, 1.1, 1],
                    x: [0, 100, -100, 0],
                  }
                : {}
            }
            transition={
              isAnimated
                ? {
                    duration: 2,
                    repeat: Infinity,
                  }
                : {}
            }
          >
            <li>Responsable</li>
            <li>Proactivo</li>
            <li>Resolución de problemas</li>
            <li>Trabajo en equipo</li>
            <li>Capacidad de adaptación</li>
          </motion.ul>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
