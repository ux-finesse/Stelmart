/* eslint-disable react/prop-types */
import style from "./Filter.module.css";
import img from "../../../assets/filter.svg"

const Filter = () => {
  return (
    <>
      <button className={style.btn}>
        <img src={img} alt="filterIcon" />
        <p>Filter</p>
      </button>
    </>
  );
};

export default Filter;
