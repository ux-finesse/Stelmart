/* eslint-disable no-unused-vars */
import React from "react";
import style from "./CartList.module.css";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import CheckOutButton from "../../layout/all-buttons/checkout/Button.jsx";
import CartItem from "../cart-item/CartItem.jsx";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import EmptyCart from "../emptycart/EmptyCart";
import { useSelector, useDispatch } from "react-redux";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={style.cartlist}>
      <div className={style.cartlist_wrp}>
        <div className={style.cartlist_top}>
          <h2>My Cart</h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={style.btnc}>
              <img src={ArrowLeft} alt="arrowleft" />
              <p>Continue shopping</p>
            </div>
          </Link>
        </div>

        <div className={style.cart}>
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                titleOne={item.titleOne}
                rating={item.rating}
                title={item.title}
                caption={item.caption}
                size={item.size}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
                onRemove={handleRemoveItem}
              />
            ))
          )}
        </div>

        <div className={style.cartlist_btm}>
          <div className={style.totchk}>
            <div className={style.total}>
              <p>Total:</p>
              <p>${calculateTotal()}</p>
            </div>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <div className={style.chkbtn}>
                <CheckOutButton />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
