import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import AddToCartBtn from "../common/AddToCartBtn";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { id, name, price, description, slug, mainImage, category } = product;

  const { cart, addToCart } = useOutletContext();
  return (
    <div className={styles.card}>
      <h1 className="mb-2">{t("productCard.new")}</h1>
      <div className={styles.card__main}>
        <Link to={`/shopping/${slug}`}>
          <div className={styles["card__wrapper-img"]}>
            <img
              className={`${styles.card__img} transition-transform duration-300 ease-in-out hover:scale-[1.15]`}
              src={mainImage}
              alt={description}
            />
          </div>
          <h2 className={styles.card__title}>Powerbank</h2>
        </Link>
        <p className={styles.card__desc}>{description}</p>

        <div className={styles["card__buy-details"]}>
          <span className={styles.card__price}>
            {t("productCard.price")}: {price}
          </span>
          <AddToCartBtn
            product={product}
            addToCart={addToCart}
            className="w-50 py-2 px-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-800 transform hover:scale-[1.01] active:outline-none active:ring-4 active:ring-indigo-300"
          >
            {t("productCard.textAdd")}
          </AddToCartBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
