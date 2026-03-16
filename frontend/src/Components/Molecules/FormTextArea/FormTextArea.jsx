import React from "react";
import "./FormTextArea.scss";

const FormTextArea = ({
  text,
  htmlFor,
  value,
  name,
  onChange,
  emoji,
  emojiOnClick,
  warn,
  hint,
}) => {
  return (
    <div className={warn?.warn ? "form__textarea warn" : "form__textarea"}>
      <div>
        <label htmlFor={htmlFor}>{text}</label>
        <p className="hint">{hint}</p>
      </div>
      <div className="textarea__wrapper">
        <textarea 
          id={htmlFor}
          value={value ? value : ""}
          name={name}
          onChange={onChange}
        ></textarea>
        {emoji && (
          <div
            className="textarea__emoji"
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

export default FormTextArea;
