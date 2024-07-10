/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ModalComponent.js
import React from "react";
import ReactModal from "react-modal";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import check from "../../assets/CheckCircle.svg";
import { Link } from "react-router-dom";
import style from '../modal/Modal.module.css'

ReactModal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modalcontent}
      overlayClassName={style.modaloverlay}
      contentLabel="Order Confirmation"
    >
      <div className={style.btnctop}>
        <h2>Order placed</h2>
        <img src={check} alt="" />
      </div>

      <div onClick={onRequestClose}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={style.btnc}>
            <img src={ArrowLeft} alt="arrowleft" />
            <p>Continue shopping</p>
          </div>
        </Link>
      </div>
    </ReactModal>
  );
};

export default ModalComponent;
