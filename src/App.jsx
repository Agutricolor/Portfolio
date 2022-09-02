import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App flex justify-center h-screen bg-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
