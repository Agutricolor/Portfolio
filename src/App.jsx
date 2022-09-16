import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <div className="App bg-slate-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {!isTabletOrMobile && <Footer />}
    </div>
  );
}

export default App;
