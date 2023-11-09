import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Button from "./Components/Button";
const App = () => {
  return (
    <>
      <div className="bg-[#0000009f] text-white h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
