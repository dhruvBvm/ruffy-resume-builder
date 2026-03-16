import React from "react";
import "./FormRadio.scss";

const FormRadio = ({ name, values, onChange, checked, warn }) => {
  return (
    <div className={warn?.warn ? "radio warn" : "radio"}>
      <p className="radio__label">Select Your {name}:</p>
      <div className={`${name}-values radio__values`}>
        {values.map((item) => {
          return (
            <div key={item} className="radio__value">
              <input
                type="radio"
                id={item}
                name={name}
                value={item}
                onChange={onChange}
                checked={checked === item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
      <span className="warning">
        {warn?.warn ? warn.message : "This is warning"}
      </span>
    </div>
  );
};

export default FormRadio;
