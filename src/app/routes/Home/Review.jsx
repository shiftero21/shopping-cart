import styles from "./Review.module.css";
const Review = ({ children, name, text, starCount, date }) => {
  return (
    <section className={styles.review}>
      {children}
      <h2 className={styles.review__title}>
        <span>{name}</span>
      </h2>

      <div className={styles.review__meta}>
        <span>{"★".repeat(starCount)}</span>
        <small>{date}</small>
      </div>

      <p>
        <span className={styles.review__cita}>{text}</span>
      </p>
    </section>
  );
};

export default Review;
