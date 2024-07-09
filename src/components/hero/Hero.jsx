import hero from "../../assets/hero.svg";
import style from "../hero/Hero.module.css";
// import Button from "../../layout/all-buttons/button/Button";

export const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <img src={hero} alt="" />
        {/* <div className={style.qbtn}>
          <Button text="Men" />
          <Button text="Women" />
          <Button text="Children" />
          <Button text="Boys" />
          <Button text="Girls" />
          <Button text="Unisex" />
          <Button text="Brand name" />
          <Button text="Latest" />
        </div> */}
      </div>
    </>
  );
};

export default Hero;
