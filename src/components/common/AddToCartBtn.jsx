const AddToCartBtn = ({ product, addToCart, className, children }) => {
  return (
    <button
      onClick={() => addToCart(product)}
      className={className}
    >
      {children}
    </button>
  );
};

export default AddToCartBtn;
