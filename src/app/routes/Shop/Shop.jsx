import products from "../../../utils/data/products";
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
          product={product}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
