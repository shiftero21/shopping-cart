import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import AddToCartBtn from "../common/AddToCartBtn";

const ProductCard = ({ product }) => {
  const { id, name, price, description, slug, mainImage, category } = product;

  const { cart, addToCart } = useOutletContext();
  return (
    <div className={styles.wrapper}>
      <h1 className="mb-2">NEW</h1>
      <div className={styles.wrapper__main}>
        <Link to={`/shopping/${slug}`}>
          <div className={styles.wrapper__img}>
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-[1.15]"
              src={mainImage}
              alt={description}
            />
          </div>
          <h2 className={styles.wrapper__title}>Powerbank</h2>
        </Link>
        <p className={styles.wrapper__desc}>{description}</p>

        <div className={styles.buyDetails}>
          <span className={styles.wrapper__price}>Price: {price}</span>
          <AddToCartBtn
            product={product}
            addToCart={addToCart}
            className="w-50 py-2 px-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-800 transform hover:scale-[1.01] active:outline-none active:ring-4 active:ring-indigo-300"
          >
            Agregar al carrito
          </AddToCartBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
