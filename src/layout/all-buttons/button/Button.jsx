/* eslint-disable react/prop-types */
import style from "../../all-buttons/button/Button.module.css";

const Button = ({ text }) => {
  return (
    <>
      <button className={style.button}>
        {text}
      </button>
    </>
  );
};

export default Button;
