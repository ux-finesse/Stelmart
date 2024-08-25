/* eslint-disable no-unused-vars */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for skeletons
import style from "../product-card-skeleton/ProductCardSkeleton.module.css";

const ProductCardSkeleton = () => {
  return (
    <div className={style.procnt}>
      <Skeleton height={150} width="100%" />

      <div className={style.prodtl}>

        <div className={style.top}>
          <Skeleton width="60%" />
          <div className={style.rating}>
            <Skeleton width="20px" height="20px" circle />
            <Skeleton width="40px" />
          </div>
        </div>

        <div className={style.mid}>
          <Skeleton width="80%" />
          <Skeleton width="20px" height="20px" circle />
        </div>

        <div className={style.btm}>
          <Skeleton width="30%" />
          <Skeleton width="100px" height="30px" />
        </div>
        <div className={style.color}>
          <Skeleton width="20px" height="20px" />
        </div>
        <div className={style.size}>
          <Skeleton width="40px" height="20px" />
          <div className={style.capt}>
            <Skeleton width="80%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
