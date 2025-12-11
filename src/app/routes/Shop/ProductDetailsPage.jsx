import { useParams } from "react-router-dom"; // Importa el hook
import { useOutletContext } from "react-router-dom";
import styles from "./ProductDetailsPage.module.css";
import products from "../../../utils/data/products";
import { Link } from "react-router-dom";
import BackIcon from "../../../components/icons/BackIcon";
import AddToCartBtn from "../../../components/common/AddToCartBtn.jsx";

function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useOutletContext();

  return (
    <div className={styles.wrapper}>
      <Link
        to="/shopping"
        className="flex gap-2 items-center text-1xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
      >
        <BackIcon></BackIcon>
        Seguir Comprando
      </Link>

      <div className={styles.wrapper__main}>
        <h2 className={styles.wrapper__title}>{product.name}</h2>
        <div className={styles.wrapper__img}>
          <img
            src={product.src}
            alt={product.name}
          />
        </div>
        <p className={styles.wrapper__desc}>{product.description}</p>
        <div className={styles.buyDetails}>
          <span>{product.category}</span>
          <span className={styles.wrapper__price}>Price: {product.price}</span>
          <Link to="/cart">
            <AddToCartBtn
              product={product}
              addToCart={addToCart}
              className="w-50 py-2 px-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Comprar ahora
            </AddToCartBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
