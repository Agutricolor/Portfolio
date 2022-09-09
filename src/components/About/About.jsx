import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./About.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      name="About"
      id="About"
      className="h-screen flex justify-center items-center"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce={true}
        duration={2}
      >
        <div className="pl-10 pr-3 text-white flex justify-center flex-col text-2xl font-semibold">
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundImage:
                "linear-gradient(to right, #002b6b, #1f4487, #365fa4, #4c7cc2, #6399e0)",
              borderRadius: "50px",
              padding: "50px",
              opacity: 1.2,
              transition: { ease: "easeInOut", duration: 1, type: "spring" },
            }}
            style={{
              borderRadius: "10px",
              padding: "40px",
              opacity: 0.7,
            }}
          >
            <h1 className="py-6 text-4xl font-bold text-sky-600">Sobre mí</h1>
            <p>
              Siempre supe que iba a terminar dedicandome a algo relacionado a
              la informática, desde que tengo 3 años
            </p>
            <p>
              que toqué por primera vez una computadora lo supe. Desde ese día
              he estado usando diariamente una computadora,
            </p>
            <p>
              divirtiendome desde chico haciendo presentaciones en powerpoint
              porque no daba para otra cosa mejor.
            </p>
            <p>
              Luego me fui metiendo más de lleno en el gaming y ese tipo de
              cosas, hasta meterme en primer año de ingeniería,{" "}
            </p>
            <p>y descubrir la programación.</p>
            <p>
              Me gustó tanto, que quería dedicarme a eso ya, y para esto, una
              carrera de 5 años no era lo indicado, por eso
            </p>
            <p>
              decidí buscar alguna manera de lograrlo rápidamente, entonces
              descubrí HENRY.
            </p>
            <p>
              Era prácticamente todo lo que necesitaba, aprender las tecnologías
              más usadas, en poco tiempo, y con buena práctica.
            </p>
            <p>
              Decidí comenzar HENRY, y acá estoy, ya hecho un Full Stack
              Developer, buscando a quien me dé la tan ansiada
            </p>
            <p>
              oportunidad de comenzar mi carrera profesional, en este mundo, del
              cual supe que quería pertenecer, desde mis 3 años.
            </p>
          </motion.div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
