import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import piDogs from "../../assets/pi dogs.png";
import wallet from "../../assets/wallet..png";

export const Projects = () => {
  return (
    <div id="Projects" className="h-screen flex justify-center items-center">
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        duration={1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="font-bold text-sky-600 text-4xl p-5">Proyectos</h1>
        <div className="flex flex-wrap">
          <ProjectCard
            image={piDogs}
            url="https://pi-dogs-mauve.vercel.app/"
            repoUrl="https://github.com/Agutricolor/PI-Dogs-main"
            title="PI Dogs"
            description="Página informativa de perros. Contiene filtrados, formulario controlado y consumo de API. Realizada con React.js, Redux, Sequelize.js, Express.js y PostgreSQL como principales tecnologías."
          />
          <ProjectCard
            image={wallet}
            url="http://henry-pf-client.vercel.app/"
            repoFront="https://github.com/facuperezbri/henry-pf-client"
            repoBack="https://github.com/FrM-bot/PF-henry-api"
            title="wallet."
            description="Billetera virtual. Contiene pasarelas de pagos, creación y autenticación de usuarios, seguridad, edición de usuarios, bot informativo y muchas otras funcionalidades. Realizada con React.js, Redux, Prisma, Express.js, PostgreSQL, Tailwind.css, Firebase como principales tecnologías."
          />
        </div>
        <a
          href="https://github.com/Agutricolor?tab=repositories"
          rel="noreferrer"
          target="_blank"
          className="px-8 border-solid border-2 rounded-md p-2 m-5 hover:bg-slate-200 hover:text-sky-700 duration-500 text-white font-bold text-2xl"
        >
          Ver más
        </a>
      </AnimationOnScroll>
    </div>
  );
};
