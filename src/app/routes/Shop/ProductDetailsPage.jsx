// src/app/routes/Shop/ProductDetailsPage.jsx

import { useParams } from "react-router-dom"; // Importa el hook
import products from "../../../utils/data/products";

function ProductDetailsPage() {
  // 1. Obtener el 'slug' de la URL (el nombre del parámetro debe coincidir con el del router)
  const { slug } = useParams();

  // 2. Buscar el producto que coincide con ese 'slug'
  const product = products.find((p) => p.slug === slug);

  // Manejo de error si no se encuentra el producto
  if (!product) {
    return <h1>404 - Producto no encontrado</h1>;
  }

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
    </div>
  );
}

export default ProductDetailsPage;
