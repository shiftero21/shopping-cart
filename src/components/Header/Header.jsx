import styles from "./Header.module.css";
import PowerIcon from "../icons/PowerIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <PowerIcon size={48}></PowerIcon>
        <div className={styles.header__logo}>
          <h1>Power Lord</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
