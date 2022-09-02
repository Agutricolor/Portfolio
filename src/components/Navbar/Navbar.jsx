import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Navbar.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid rgb(3 105 161)",
  boxShadow: 24,
  p: 4,
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name.toLowerCase()]: e.target.value });
    localStorage.setItem(
      "form",
      JSON.stringify({ ...form, [e.target.name.toLowerCase()]: e.target.value })
    );
  };
  const handleSubmit = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const localForm = JSON.parse(localStorage.getItem("form"));
    localForm && setForm(localForm);
  }, []);

  return (
    <nav className="bg-sky-700 w-full h-24 flex items-center justify-around fixed top-0 font-mono text-xl font-semibold text-gray-200 shadow-lg shadow-blue-700/50">
      <a href="#Home"><Link to="Home">Agustin Vazquez</Link></a>
      <div>
        <div id="NavLinks" className="duration-700">
          <a href="#About" className="px-8 hover:underline underline-offset-8">
            <Link activeClass="active" to="About">
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
            onClick={handleOpen}
          >
            Contacto
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-lg">
            <form
              action="https://getform.io/f/ab246688-832e-430c-98c0-22823ca7bf40"
              method="POST"
              onChange={handleForm}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col font-mono">
                <label htmlFor="Name" className="py-2">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={form.name}
                  placeholder="Cristiano Ronaldo"
                  className="border-2 border-solid rounded-lg border-sky-700 p-1 outline-none"
                />
                <label htmlFor="Phone" className="py-2">
                  Celular
                </label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  value={form.phone}
                  placeholder="(+598) 99 123 456"
                  className="border-2 border-solid rounded-lg border-sky-700 p-1 outline-none"
                />
                <label htmlFor="Email" className="py-2">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={form.email}
                  className="border-2 border-solid rounded-lg border-sky-700 p-1 outline-none"
                />
                <label htmlFor="Subject" className="py-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="Subject"
                  name="Subject"
                  value={form.subject}
                  className="border-2 border-solid rounded-lg border-sky-700 p-1 outline-none"
                />
                <label htmlFor="Message" className="py-2">
                  Mensaje
                </label>
                <textarea
                  name="Message"
                  id="Message"
                  cols="30"
                  rows="10"
                  value={form.message}
                  className="border-2 border-solid rounded-lg border-sky-700 p-1 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="border-2 border-solid rounded-lg border-sky-700 py-2 my-2 hover:bg-sky-700 duration-500 hover:text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </nav>
  );
};
