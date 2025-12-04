import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, price, description, slug, src, category } = product;

  const { cart, addToCart } = useOutletContext();
  return (
    <div className={styles.wrapper}>
      <h1>Titulo Carta Generico</h1>
      <div className={styles.prodListCont}>
        <img
          src={src}
          alt={description}
        />
        <h2>{name}</h2>
        <p>Price{price}</p>
        <p>{description}</p>
        <Link to={`/shopping/${slug}`}>Ver Detalles</Link>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
