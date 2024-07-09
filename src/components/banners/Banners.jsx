import style from "../banners/Banners.module.css";
import b1 from "../../assets/b1.svg";
import b2 from "../../assets/b2.svg";
import CountdownTimer from "../CountdownTimer";

const Banners = () => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.ban_wrp}>
          <div className={style.img1}>
            <img src={b1} alt="banner1" />
          </div>

          <div className={style.deals}>
            <div className={style.dealstp}>
              <div className={style.dealstpl}>
                <span>Flash sales</span>
                <p>end in</p>
              </div>
              <div className={style.countdown}>
                <CountdownTimer />
              </div>
            </div>

            <div className={style.dealsbtm}>
              <span>20%</span>
              <p>Deals</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.img2}>
        <img src={b2} alt="banner2" />
      </div>
    </>
  );
};

export default Banners;
