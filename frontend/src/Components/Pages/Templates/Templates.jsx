import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Templates.scss";
import Button from "../../../Components/Molecules/Button/Button";

import { templatesdata } from "../../../Data/templatesData";
import { AppContext } from "../../../App";

const Templates = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

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
                  if (state.isAuthenticated) {
                    navigate("/template-one");
                    return;
                  }
                  navigate("/login");
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
                      if (state.isAuthenticated) {
                        navigate("/template-one");
                        return;
                      }
                      navigate("/login");
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
