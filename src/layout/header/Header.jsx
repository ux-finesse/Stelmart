/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import style from "../header/Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart2.svg";
import user from "../../assets/user.svg";
import search from "../../assets/searchicon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header>
      <div className={style.header_cnt}>
        <div className={style.lft}>
          <Link to="/">
            <div className={style.logo}>
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>

        <div className={style.rgt}>
          <form>
            <div className={style.search}>
              <input type="text" placeholder="Search" id="" />
              <img src={search} alt="" />
            </div>
          </form>

          <Link to="/cart">
            <div className={style.cart}>
              <img src={cart} alt="cart" />
              {cartItems.length > 0 && (
                <span className={style.cartCount}>{cartItems.length}</span>
              )}
            </div>
          </Link>
          <div className={style.user}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
