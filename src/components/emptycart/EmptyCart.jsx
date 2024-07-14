/* eslint-disable no-unused-vars */
import React from 'react'
import empty from "../../assets/emptycart.svg"
import style from "../../components/emptycart/EmptyCart.module.css"

const EmptyCart = () => {
  return (
    <>
    <div className={style.empty}>
        <img src={empty} alt="" />
    </div>
    </>
  )
}

export default EmptyCart;