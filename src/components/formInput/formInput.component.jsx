import React from "react";

import "./formInput.styles.css";

const FormInput = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <input className="input" {...props} />
      {label ? (
        <label className={`${props.value.length ? "shrink" : ""} label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
