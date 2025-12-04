import { useParams } from "react-router-dom"; // Importa el hook
import { useOutletContext } from "react-router-dom";
import products from "../../../utils/data/products";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // 1. Obtener el 'slug' de la URL (el nombre del parámetro debe coincidir con el del router)
  const { slug } = useParams();

  // 2. Buscar el producto que coincide con ese 'slug'
  const product = products.find((p) => p.slug === slug);

  // Manejo de error si no se encuentra el producto
  // if (!product) {
  //   return <h1>404 - Producto no encontrado</h1>;
  // }

  const { addToCart } = useOutletContext();

  // 3. Renderizar la información del producto
  return (
    <div>
      <h1>Detalles de: {product.name}</h1>
      <img
        src={product.src}
        alt={product.name}
        style={{ maxWidth: "300px" }}
      />
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>{product.description}</p>
      {/* Puedes agregar aquí el botón de "Añadir al carrito" */}

      <button
        onClick={() => addToCart(product)}
        className="w-full lg:w-3/4 py-3 px-6 bg-indigo-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        🛒 Añadir al Carrito
      </button>

      <Link
        to="/shopping"
        className="text-center w-full lg:w-3/4 text-indigo-600 hover:text-indigo-800 font-medium mt-2"
      >
        Seguir Comprando
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
