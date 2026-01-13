import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import styles from "./ProductDetailsPage.module.css";
import products from "../../../utils/data/products";
import { Link } from "react-router-dom";
import BackIcon from "../../../components/icons/BackIcon";
import AddToCartBtn from "../../../components/common/AddToCartBtn.jsx";
import Carrousel from "../../../components/Carrousel/Carrousel.jsx";
import Review from "../Home/Review.jsx";
import Avatar from "../Home/Avatar.jsx";
import { useTranslation } from "react-i18next";

function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useOutletContext();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__main}>
        <div className={styles.wrapper__mainContent}>
          <Link
            to="/shopping"
            className="flex gap-2 items-center text-1xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
          >
            <BackIcon></BackIcon>
            {t("common.buttons.backIcon")}
          </Link>
          <h2 className={styles.wrapper__title}>{product.name}</h2>
          <div className={styles.wrapper__img}>
            <Carrousel
              images={product.carouselImages}
              sizeClass="hero-banner--small"
            />
          </div>
          <p className={styles.wrapper__desc}>{product.description}</p>
          <div className={styles.buyDetails}>
            {/* <span>{product.category}</span> */}
            <span className={styles.wrapper__price}>
              Price: {product.price}
            </span>
            <Link to="/cart">
              <AddToCartBtn
                product={product}
                addToCart={addToCart}
                className="w-50 py-2 px-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                {t("common.buttons.buy")}
              </AddToCartBtn>
            </Link>
          </div>
        </div>
        <aside className={styles.wrapper__sidebarDetails}>
          <h3 className="my-2">{t("productDetails.sidebar.title")}</h3>
          <ul>
            <li>{t("productDetails.sidebar.shipping")}</li>
            <li>{t("productDetails.sidebar.returns")}</li>
            <li>{t("productDetails.sidebar.description")}</li>
          </ul>
        </aside>
      </div>
      <section className={styles.reviewsSection}>
        {product.reviews.map((rev, index) => (
          <Review
            key={`${product.id}-rev-${index}`}
            name={rev.name}
            text={rev.text}
            starCount={rev.starCount}
            date={rev.date}
          >
            {/* <Avatar
                  src={product.mainImage}
                  alt={rev.name}
                /> */}
          </Review>
        ))}
      </section>
    </div>
  );
}

export default ProductDetailsPage;
