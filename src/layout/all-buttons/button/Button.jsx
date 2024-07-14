/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "../../all-buttons/button/Button.module.css";

import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
