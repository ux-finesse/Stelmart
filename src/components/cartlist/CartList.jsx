import style from "./CartList.module.css";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import { cartData } from "../../../cartdata.js";
import CheckOutButton from "../../layout/all-buttons/checkout/Button.jsx";
import CartItem from "../cart-item/CartItem.jsx";
import { Link } from "react-router-dom";


const CartList = () => {
  return (
    <>
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

          <div className={style.cartdata}>
            {cartData.map((item, idx) => {
              return (
                <CartItem
                  img={item.img}
                  titleOne={item.titleOne}
                  rating={item.rating}
                  title={item.title}
                  caption={item.caption}
                  size={item.size}
                  color={item.color}
                  amount={item.amount}
                  key={idx}
                />
              );
            })}
          </div>

          <div className={style.cartlist_btm}>
            <div className={style.totchk}>
              <div className={style.total}>
                <p>Total:</p>
                <p>$310.99</p>
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
    </>
  );
};

export default CartList;
