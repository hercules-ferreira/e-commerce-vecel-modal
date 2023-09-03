// import { Icons } from "../../Icons";
import { Icons } from "../../Icons";
import styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logo} src="src\components\img\logo.png" alt="" />
      </div>
      <div className={styles.input_search}>
        <input type="text" placeholder="O que você está buscando?" />
        <img src="src\assets\header\MagnifyingGlass.svg" alt="" />
      </div>
      <div className={styles.actions}>
        <Link to="/">
          <Icons className="icons" svg="group" />
        </Link>
        <Link to="/">
          <Icons className="icons" svg="heart" />
        </Link>
        <Link to="/">
          <Icons className="icons" svg="userCircle" />
        </Link>
        <Link to="/">
          <Icons className="icons" svg="shoppingCart" />
        </Link>
      </div>
    </section>
  );
};

export default MainHeader;
