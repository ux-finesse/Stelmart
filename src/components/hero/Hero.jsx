import hero from "../../assets/hero.svg";
import herom from "../../assets/herom.svg";
import style from "../hero/Hero.module.css";
// import Button from "../../layout/all-buttons/button/Button";

export const Hero = () => {
  return (
    <>
      <div className={style.hero_cnt}>
        <img className={style.hero} src={hero} alt="" />
        <img className={style.herom} src={herom} alt="" />
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
