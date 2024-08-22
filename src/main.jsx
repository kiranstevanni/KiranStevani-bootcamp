import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
