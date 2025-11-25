import products from "../../../utils/data/products";
import { Link } from "react-router";
import styles from "./Shop.module.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

const Shop = () => {
  console.log(products);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        // ⭐️ Usamos el SLUG en el Link para que vaya a la ruta dinámica

        <ProductCard
          key={product.id}
          name={product.name}
          src={product.src}
          price={product.price.toFixed(2)}
          slug={product.slug}
          categ={product.category}
          desc={product.description}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
