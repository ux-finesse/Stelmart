/* eslint-disable no-unused-vars */
import img1 from '../../assets/footwears.svg'
import img2 from '../../assets/sandals.svg'
import img3 from '../../assets/furnitures.svg'
import img4 from '../../assets/cars.svg'
import img5 from '../../assets/sliglas.svg'
import img6 from '../../assets/airpods.svg'
import img7 from '../../assets/shoe.svg'
import React, { useEffect, useRef } from "react";
import "./ContinuousScroll.css";

const ContinuousScroll = () => {
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
    <div className="scroll-container" ref={scrollRef}>
      <div className="scroll-content">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        {/* Duplicate the images for a seamless scroll */}
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
    </div>
  );
};

export default ContinuousScroll;
