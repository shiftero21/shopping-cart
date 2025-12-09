import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "../../../components/icons/BackIcon";

function Cart() {
  // 1. Obtener el contexto. Es crucial que useOutletContext() devuelva un objeto
  // que tenga la propiedad 'cart'.
  const context = useOutletContext();

  // Usar un valor por defecto seguro en caso de que el contexto esté incompleto
  const cart = context?.cart || [];

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[60vh] bg-gray-50">
        <Link
          to="/shopping"
          className="flex gap-2 items-center text-2xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
        >
          <BackIcon></BackIcon>
          <p>Seguir Comprando</p>
        </Link>
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Tu carrito está vacío 😔
        </h1>
        <p className="text-gray-500">
          Añade algunos productos desde la sección de compras.
        </p>
      </div>
    );
  }

  // 2. Cálculo Total Robusto (Previene Errores de NaN)
  const totalAmount = cart.reduce((sum, item) => {
    // Asegurar que price y cantidad sean números o 0 para evitar fallos de cálculo
    const price = parseFloat(item.price) || 0;
    const quantity = item.cantidad || 0;

    return sum + price * quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-xl my-10">
      <Link
        to="/shopping"
        className="flex gap-2 items-center text-2xl text-center text-indigo-600 hover:text-indigo-800 font-medium my-2"
      >
        <BackIcon></BackIcon>
        Seguir Comprando
      </Link>
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 border-b pb-3">
        Cesta de Compras
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 border rounded-lg bg-indigo-50/30 shadow-sm transition duration-300 hover:bg-indigo-100/50"
          >
            {/* Imagen del producto */}
            <img
              src={item.src}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/64x64/E0E7FF/4338CA?text=Prod";
              }}
            />

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
              <p className="text-lg font-bold text-gray-900">
                ${(item.price * item.cantidad).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-5 border-t-4 border-indigo-200 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">Total a Pagar:</h3>
        <span className="text-3xl font-extrabold text-indigo-800">
          ${totalAmount.toFixed(2)}
        </span>
      </div>

      <button className="mt-6 w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150">
        Proceder al Pago
      </button>
    </div>
  );
}

export default Cart;
