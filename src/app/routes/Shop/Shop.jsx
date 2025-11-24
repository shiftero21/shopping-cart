import products from "../../../utils/data/products";
import { Link } from "react-router";
import styles from "./Shop.module.css";

const Shop = () => {
  console.log(products);

  return (
    <div className="product-list-container">
      <h1>Nuestros Cargadores Portátiles</h1>
      {products.map((product) => (
        // ⭐️ Usamos el SLUG en el Link para que vaya a la ruta dinámica
        <div
          key={product.id}
          className={styles.prodListCont}
        >
          <img
            src={product.src}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/shopping/${product.slug}`}>Ver Detalles</Link>
          {/* El enlace será, ej: /shop/cargador-portatil-01 */}
        </div>
      ))}
    </div>
  );
};

export default Shop;
