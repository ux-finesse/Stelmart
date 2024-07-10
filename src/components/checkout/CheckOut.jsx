/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "../checkout/CheckOut.module.css";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import paypal from "../../assets/paypal.svg";
// import Button from "../../layout/all-buttons/button/Button";
import ModalComponent from "../modal/Modal";

const CheckOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderConfirm = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.checkout}>
        <div className={style.checkout_wrp}>
          <div className={style.checkout_top}>
            <h2>Check Out</h2>
          </div>

          <div className={style.chckfrm}>
            <div className={style.chckfrml}>
              <form action="">
                <div className={style.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="abc@example.com"
                    required
                  />
                </div>
                <div className={style.add}>
                  <label htmlFor="address">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="223B, Baker ‘s street"
                    required
                  />
                </div>
                <div className={style.names}>
                  <div className={style.fname}>
                    <label htmlFor="firstname">John</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className={style.lname}>
                    <label htmlFor="lastname">Doe</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className={style.phone}>
                  <label htmlFor="coupon">Phone Number</label>
                  <input
                    type="text"
                    id="coupon"
                    name="coupon"
                    placeholder="+234"
                    required
                  />
                </div>
                <div className={style.coupon}>
                  <label htmlFor="coupon">
                    Apply Coupon Code <span>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="coupon"
                    name="coupon"
                    placeholder=""
                    required
                  />
                </div>

                <div className={style.payltd}>
                  <p>Payment Method</p>
                  <div className={style.paymtd}>
                    <div className={style.capts}>
                      <p>Credit Card, Transfer, Ussd</p>
                      <span>Secure and encrypted</span>
                    </div>

                    <div className={style.paymtds}>
                      <img src={visa} alt="" />
                      <img src={paypal} alt="" />
                      <img src={mastercard} alt="" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className={style.chktsumbtn}>
              <div className={style.chktsumdtl}>
                <p>Summary</p>
                <div className={style.tit}>
                  <p>Total Item:</p>
                  <span>$144.99</span>
                </div>
                <div className={style.shf}>
                  <p>Shipping Fee:</p>
                  <span>$0.00</span>
                </div>
                <div className={style.dlf}>
                  <p>Delivery fee:</p>
                  <span>$144.99</span>
                </div>
                <div className={style.sut}>
                  <p>Sub Total:</p>
                  <span>$144.99</span>
                </div>
                <div className={style.est}>
                  <p>Estimated Total:</p>
                  <span>$144.99</span>
                </div>
              </div>
              <button className={style.btn} onClick={handleOrderConfirm}>
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  );
};

export default CheckOut;
