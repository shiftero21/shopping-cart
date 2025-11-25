import styles from "./Home.module.css";

const HomePage = () => {
  return (
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
          <h1>POWERBANKS</h1>
        </div>
        <div className={styles.headerImage}></div>
      </div>
    </div>
  );
};

export default HomePage;
