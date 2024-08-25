// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

// import React from "react";
// import { useDispatch } from "react-redux";
// import style from "../product-card/ProductCard.module.css";
// import star from "../../assets/star.svg";
// import Button from "../../layout/all-buttons/addcart/Button";
// import Heart from "../heart/Heart";
// import { addItemToCart } from "../../features/cart/cartSlice";
// import { showNotification } from "../../features/cart/notificationSlice";
// import { v4 as uuidv4 } from "uuid";
// import { getFullImageUrl } from "../../../util";
// const ProductCard = ({
//   img,
//   titleOne,
//   name,
//   price,
//   rating,
//   size,
//   description,
//   color,
// }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(
//       addItemToCart({
//         id: uuidv4(),
//         img,
//         titleOne,
//         name,
//         price,
//         rating,
//         size,
//         description,
//         color,
//       })
//     );
//     dispatch(showNotification("Item added to cart!"));
//   };

//   return (
//     <div className={style.procnt}>
//       <img src={getFullImageUrl(img)} alt="productimg" className={style.proimg} />

//       <div className={style.prodtl}>
        
//         <div className={style.top}>
//           <p>{titleOne}</p>
//           <div className={style.rating}>
//             <img src={star} alt="star" />
//             <p>{rating}</p>
//           </div>
//         </div>

//         <div className={style.mid}>
//           <p>{name}</p>
//           <Heart />
//         </div>

//         <div className={style.btm}>
//           <p>${price}</p>
//           <Button text="Add to Cart" onClick={handleAddToCart} />
//         </div>
//         <div className={style.color}>
//           <img src={color} alt="" />
//         </div>
//         <div className={style.size}>
//           <img src={size} alt="" />
//           <div className={style.capt}>
//             <p>{description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useDispatch } from "react-redux";
import style from "../product-card/ProductCard.module.css";
import star from "../../assets/star.svg";
import Button from "../../layout/all-buttons/addcart/Button";
import Heart from "../heart/Heart";
import { addItemToCart } from "../../features/cart/cartSlice";
import { showNotification } from "../../features/cart/notificationSlice";
import { v4 as uuidv4 } from "uuid";
import { getFullImageUrl } from "../../../util";

const ProductCard = ({
  img,
  titleOne,
  name,
  price,
  rating,
  size,
  description,
  color,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productDetails = {
      id: uuidv4(),
      img: getFullImageUrl(img),
      titleOne,
      name,
      price,
      rating,
      size,
      description,
      color,
      quantity: 1, // Default quantity set to 1
    };
    console.log("Product Details:", productDetails); // Log the product details
    dispatch(addItemToCart(productDetails));
    dispatch(showNotification("Item added to cart!"));
  };

  return (
    <div className={style.procnt}>
      <img src={getFullImageUrl(img)} alt="productimg" className={style.proimg} />

      <div className={style.prodtl}>
        <div className={style.top}>
          <p>{titleOne}</p>
          <div className={style.rating}>
            <img src={star} alt="star" />
            <p>{rating}</p>
          </div>
        </div>

        <div className={style.mid}>
          <p>{name}</p>
          <Heart />
        </div>

        <div className={style.btm}>
          <p>${price}</p>
          <Button text="Add to Cart" onClick={handleAddToCart} />
        </div>
        <div className={style.color}>
          <img src={color} alt="" />
        </div>
        <div className={style.size}>
          <img src={size} alt="" />
          <div className={style.capt}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;