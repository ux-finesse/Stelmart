/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ModalComponent.js
import React from "react";
import ReactModal from "react-modal";
import "../modal/Modal.css";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import check from "../../assets/CheckCircle.svg";
import { Link } from "react-router-dom";

// Ensure you set the app element to avoid screen readers issues
ReactModal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Order Confirmation"
    >
      <div className="btnctop">
        <h2>Order placed</h2>
        <img src={check} alt="" />
      </div>

      <div onClick={onRequestClose}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="btnc">
            <img src={ArrowLeft} alt="arrowleft" />
            <p>Continue shopping</p>
          </div>
        </Link>
      </div>
    </ReactModal>
  );
};

export default ModalComponent;
