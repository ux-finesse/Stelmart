/* eslint-disable react/prop-types */
import style from "../product-card/ProductCard.module.css";
import star from "../../assets/star.svg";
// import heart from "../../assets/heart.svg";
import Button from "../../layout/all-buttons/addcart/Button";
import Heart from "../heart/Heart"
import { Link } from "react-router-dom";


const ProductCard = ({ img, titleOne, title, price, rating }) => {
  return (
    <>
      <div className={style.procnt}>
        <div className={style.proimg}>
          <img src={img} alt="productimg" />
        </div>

        <div className={style.prodtl}>
          <div className={style.top}>
            <p>{titleOne}</p>
            <div className={style.rating}>
              <img src={star} alt="star" />
              <p>{rating}</p>
            </div>
          </div>
          <div className={style.mid}>
            <p>{title}</p>
            <Heart />
          </div>
          <div className={style.btm}>
            <p>{price}</p>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Button text="Add to Cart" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
