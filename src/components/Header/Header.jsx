import styles from "./Header.module.css";
import PowerIcon from "../icons/PowerIcon";
import NavigationBar from "../Navigation/NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <PowerIcon size={48}></PowerIcon>
          <div className={styles.header__logo}>
            <h1>Power Lord</h1>
          </div>
        </div>
        {/* <NavigationBar></NavigationBar> */}
      </div>
    </header>
  );
};

export default Header;
