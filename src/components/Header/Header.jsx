import styles from "./Header.module.css";
import PowerIcon from "../icons/PowerIcon";
import NavigationBar from "../Navigation/NavBar";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const navBarClass =
    scrollDirection === "down" ? "navbar--hidden" : "navbar--visible";
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <PowerIcon size={48}></PowerIcon>
          <div className={styles.header__logo}>
            <h1>Power Lord</h1>
          </div>
        </div>
        {/* <div className={styles.wrapperNav}> */}
        {/* <NavigationBar navBarClass={navBarClass}></NavigationBar> */}
        {/* </div> */}

        {/* <NavigationBar></NavigationBar> */}
      </div>
    </header>
  );
};

export default Header;
