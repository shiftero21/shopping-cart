import { NavLink } from "react-router-dom";
import "./NavBar.css";
import EnergyIcon from "../icons/EnergyIcon";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function NavigationBar({ navBarClass, totalItems }) {
  const { t } = useTranslation();
  const activeStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (totalItems > 0) {
      setAnimationClass("animate-pulse bg-yellow-400");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 500);
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
          {t("common.nav.home")}
        </NavLink>
        <NavLink
          to="/shopping"
          className={activeStyle}
        >
          {t("common.nav.shop")}
        </NavLink>
        <NavLink
          to="/cart"
          className={activeStyle}
        >
          <span className="text-xl">🛒</span>
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
