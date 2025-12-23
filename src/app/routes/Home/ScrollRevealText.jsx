import styles from "./ScrollRevealText.module.css";
const ScrollRevealText = () => {
  return (
    <section className={styles.review}>
      <h2 className={styles.review__title}>
        <span>Sam does the job that...</span>
      </h2>

      <p>
        <span className={styles.review__cita}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          blanditiis perspics quasiveritatis similique reprehenderit porro
          corporis, ea natus adipisci provident doloribus soluta?.
          Quasiveritatis similiqu reprehenderit porro corporis, ea natus
          adipisci provident doloribus soluta?.
        </span>
      </p>
    </section>
  );
};

export default ScrollRevealText;
