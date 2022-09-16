import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Skills.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const Skills = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <div
      name="Skills"
      id="Skills"
      className="xl:h-screen flex justify-center items-center text-white"
    >
      <div className="flex justify-evenly w-full font-semibold xl:flex-row flex-col">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          className={
            isTabletOrMobile
              ? "flex flex-col items-center py-10"
              : "flex flex-col items-center"
          }
        >
          <h1 className="text-4xl text-sky-600">Tecnologías</h1>
          <div className="icons grid grid-cols-3">
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          className={
            isTabletOrMobile &&
            "flex flex-col justify-center items-center py-10"
          }
        >
          <h1 className="text-4xl text-sky-600">Habilidades blandas</h1>
          <motion.ul
            className="flex flex-col justify-center items-center text-xl"
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.3,
            }}
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
