/* eslint-disable react/jsx-no-undef */
// import Product from "../components/Product"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import First from "./components/First";
import "./App.css"
import SingleProduct from "./pages/SingleProduct";
import { createContext, useState } from "react";
import Cart from "./pages/Cart"
export const ecomContext = createContext({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <First />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart",
        element: <Cart />
      }

    ]
  }
])



function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  return (<ecomContext.Provider value={{ cart, handleAddToCart }}>
    <RouterProvider router={router}></RouterProvider>
  </ecomContext.Provider>)
}

export default App


