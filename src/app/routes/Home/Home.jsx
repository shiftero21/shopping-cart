import Tooltip from "../../../components/Tooltip/Tooltip";
import styles from "./Home.module.css";
import Carrousel from "../../../components/Carrousel/Carrousel";
import ScrollRevealHero from "./ScrollRevealHero";

import carg01 from "../../../assets/images/products/anker.webp";
import carg02 from "../../../assets/images/products/anker-02.avif";
import carg03 from "../../../assets/images/products/sharker-03.webp";
import carg04 from "../../../assets/images/products/anker-04.webp";
import carg05 from "../../../assets/images/products/carg-05/urban.jpg";
import carg06 from "../../../assets/images/products/anker.webp";
import carg07 from "../../../assets/images/products/shark-geek-02.jpg";

const carrouselData1 = [
  { id: 1, url: carg01 },
  { id: 2, url: carg02 },
  { id: 3, url: carg03 },
  { id: 4, url: carg04 },
];

const carrouselData2 = [
  { id: 10, url: carg05 },
  { id: 11, url: carg06 },
  { id: 12, url: carg07 },
];

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Carrousel images={carrouselData1} />
      <ScrollRevealHero></ScrollRevealHero>
      <div className={styles.home__main}>
        <div className={styles.home__features}>
          <Carrousel
            images={carrouselData2}
            sizeClass="hero-banner--small"
          />
          <div className={styles["home__wrapper-titulos"]}>
            <div
              id="fast"
              className={`${styles.home__title} ${styles["home__title--fast"]}`}
            >
              Fast
            </div>
            <div
              id="charge"
              className={`${styles.home__title} ${styles["home__title--charge"]}`}
            >
              Charge
            </div>
            <div
              id="portability"
              className={`${styles.home__title} ${styles["titulos--portab"]}`}
            >
              Portability!
            </div>
          </div>
        </div>
        <div className={styles["home__product-promo"]}>
          <div className={styles["home__product-promo-content"]}>
            {/* <Tooltip></Tooltip> */}
            <h1>POWERBANKS</h1>
          </div>
          <div className={styles["home__product-promo-image"]}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
