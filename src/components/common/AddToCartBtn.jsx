const AddToCartBtn = ({ product, addToCart, className, children }) => {
  return (
    <button
      onClick={() => addToCart(product)}
      className={className}
    >
      {children || "🛒 Añadir al Carrito"}
    </button>
  );
};

export default AddToCartBtn;
