/* eslint-disable react-refresh/only-export-components */
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import First from "./pages/First";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart"
import './Ecommerce.css'
// import { createContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EcomProvider from "./context/Ecom";
import AuthProvider from "./context/Auth";
 
// export const ecomcontext = createContext(null);
// export const authContext=  createContext(null);
//lorem ipsum authContext = createContext(null);
//export const ecomContext =createContext(null);





const router= createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    children: [
      {
        index:true,
        element:<First />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/product/:id",
        element: <SingleProduct />
      },
      {
        path:"/Cart",
        element: <Cart/>
      },
      {
        path:"/checkout",
        element: <ProtectedRoute/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      
    ]
  }
])


function App() {



 





  return (
//     <authContext.Provider value={{isAuthenticated,login,logout,user}}>
// <ecomcontext.Provider value={{cart, handleAddToCart,handleRemoveFromCart,changeQuantity}}>
//     <RouterProvider router={router} />
//     </ecomcontext.Provider>
//     </authContext.Provider>

<AuthProvider>
  <EcomProvider>
 <RouterProvider router={router} />
  </EcomProvider>
</AuthProvider>
    
  )
}
export default App;