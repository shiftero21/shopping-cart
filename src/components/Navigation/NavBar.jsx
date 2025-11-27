import { NavLink } from "react-router-dom";
import "./NavBar.css";
import EnergyIcon from "../icons/EnergyIcon";

function NavigationBar({ navBarClass }) {
  // Define la clase de estilo activo para el NavLink
  const activeStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className={`navBarBase ${navBarClass}`}>
      <EnergyIcon></EnergyIcon>
      <div className="navbar__items">
        <NavLink
          to="/"
          className={activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/shopping"
          className={activeStyle}
        >
          Tienda
        </NavLink>
        <NavLink
          to="/cart"
          className={activeStyle}
        >
          Carrito
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
