import React from "react";
import "./FormInput.scss";

const FormInput = ({
  text,
  htmlFor,
  type,
  value,
  name,
  onChange,
  emoji,
  emojiOnClick,
  warn,
  onKeyDown,
}) => {
  return (
    <div className={warn?.warn ? "form__input warn" : "form__input"}>
      <label htmlFor={htmlFor}>{text}</label>
      <div className="input__wrapper">
        <input
          type={type}
          id={htmlFor}
          value={value ? value : ""}
          name={name}
          onChange={onChange}
          onKeyDown={(e) => {
            if (onKeyDown) {
              onKeyDown(e);
            }
          }}
        ></input>
        {emoji && (
          <div
            className="input__emoji"
            onClick={() => {
              if (emojiOnClick) {
                emojiOnClick();
              }
            }}
          >
            {emoji}
          </div>
        )}
        <span className="warning">
          {warn?.warn ? warn.message : "This is warning"}
        </span>
      </div>
    </div>
  );
};

export default FormInput;
