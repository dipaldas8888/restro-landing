import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Choose from "./components/Choose";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className=" overflow-x-hidden ">
        <Navbar />
        <Hero />
        <Banner />
        <Choose />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
