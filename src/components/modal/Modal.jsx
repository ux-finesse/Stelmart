/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Modal.js
import React from "react";
import style from "../modal/Modal.module.css";

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className={style.mdlcont}>
        <span className={style.close} onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
