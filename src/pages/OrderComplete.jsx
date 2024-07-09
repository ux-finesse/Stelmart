/* eslint-disable no-unused-vars */
// App.js
import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import style from "../pages/OrderComplete.module.css";

const OrderComplete = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.app}>
      <h1>My React App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Modal Title</h2>
        <p>This is a modal content</p>
      </Modal>
    </div>
  );
};

export default OrderComplete;
