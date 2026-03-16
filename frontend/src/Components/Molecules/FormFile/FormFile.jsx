import React from "react";
import "./FormFile.scss";

const FormFile = ({ name, labelFor, onChange, id, ref }) => {
  return (
    <div className="file">
      <label htmlFor={labelFor}>Select Image for your Profile</label>
      <input type="file" name={name} id={id} onChange={onChange} ref={ref} />
    </div>
  );
};

export default FormFile;
