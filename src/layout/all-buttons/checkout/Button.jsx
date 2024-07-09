/* eslint-disable react/prop-types */
import style from "./Button.module.css";
import ArrowLeftCircleFill from "../../../assets/ArrowLeftCircleFill.svg";

const Button = () => {
  return (
    <>
      <button className={style.btn}>
        <p>Check Out</p>
        <img src={ArrowLeftCircleFill} alt="" />
      </button>
    </>
  );
};

export default Button;
