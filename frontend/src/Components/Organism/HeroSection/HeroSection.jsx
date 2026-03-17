import React from "react";
import './HeroSection.scss'
import { useNavigate } from "react-router-dom";
import Button from "../../Molecules/Button/Button";

const HeroSection = () => {
      const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-section__left">
        <div className="info">
          <p>
            Create a professional resume in minutes with our easy-to-use
            builder. Choose modern templates, customize your details, and stand
            out to employers no experience needed.
          </p>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Build Your Resume
          </Button>
        </div>
      </div>
      <div className="hero-section__right">
        <div className="text">
          <h1>RUFFY</h1>
          <h1>RESUME</h1>
          <h1>BUILDER</h1>
        </div>
      </div>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
      <div className="blob blob-6"></div>
      <div className="blob blob-7"></div>
    </div>
  );
};

export default HeroSection;
