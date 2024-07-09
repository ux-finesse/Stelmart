import style from "../footer/Footer.module.css";
import logof from "../../assets/logof.svg"
import x from "../../assets/x.svg"
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import ld from "../../assets/ld.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footer_wrp}>
          <div className={style.footer_top}>
            <div className={style.footer_lft}>
              <img src={logof} alt="logo" />
              <p>Get for everything from anywhere with ease.</p>
            </div>

            <div className={style.footer_rgt}>
              <ul>
                <p>Need help?</p>
                <li>About us</li>
                <li>Find our store</li>
                <li>Affiliate</li>
              </ul>
              <ul>
                <p>Legal</p>
                <li>Privacy</li>
                <li>Refund Policy</li>
                <li>Terms</li>
              </ul>
              <ul>
                <p>Socials</p>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
          <div className={style.footer_btm}>
            <div className={style.footer_btml}>
              <p>Stelmart @ 2024 All Rights Reserved</p>
            </div>
            <div className={style.footer_btmr}>
              <img src={x} alt="x" />
              <img src={fb} alt="fb" />
              <img src={ig} alt="ig" />
              <img src={ld} alt="ld" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
