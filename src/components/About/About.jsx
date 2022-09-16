import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./About.css";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";

export const About = () => {
  return (
    <div
      name="About"
      id="About"
      className="xl:h-screen flex justify-center items-center"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce={true}
        duration={2}
      >
        <div className="sm:px-10 sm:pr-3 text-white flex justify-center items-center sm:text-2xl xl:font-semibold">
          <MediaQuery minWidth={1281}>
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
                la informática, <br /> desde que tengo 3 años que toqué por
                primera vez una computadora lo supe. <br /> Desde ese día he
                estado usando diariamente una computadora, <br /> divirtiendome
                desde chico haciendo presentaciones en powerpoint porque no daba
                para otra cosa mejor. <br /> Luego me fui metiendo más de lleno
                en el gaming y ese tipo de cosas, <br /> hasta meterme en primer
                año de ingeniería, y descubrir la programación. <br /> Me gustó
                tanto, que quería dedicarme a eso ya, y para esto, una carrera
                de 5 años no era lo indicado, <br /> por eso decidí buscar
                alguna manera de lograrlo rápidamente, entonces descubrí HENRY.{" "}
                <br />
                Era prácticamente todo lo que necesitaba, aprender las
                tecnologías más usadas, en poco tiempo, y con buena práctica.{" "}
                <br />
                Decidí comenzar HENRY, y acá estoy, ya hecho un Full Stack
                Developer, <br /> buscando a quien me dé la tan ansiada
                oportunidad de comenzar mi carrera profesional, <br /> en este
                mundo, del cual supe que quería pertenecer, desde mis 3 años.
              </p>
            </motion.div>
          </MediaQuery>
          <MediaQuery maxWidth={1280}>
            <div className="flex flex-col justify-center items-center px-16">
              <h1 className="py-6 text-4xl text-sky-600">Sobre mí</h1>
              <p>
                Siempre supe que iba a terminar dedicandome a algo relacionado a
                la informática, <br /> desde que tengo 3 años que toqué por
                primera vez una computadora lo supe. <br /> Desde ese día he
                estado usando diariamente una computadora, <br /> divirtiendome
                desde chico haciendo presentaciones en powerpoint porque no daba
                para otra cosa mejor. <br /> Luego me fui metiendo más de lleno
                en el gaming y ese tipo de cosas, <br /> hasta meterme en primer
                año de ingeniería, y descubrir la programación. <br /> Me gustó
                tanto, que quería dedicarme a eso ya, y para esto, una carrera
                de 5 años no era lo indicado, <br /> por eso decidí buscar
                alguna manera de lograrlo rápidamente, entonces descubrí HENRY.{" "}
                <br />
                Era prácticamente todo lo que necesitaba, aprender las
                tecnologías más usadas, en poco tiempo, y con buena práctica.{" "}
                <br />
                Decidí comenzar HENRY, y acá estoy, ya hecho un Full Stack
                Developer, <br /> buscando a quien me dé la tan ansiada
                oportunidad de comenzar mi carrera profesional, <br /> en este
                mundo, del cual supe que quería pertenecer, desde mis 3 años.
              </p>
            </div>
          </MediaQuery>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
