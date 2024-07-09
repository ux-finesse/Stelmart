import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = () => (
  <nav className={style.navul}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
