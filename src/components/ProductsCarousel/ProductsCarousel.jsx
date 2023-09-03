import styles from "./ProductsCarousel.module.css";

export const ProductsCarousel = () => {
  return (
    <section className={styles.containerProducts}>
      <div>
        <div className={styles.productsCarousel}>
          <img
            src="src/assets/carrousel/smartphone.png"
            width={100}
            height={100}
            alt="Product 1"
          />
          <div>
            <h2>Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>12000</p>
            <p className={styles.details}>ou 12x de R$ 1000,00 sem juros</p>
            <div className={styles.btn_section}></div>
            <button className={styles.btn}>Compre</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img
            src="src/assets/carrousel/smartphone.png"
            width={100}
            height={100}
            alt="Product 1"
          />
          <div>
            <h2>Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>12000</p>
            <p className={styles.details}>ou 12x de R$ 1000,00 sem juros</p>
            <div className={styles.btn_section}></div>
            <button className={styles.btn}>Compre</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img
            src="src/assets/carrousel/smartphone.png"
            width={100}
            height={100}
            alt="Product 1"
          />
          <div>
            <h2>Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>12000</p>
            <p className={styles.details}>ou 12x de R$ 1000,00 sem juros</p>
            <div className={styles.btn_section}></div>
            <button className={styles.btn}>Compre</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.productsCarousel}>
          <img
            src="src/assets/carrousel/smartphone.png"
            width={100}
            height={100}
            alt="Product 1"
          />
          <div>
            <h2>Iphone 11 PRO MAX BRANCO</h2>
            <p className={styles.priceOld}>R$ 15000</p>
            <p className={styles.priceNew}>12000</p>
            <p className={styles.details}>ou 12x de R$ 1000,00 sem juros</p>
            <div className={styles.btn_section}></div>
            <button className={styles.btn}>Compre</button>
          </div>
        </div>
      </div>
    </section>
  );
};
