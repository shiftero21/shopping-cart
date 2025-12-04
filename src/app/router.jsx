import App from "./App";
import HomePage from "./routes/Home/Home";
import Cart from "./routes/Cart/Cart";
import Shop from "./routes/Shop/Shop";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import ProductDetailsPage from "./routes/Shop/ProductDetailsPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shopping", //parametro opcional> name
        element: <Shop />,
      },
      {
        path: "shopping/:slug",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
