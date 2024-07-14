import style from "../recommended/Recommended.module.css";
import { recproductCardData } from "../../../datalistingrec";
import ProductCard from "../product-card/ProductCard";
import Button from "../../layout/all-buttons/button/Button";

const Recommended = () => {
  return (
    <>
      <div className={style.recommended}>
        <div className={style.recwrp}>
          <div className={style.rectop}>
            <h2>Recommended for you</h2>
          </div>

          <div className={style.pro_btn}>
            <div className={style.products}>
              {recproductCardData.map((item, idx) => {
                return (
                  <ProductCard
                    img={item.img}
                    titleOne={item.titleOne}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    size={item.size}
                    caption={item.caption}
                    color={item.color}
                    key={idx}
                  />
                );
              })}
            </div>
            <div className={style.secbtm}>
              <Button text="Our Collection" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
