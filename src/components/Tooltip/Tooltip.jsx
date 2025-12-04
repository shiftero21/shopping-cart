import styles from "./Tooltip.module.css";

const Tooltip = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tooltip} ${styles.tooltip3}`}>
        <div className={styles.pin}></div>
        <div className={styles.tooltipContent}>
          {/* <div className="arrow"></div> */}
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus molestiae accusantium magni ex numquam eveniet,
              doloremque dolores impedit beatae quas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
