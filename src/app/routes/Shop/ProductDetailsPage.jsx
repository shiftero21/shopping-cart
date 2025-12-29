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

function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useOutletContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__main}>
        <div className={styles.wrapper__mainContent}>
          <Link
            to="/shopping"
            className="flex gap-2 items-center text-1xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
          >
            <BackIcon></BackIcon>
            Seguir Comprando
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
                Comprar ahora
              </AddToCartBtn>
            </Link>
          </div>
        </div>
        <aside className={styles.wrapper__sidebarDetails}>
          <h3 className="my-2">Detalles Adicionales</h3>
          <ul>
            <li>Envío gratuito en 48 horas</li>
            <li>Política de devolución de 30 días</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis neque vitae mi maximus pharetra. Maecenas interdum quam
              fringilla risus blandit, quis finibus ante congue. Praesent
              pharetra molestie neque in feugiat. Nam in cursus nunc. Quisque
              varius dignissim viverra. Nulla sodales tortor a congue
              pellentesque. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Quisque maximus tellus
              suscipit, consectetur augue vel, vulputate lectus. Aliquam non
              nunc augue. Donec eget velit sit amet ante condimentum imperdiet a
              ut lectus. Phasellus at ligula nunc. Duis a ipsum ac neque maximus
              ultricies. Nulla commodo pharetra diam, a fermentum nibh tristique
              eget.
            </li>
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
