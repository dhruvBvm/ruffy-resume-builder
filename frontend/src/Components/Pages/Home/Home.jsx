import React, { useEffect, useState } from "react";
import "./Home.scss";
import Button from "../../Molecules/Button/Button";
import HeroSection from "../../Organism/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
    </div>
  );
};

export default Home;
