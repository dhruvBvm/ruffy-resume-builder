import React from "react";
import { useNavigate } from "react-router-dom";
import "./Templates.scss";
import Button from "../../../Components/Molecules/Button/Button";

import { templatesdata } from "../../../Data/templatesData";

const Templates = () => {
  const navigate = useNavigate();

  return (
    <div className="templates">
      <div className="templates__wrapper">
        <div className="templates__cards">
          {templatesdata.map((template) => {
            return (
              <div
                key={template.id}
                className="templates__cards__card"
                onClick={() => {
                  navigate("/template-one");
                }}
              >
                <div className="image__div">
                  <img src={template.imagePath} alt="" />
                </div>
                <div className="card__details">
                  <h2>{template.name}</h2>
                  <p>{template.tagline}</p>
                </div>
                <div className="card__info">
                  <Button
                    onClick={() => {
                      navigate("/template-one");
                    }}
                  >
                    Use this template
                  </Button>
                  <div className="card__avilables">
                    <span>pdf</span>
                    <span>docx</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Templates;
