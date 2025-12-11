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
        className="flex gap-2 items-center text-2xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
      >
        <BackIcon></BackIcon>
        Seguir Comprando
      </Link>

      <h1>{product.name}</h1>
      <img
        src={product.src}
        alt={product.name}
        style={{ maxWidth: "300px" }}
      />
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>{product.description}</p>

      <Link to="/cart">
        <AddToCartBtn
          product={product}
          addToCart={addToCart}
          className="w-60 py-2 px-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Comprar ahora
        </AddToCartBtn>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
