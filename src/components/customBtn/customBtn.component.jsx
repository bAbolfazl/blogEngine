import React from "react";

import "./customBtn.styles.css";

const CustomBtn = ({ children, fullWidth, ...otherProps }) => {
  // const x = fullWidth===true ? 'width: 100%' : ''  
  return (
    <button style={{ width: fullWidth === true ? '100%' : null }} {...otherProps} >{children}</button>
  );
};

export default CustomBtn;
