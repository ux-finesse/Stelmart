import style from "../popular/Popular.module.css";
import { productCardData } from "../../../datalisting";
import ProductCard from "../product-card/ProductCard";
// import Filter from "../../layout/all-buttons/filter/Filter";
// import Sort from "../../layout/all-buttons/sort/Sort";

const Popular = () => {
  return (
    <>
      <div className={style.popular}>
        <div className={style.popwrp}>
          <div className={style.poptop}>
            <h2>Popular</h2>
            {/* <div className={style.popbtns}>
              <Filter />
              <Sort />
            </div> */}
          </div>

          <div className={style.product_wrp}>
            <div className={style.products}>
              {productCardData.map((item, idx) => {
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

export default Popular;
