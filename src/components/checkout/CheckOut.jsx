/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../checkout/CheckOut.module.css";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import paypal from "../../assets/paypal.svg";
import ModalComponent from "../modal/Modal";
import { clearCart } from "../../features/cart/cartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    firstname: "",
    lastname: "",
    phone: "",
    coupon: "",
  });
  const [errors, setErrors] = useState({});

  const handleOrderConfirm = (event) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Show confirmation modal
      setIsModalOpen(true);
      // Dispatch action to clear cart
      dispatch(clearCart());
    } else {
      setErrors(newErrors);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }
    if (!data.address) {
      errors.address = "Address is required";
    }
    if (!data.firstname) {
      errors.firstname = "First name is required";
    }
    if (!data.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,}$/.test(data.phone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
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
              <form onSubmit={handleOrderConfirm}>
                <div className={style.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="abc@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? style.errorInput : ""}
                    required
                  />
                  {errors.email && (
                    <p className={style.error}>{errors.email}</p>
                  )}
                </div>
                <div className={style.add}>
                  <label htmlFor="address">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="223B, Baker ‘s street"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? style.errorInput : ""}
                    required
                  />
                  {errors.address && (
                    <p className={style.error}>{errors.address}</p>
                  )}
                </div>
                <div className={style.names}>
                  <div className={style.fname}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="John"
                      value={formData.firstname}
                      onChange={handleChange}
                      className={errors.firstname ? style.errorInput : ""}
                      required
                    />
                    {errors.firstname && (
                      <p className={style.error}>{errors.firstname}</p>
                    )}
                  </div>
                  <div className={style.lname}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Doe"
                      value={formData.lastname}
                      onChange={handleChange}
                      className={errors.lastname ? style.errorInput : ""}
                      required
                    />
                    {errors.lastname && (
                      <p className={style.error}>{errors.lastname}</p>
                    )}
                  </div>
                </div>
                <div className={style.phone}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+234"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? style.errorInput : ""}
                    required
                  />
                  {errors.phone && (
                    <p className={style.error}>{errors.phone}</p>
                  )}
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
                    value={formData.coupon}
                    onChange={handleChange}
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
                      <img src={visa} alt="Visa" />
                      <img src={paypal} alt="Paypal" />
                      <img src={mastercard} alt="MasterCard" />
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
                  <span>${calculateTotal()}</span>
                </div>
                <div className={style.shf}>
                  <p>Shipping Fee:</p>
                  <span>$0.00</span>
                </div>
                <div className={style.dlf}>
                  <p>Delivery Fee:</p>
                  <span>$0.00</span>
                </div>
                <div className={style.sut}>
                  <p>Sub Total:</p>
                  <span>${calculateTotal()}</span>
                </div>
                <div className={style.est}>
                  <p>Estimated Total:</p>
                  <span>${calculateTotal()}</span>
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
