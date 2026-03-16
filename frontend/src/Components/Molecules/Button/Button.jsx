import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, children, type = "button" }) => {
  return (
    <button
      type={type}
      className="btn"
      onClick={(e) => {
        if (onClick) {
          onClick(e); 
        }
      }}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;