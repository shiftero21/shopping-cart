import NavigationBar from "../components/Navigation/NavBar";
import { Outlet } from "react-router";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Mi shopping cart</h1>
      <NavigationBar></NavigationBar>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
