import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="bg-sky-700 w-full h-24 flex items-center justify-around font-mono text-xl font-semibold text-gray-200 shadow-lg shadow-blue-700/50">
      <a href="#">Agustin Vazquez</a>
      <div>
        <div id="NavLinks" className="duration-700">
          <a href="#" className="px-8 hover:underline underline-offset-8">
            <Link activeClass="px-8 underline underline-offset-8" to="Sobre mí">
              Sobre mí
            </Link>
          </a>
          <a href="#" className="px-8 hover:underline underline-offset-8">
            <Link
              activeClass="px-8 underline underline-offset-8"
              to="Habilidades"
            >
              Habilidades
            </Link>
          </a>
          <a href="#" className="px-8 hover:underline underline-offset-8">
            <Link
              activeClass="px-8 underline underline-offset-8"
              to="Proyectos"
            >
              Proyectos
            </Link>
          </a>
          <a
            href="#"
            className="px-8 border-solid border-2 rounded-md p-2 mx-2 hover:bg-slate-200 hover:text-sky-700 duration-500"
          >
            <Link to="Contacto">Contacto</Link>
          </a>
          <a
            href="https://drive.google.com/file/d/1VNenNq1FIxRbO9qX1SSN9rVzYCMHWh-P/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className="px-8 border-solid border-2 rounded-md p-2 mx-2 hover:bg-slate-200 hover:text-sky-700 duration-500"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
};
