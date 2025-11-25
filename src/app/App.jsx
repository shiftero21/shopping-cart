import NavigationBar from "../components/Navigation/NavBar";
import { Outlet } from "react-router";
import styles from "./App.module.css";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Mi shopping cart</h1>
      <NavigationBar></NavigationBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default App;
