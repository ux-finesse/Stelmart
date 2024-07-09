/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from "../../components/dealscomponent/DealsComponent.module.css"

const DealsComponent = () => {
  const colors = ["red", "blue", "#EA999F", "purple"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [colors.length]);

  return (
    <div className={style.dealsbtm}>
      <span style={{ color: colors[colorIndex] }}>20%</span>
      <p>Deals</p>
    </div>
  );
};

export default DealsComponent;
