import "./App.css";
import NavigationBar from "../components/Navigation/NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <h1>Mi shopping cart</h1>
      <NavigationBar></NavigationBar>

      <Outlet></Outlet>
    </>
  );
}

export default App;
