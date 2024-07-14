/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import style from "../numberadjuster/NumberAdjuster.module.css";
// import negative from "../../assets/negative.svg";
// import positive from "../../assets/positive.svg";



// const NumberAdjuster = () => {
//   // Initialize state to hold the current number, starting at 0
//   const [number, setNumber] = useState(0);

//   // Function to handle increasing the number
//   const increaseNumber = () => {
//     setNumber(number + 1);
//   };

//   // Function to handle decreasing the number
//   const decreaseNumber = () => {
//     if (number > 0) {
//       setNumber(number - 1);
//     }
//   };

//   return (
//     <div className={style.box}>
//       <div className={style.btnn}>
//         <img src={negative} alt="" onClick={decreaseNumber} />
//         <div className={style.num}>{number}</div>
//         <img src={positive} alt="" onClick={increaseNumber} />
//       </div>
//     </div>
//   );
// };

// export default NumberAdjuster;


import React from "react";
import style from "./NumberAdjuster.module.css";
import negative from "../../assets/negative.svg";
import positive from "../../assets/positive.svg";

const NumberAdjuster = ({ value, onChange }) => {
  const increaseNumber = () => {
    onChange(value + 1);
  };

  const decreaseNumber = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className={style.box}>
      <div className={style.btnn}>
        <img src={negative} alt="decrease" onClick={decreaseNumber} />
        <div className={style.num}>{value}</div>
        <img src={positive} alt="increase" onClick={increaseNumber} />
      </div>
    </div>
  );
};

export default NumberAdjuster;