import { NavLink } from "react-router-dom";

function NavigationBar() {
  // Define la clase de estilo activo para el NavLink
  const activeStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div>
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
          Carrito 🛒
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
