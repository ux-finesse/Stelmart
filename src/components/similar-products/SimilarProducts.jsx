import style from "../similar-products/SimilarProducts.module.css";
import { recproductCardData } from "../../../datalistingrec";
import ProductCard from "../product-card/ProductCard";

const Recommended = () => {
  return (
    <>
      <div className={style.recommended}>
        <div className={style.recwrp}>
          <div className={style.rectop}>
            <h2>Similar products you may like</h2>
            <h2 className={style.simi}>Similar products you may like</h2>
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
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
