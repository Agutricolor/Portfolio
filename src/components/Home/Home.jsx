import React from "react";
import me from "../../images/me.jpg";
import MediaQuery from "react-responsive";

export const Home = () => {
  return (
    <div
      id="Home"
      name="Home"
      className="xl:h-screen mt-24 xl:mt-0 flex justify-center items-center"
    >
      <div className="px-10 flex xl:flex-row xl:items-center flex-col">
        <div className="flex justify-center h-max flex-col text-white text-xl">
          <h1 className="text-4xl py-2">Hola!</h1>
          <h1 className="text-5xl py-4">
            Soy <span className="text-sky-700">Agustin Vazquez</span>
          </h1>
          <h1 className="text-4xl py-2 text-sky-700">
            Full Stack Web Developer
          </h1>
          <p>
            Estoy en la búsqueda de mi primera experiencia IT, como Full Stack
            Web Developer.
          </p>
          <p>
            Me encantaría formar parte de un proyecto desafiante, que me lleve
            al siguiente nivel como desarrollador.
          </p>
          <p>
            Mi especialización se encuentra en el Backend, me interesa mucho la
            aplicación lógica,
          </p>
          <p>
            así como también el uso de la misma con React, y el diseño web me
            parece un arte maravilloso,
          </p>
          <p>
            con el cual lucho todos los días para desarrollarlo siempre un poco
            más.
          </p>
        </div>
        <div className="pl-14 pr-3">
          <MediaQuery minWidth={1281}>
            <img
              src={me}
              alt="Mi foto"
              width={400}
              className="bg-origin-border rounded-3xl xl:opacity-100"
            />
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};
