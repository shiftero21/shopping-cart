import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, price, description, slug, src, category } = product;

  const { cart, addToCart } = useOutletContext();
  return (
    <div className={styles.wrapper}>
      <h1 className="mb-2">NEW</h1>
      <div className={styles.wrapper__main}>
        <Link to={`/shopping/${slug}`}>
          <div className={styles.wrapper__img}>
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-[1.15]"
              src={src}
              alt={description}
            />
          </div>
          <h2 className={styles.wrapper__title}>Powerbank</h2>
        </Link>
        <p className={styles.wrapper__desc}>{description}</p>

        <div className={styles.buyDetails}>
          <span className={styles.wrapper__price}>Price: {price}</span>
          <button onClick={() => addToCart(product)}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
