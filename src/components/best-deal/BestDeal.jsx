import style from "../best-deal/BestDeal.module.css";
import { bestdealCardData } from "../../../datalistingbd";
import ProductCard from "../product-card/ProductCard";
import b3 from "../../assets/b3.svg"

const BestDeal = () => {
  return (
    <>
      <div className={style.bestdeal}>
        <div className={style.bewrp}>
          <div className={style.betop}>
            <h2>Best deals of the day</h2>
          </div>

          <div className={style.products}>
            {bestdealCardData.map((item, idx) => {
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
      <div className={style.img3}>
        <img src={b3} alt="banner3" />
      </div>
    </>
  );
};

export default BestDeal;
