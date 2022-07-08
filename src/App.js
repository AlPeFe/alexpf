import "./App.css";
import MeComponent from "./components/Me/MeComponent";
import Bio from "./components/Biography/bio";
import React, { useEffect } from "react";
import About from "./components/About/About";
import data from "./data/data";
import Skills from "./components/Skills/Skills";
import ModalInfo from "./components/Modal/Modal";

function App() {
  return (
    <div className="min-h-screen px-3 py-10 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <MeComponent />
        <About></About>
        <Skills skills={data.skills}></Skills>
        <ModalInfo></ModalInfo>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      ></div>
    </div>
  );
}

export default App;
