import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";

function App() {
  const assdf = () => {};
  return (
    <div className="App bg-slate-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
