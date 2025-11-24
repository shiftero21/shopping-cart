import styles from "./ProductCard.module.css";
import { Link } from "react-router";
const ProductCard = ({ name, price, desc, slug, src, categ }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Titulo Carta Generico</h1>

      <div
        // key={key}
        className={styles.prodListCont}
      >
        <img
          src={src}
          alt={desc}
        />
        <h2>{name}</h2>
        <p>Price{price}</p>
        <p>{desc}</p>
        <Link to={`/shopping/${slug}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default ProductCard;
