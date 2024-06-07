import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import {ShoppingCart} from "./components/shopping-cart/shopping-cart.tsx";
import App from "./app/App.tsx";
import {EmptyCart} from "./components/shopping-cart/epty-cart/empty-cart.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "shopping-cart",
    element: <ShoppingCart/>
  },
  {
    path: "empty-cart",
    element: <EmptyCart/>
  },
  {
    path: '*',
    element: <div>Error 404</div>
  }
]);
