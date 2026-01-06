import { Outlet } from "react-router";
import { useState } from "react";
import styles from "./App.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navigation/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import useScrollDirection from "../hooks/useScrollDirection";

function App() {
  const [cart, setCart] = useState([]);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const totalItems = getTotalItems();

  const addToCart = (productToAdd) => {
    const itemIndex = cart.findIndex((item) => item.id === productToAdd.id);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      const updatedItem = {
        ...updatedCart[itemIndex],
        cantidad: updatedCart[itemIndex].cantidad + 1,
      };
      updatedCart[itemIndex] = updatedItem;
      setCart(updatedCart);
    } else {
      const newCartItem = {
        ...productToAdd,
        cantidad: 1,
      };
      setCart([...cart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);

    if (itemIndex >= 0) {
      const currentItem = cart[itemIndex];

      if (currentItem.cantidad > 1) {
        const updatedItem = {
          ...currentItem,
          cantidad: currentItem.cantidad - 1,
        };

        const updatedCart = [...cart];
        updatedCart[itemIndex] = updatedItem;
        setCart(updatedCart);
      } else {
        const filteredCart = cart.filter((item) => item.id !== productId);
        setCart(filteredCart);
      }
    }
  };

  const scrollDirection = useScrollDirection();
  const navBarClass =
    scrollDirection === "down" ? "navbar--hidden" : "navbar--visible";
  return (
    <div className={styles.wrapper}>
      <ScrollToTop></ScrollToTop>
      <NavigationBar
        navBarClass={navBarClass}
        totalItems={totalItems}
      ></NavigationBar>
      <Header></Header>
      <Outlet context={{ cart, addToCart, removeFromCart }}></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
