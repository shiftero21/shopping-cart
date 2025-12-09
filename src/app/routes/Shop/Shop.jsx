import products from "../../../utils/data/products";
import styles from "./Shop.module.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

const Shop = () => {
  console.log(products);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
