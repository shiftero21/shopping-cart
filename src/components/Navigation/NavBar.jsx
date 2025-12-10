import { NavLink } from "react-router-dom";
import "./NavBar.css";
import EnergyIcon from "../icons/EnergyIcon";
import { useState, useEffect } from "react";

function NavigationBar({ navBarClass, totalItems }) {
  // Define la clase de estilo activo para el NavLink
  const activeStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Solo animamos si la señal es > 0 (es decir, ya se añadió algo)
    if (totalItems > 0) {
      // 1. Aplicar clase de animación (ej: un pequeño pulso)
      setAnimationClass("animate-pulse bg-yellow-400");

      // 2. Remover la clase después de 500ms para permitir que la animación se repita
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 500);

      // Función de limpieza para evitar fugas de memoria
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

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
          <span className="text-xl">🛒</span>

          {/* Renderiza el contador si hay ítems */}
          {totalItems > 0 && (
            <span
              className={`
              absolute top-0 right-0 
              inline-flex items-center justify-center 
              px-2 py-1 text-xs font-bold leading-none 
              text-white transform translate-x-1/2 -translate-y-1/2 
              bg-red-600 rounded-full 
              transition-all duration-150 ease-in-out
              
              ${animationClass} 
            `}
            >
              {totalItems}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
