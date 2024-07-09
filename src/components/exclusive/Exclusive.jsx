/* eslint-disable no-unused-vars */
import style from "../exclusive/Exclusive.module.css"
import React, { useEffect, useRef } from "react"
import ContinuousScroll from "../continuousscroll/ContinuousScroll"

const Exclusive = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollContainer.scrollLeft += 1;
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const scrollInterval = setInterval(scrollStep, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className={style.eclus}>
        <div className={style.exrp}>
          <p>
            Stand a chance to get our <span>exclusive offer</span> everyday!!!
          </p>
          <ContinuousScroll/>
        </div>
      </div>
    </>
  );
}

export default Exclusive;