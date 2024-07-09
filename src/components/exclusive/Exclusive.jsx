import style from "../exclusive/Exclusive.module.css"
import img1 from '../../assets/footwears.svg'
import img2 from '../../assets/sandals.svg'
import img3 from '../../assets/furnitures.svg'
import img4 from '../../assets/cars.svg'
import img5 from '../../assets/glasses.svg'
import img6 from '../../assets/airpods.svg'

const Exclusive = () => {
  return (
    <>
      <div className={style.eclus}>
        <div className={style.exrp}>
          <p>
            Stand a chance to get our <span>exclusive offer</span> everyday!!!
          </p>
          <div className={style.slide}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Exclusive