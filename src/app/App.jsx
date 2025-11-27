import { Outlet } from "react-router";
import styles from "./App.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navigation/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import useScrollDirection from "../hooks/useScrollDirection";

function App() {
  const scrollDirection = useScrollDirection();
  const navBarClass =
    scrollDirection === "down" ? "navbar--hidden" : "navbar--visible";
  return (
    <div className={styles.wrapper}>
      <ScrollToTop></ScrollToTop>
      <NavigationBar navBarClass={navBarClass}></NavigationBar>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
