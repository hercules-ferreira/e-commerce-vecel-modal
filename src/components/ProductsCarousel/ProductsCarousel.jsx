import styles from "./ProductsCarousel.module.css";

export const ProductsCarousel = () => {
  return (
    <section className={styles.containerProducts}>
      <div>
        <div className={styles.productsCarousel}>
          <img src="src\assets\carrousel\smartphone-bg.png" alt="Product 1" />
          <div className={styles.margin}>
            <h2 className={styles.title}> Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>R$ 12000</p>
            <p className={styles.description}>ou 12x de R$ 1000,00 sem juros</p>
            <p className={styles.delivery}>Frete grátis</p>
            <div className={styles.btn_section}></div>
          </div>
          <button className={styles.btn}>Compre</button>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img src="src\assets\carrousel\smartphone-bg.png" alt="Product 1" />
          <div className={styles.margin}>
            <h2 className={styles.title}> Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>R$ 12000</p>
            <p className={styles.description}>ou 12x de R$ 1000,00 sem juros</p>
            <p className={styles.delivery}>Frete grátis</p>
            <div className={styles.btn_section}></div>
          </div>
          <button className={styles.btn}>Compre</button>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img src="src\assets\carrousel\smartphone-bg.png" alt="Product 1" />
          <div className={styles.margin}>
            <h2 className={styles.title}> Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>R$ 12000</p>
            <p className={styles.description}>ou 12x de R$ 1000,00 sem juros</p>
            <p className={styles.delivery}>Frete grátis</p>
            <div className={styles.btn_section}></div>
          </div>
          <button className={styles.btn}>Compre</button>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img src="src\assets\carrousel\smartphone-bg.png" alt="Product 1" />
          <div className={styles.margin}>
            <h2 className={styles.title}> Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>R$ 12000</p>
            <p className={styles.description}>ou 12x de R$ 1000,00 sem juros</p>
            <p className={styles.delivery}>Frete grátis</p>
            <div className={styles.btn_section}></div>
          </div>
          <button className={styles.btn}>Compre</button>
        </div>
      </div>
    </section>
  );
};
