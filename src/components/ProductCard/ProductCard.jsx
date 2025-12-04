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
        <Link to={`/shopping/${slug}`}>
          <div className={styles.wrapper__img}>
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-[1.15]"
              src={src}
              alt={description}
            />
          </div>
        </Link>
        <h2>{name}</h2>
        <p>Price{price}</p>
        <p>{description}</p>

        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
