import { Outlet } from "react-router";
import styles from "./App.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navigation/NavBar";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <NavigationBar></NavigationBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default App;
