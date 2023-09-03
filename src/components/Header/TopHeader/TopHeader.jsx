import styles from './TopHeader.module.css'
import { Icons } from "../../Icons/index";


//
// import { Icons } from "../../../components/Icons";
// import styles from "./Categories.module.css";
//


const TopHeader = () => {
  return (
    <header className={styles.container}>
      <section className={styles.header}>
        <div>
          <Icons className="icons" svg="shieldCheck" />

          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div>
          <Icons className="icons" svg="truck" />

          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div>
          <Icons className="icons" svg="creditCard" />

          <p>
            <span>Parcele </span>suas compras
          </p>
        </div>
      </section>
    </header>
  );
};

export default TopHeader