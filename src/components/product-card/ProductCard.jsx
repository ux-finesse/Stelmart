/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useDispatch } from "react-redux";
import style from "../product-card/ProductCard.module.css";
import star from "../../assets/star.svg";
import Button from "../../layout/all-buttons/addcart/Button";
import Heart from "../heart/Heart";
import { addItemToCart } from "../../features/cart/cartSlice";
import { showNotification } from "../../features/cart/notificationSlice";
import { v4 as uuidv4 } from "uuid";

const ProductCard = ({
  img,
  titleOne,
  title,
  price,
  rating,
  size,
  caption,
  color,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: uuidv4(),
        img,
        titleOne,
        title,
        price,
        rating,
        size,
        caption,
        color,
      })
    );
    dispatch(showNotification("Item added to cart!"));
  };

  return (
    <div className={style.procnt}>
      <img src={img} alt="productimg" className={style.proimg} />

      <div className={style.prodtl}>
        <div className={style.top}>
          <p>{titleOne}</p>
          <div className={style.rating}>
            <img src={star} alt="star" />
            <p>{rating}</p>
          </div>
        </div>
        <div className={style.mid}>
          <p>{title}</p>
          <Heart />
        </div>
        <div className={style.btm}>
          <p>${price}</p>
          <Button text="Add to Cart" onClick={handleAddToCart} />
        </div>
        <div className={style.color}>
          <img src={color} alt="" />
        </div>
        <div className={style.size}>
          <img src={size} alt="" />
          <div className={style.capt}>
            <p>{caption}</p>
          </div>
          <div className={style.capt}>
            <p>{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
