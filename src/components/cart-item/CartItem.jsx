/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import style from "./CartItem.module.css";
import Heart from "../heart/Heart";
import Button from "../../layout/all-buttons/button/Button";
import star from "../../assets/star.svg";
import NumberAdjuster from "../numberadjuster/NumberAdjuster";
import {
  updateItemQuantity,
  removeItemFromCart,
} from "../../features/cart/cartSlice";

const CartItem = ({
  id,
  img,
  titleOne,
  rating,
  title,
  caption,
  size,
  color,
  price,
  quantity,
  onRemove,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemFromCart(id));
    onRemove(id); // Call the onRemove prop function
  };

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className={style.cartitem}>
      <div className={style.cartitem_wrp}>
        <div className={style.cartitem_pe}>
          <div className={style.itm_img}>
            <p className={style.aditm}>Added Items</p>
            <img src={img} alt="" />
          </div>

          <div className={style.dtil}>
            <p className={style.dtils}>Details</p>

            <div className={style.tithrt}>
              <p className={style.titleone}>{titleOne}</p>
              <div className={style.ratingc}>
                <img src={star} alt="star" />
                <p className={style.ratingp}>{rating}</p>
              </div>
            </div>

            <div className={style.tithlt}>
              <p className={style.title}>{title}</p>
              <Heart />
            </div>

            <div className={style.capt}>
              <p>{caption}</p>
            </div>

            <div className={style.cartbtn1}>
              <Button text="Delete" onClick={handleRemove} />
            </div>
          </div>

          <div className={style.size}>
            <p className={style.siz}>Size</p>
            <img src={size} alt="" />
          </div>

          <div className={style.color}>
            <p className={style.colr}>Color</p>
            <img src={color} alt="" />
          </div>

          <div className={style.quantity}>
            <p className={style.qnt}>Quantity</p>
            <NumberAdjuster value={quantity} onChange={handleQuantityChange} />
          </div>

          <div className={style.amount}>
            <p className={style.amt}>Amount</p>
            <p className={style.amtm}>${(price * quantity).toFixed(2)}</p>
          </div>

          <div className={style.cartbtn}>
            <Button text="Delete" onClick={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;