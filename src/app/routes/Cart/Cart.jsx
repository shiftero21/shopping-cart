import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "../../../components/icons/BackIcon";
import QuantitySelector from "./QuantitySelector";
import { useTranslation } from "react-i18next";

function Cart() {
  const context = useOutletContext();
  const cart = context?.cart || [];

  const { addToCart, removeFromCart } = useOutletContext();

  const { t } = useTranslation();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[80vh] bg-gray-50">
        <Link
          to="/shopping"
          className="flex gap-2 items-center text-2xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
        >
          <BackIcon></BackIcon>
          {t("common.buttons.backIcon")}
        </Link>
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          {t("cart.status")}😔
        </h1>
        <p className="text-gray-500">{t("cart.text")}</p>
      </div>
    );
  }

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = item.cantidad || 0;

    return sum + price * quantity;
  }, 0);

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-xl my-10">
      <Link
        to="/shopping"
        className="flex gap-2 items-center text-2xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
      >
        <BackIcon></BackIcon>
        {t("common.buttons.backIcon")}
      </Link>
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 border-b pb-3">
        {t("cart.title")}
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 border rounded-lg bg-indigo-50/30 shadow-sm transition duration-300 hover:bg-indigo-100/50"
          >
            {/* Imagen del producto */}
            <Link to={`/shopping/${item.slug}`}>
              <img
                src={item.mainImage}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/64x64/E0E7FF/4338CA?text=Prod";
                }}
              />
            </Link>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>

            <div className="text-right ml-4 min-w-[120px]">
              <p className="text-base font-medium text-gray-700">
                Cant:{" "}
                <span className="font-bold text-indigo-600">
                  {item.cantidad}
                </span>
              </p>
              <QuantitySelector
                quantity={item.cantidad}
                onAdd={() => addToCart(item)}
                onRemove={() => removeFromCart(item.id)}
              />

              <p className="text-lg font-bold text-gray-900">
                ${(item.price * item.cantidad).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-5 border-t-4 border-indigo-200 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">Subtotal:</h3>
        <span className="text-3xl font-extrabold text-indigo-800">
          ${totalAmount.toFixed(2)}
        </span>
      </div>

      <button className="min-w-[180px] mt-3 py-3 px-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 self-end">
        {t("cart.payment")}
      </button>
    </div>
  );
}

export default Cart;
