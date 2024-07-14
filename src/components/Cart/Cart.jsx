/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/CartItem";
import EmptyCart from "../emptycart/EmptyCart";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import style from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
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
  );
};

export default Cart;
