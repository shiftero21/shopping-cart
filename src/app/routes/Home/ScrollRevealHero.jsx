import styles from "./ScrollRevealHero.module.css";

const ScrollRevealHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>
          <span
            className={`${styles.hero__word} ${styles["hero__word--first"]}`}
          >
            All-new
          </span>
          <span
            className={`${styles.hero__word} ${styles["hero__word--last"]}`}
          >
            Power Autonomy
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ScrollRevealHero;
