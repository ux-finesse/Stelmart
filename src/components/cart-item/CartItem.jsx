/* eslint-disable react/prop-types */
import style from "../cart-item/CartItem.module.css";
import Heart from "../heart/Heart";
import Button from "../../layout/all-buttons/button/Button.jsx";
import star from "../../assets/star.svg";

const CartItem = ({
  img,
  titleOne,
  rating,
  title,
  caption,
  size,
  color,
  amount,
}) => {
  return (
    <>
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
                  <p>{rating}</p>
                </div>
              </div>

              <div className={style.tithrt}>
                <p className={style.title}>{title}</p>
                <Heart />
              </div>

              <div className={style.capt}>
                <p>{caption}</p>
              </div>

              <div className={style.cartbtn}>
                <Button text="Delete" />
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
              Increment
            </div>

            <div>
              <p className={style.amt}>Amount</p>
              <p className={style.amtm}>{amount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
