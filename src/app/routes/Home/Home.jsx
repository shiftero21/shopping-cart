import Tooltip from "../../../components/Tooltip/Tooltip";
import styles from "./Home.module.css";
import Carrousel from "../../../components/Carrousel/Carrousel";

import carg01 from "../../../assets/images/anker.webp";
import carg02 from "../../../assets/images/anker-02.avif";
import carg03 from "../../../assets/images/sharker-03.webp";
import carg04 from "../../../assets/images/anker-04.webp";
import carg05 from "../../../assets/images/urban.jpg";
import carg06 from "../../../assets/images/anker.webp";
import carg07 from "../../../assets/images/shark-geek-02.jpg";

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
    <div className={styles.total}>
      <Carrousel images={carrouselData1} />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Carrousel
            images={carrouselData2}
            sizeClass="small-carrousel"
          />
          <div className={styles.wrapperTitulos}>
            <div
              id="fast"
              className={`${styles.titulos} ${styles["titulos--fast"]}`}
            >
              Fast
            </div>
            <div
              id="charge"
              className={`${styles.titulos} ${styles["titulos--charge"]}`}
            >
              Charge
            </div>
            <div
              id="portability"
              className={`${styles.titulos} ${styles["titulos--portab"]}`}
            >
              Portability!
            </div>
          </div>
        </div>
        <div className={styles.wrapperHeader}>
          <div className={styles.header}>
            <Tooltip></Tooltip>
            <h1>POWERBANKS</h1>
          </div>
          <div className={styles.headerImage}></div>
        </div>
      </div>
      {/* <Carrousel></Carrousel> */}
    </div>
  );
};

export default HomePage;
