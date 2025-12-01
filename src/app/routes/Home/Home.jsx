import Tooltip from "../../../components/Tooltip/Tooltip";
import styles from "./Home.module.css";
import Carrousel from "../../../components/Carrousel/Carrousel";

const HomePage = () => {
  return (
    <div className={styles.total}>
      <Carrousel></Carrousel>
      <div className={styles.wrapper}>
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
