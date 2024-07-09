import style from "../subscribe/Subscribe.module.css";
import arrow from "../../assets/arrow.svg"

const Subscribe = () => {
  return (
    <>
      <div className={style.subscribe}>
        <div className={style.subscribe_wrp}>
          <h5>Be the first to know about our latest product</h5>
          <div className={style.input}>
            <p>Subscribe to our newsletter</p>
            <form action="" className={style.form}>
              <input type="text" placeholder="Your email" />
              <div className={style.send}>
                <img src={arrow} alt="arrow" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
