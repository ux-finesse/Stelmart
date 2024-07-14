/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;