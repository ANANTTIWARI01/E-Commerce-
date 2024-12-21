/* eslint-disable react-refresh/only-export-components */
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import First from "./pages/First";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart"
import './App.css'
import { createContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
 
export const ecomcontext = createContext(null)


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
  const [cart , setCart] = useState([])


  function handleAddToCart(product){
    
    setCart([...cart,{...product,quantity:1}])
  }
  
console.log(cart);

function changeQuantity(id,action){
  if(action==="inc"){
    setCart(cart.map((item)=>{ return item.id===id ? {...item,quantity:item.quantity+1}:item})) 
  }

  else{
    setCart(cart.map((item)=>{ return item.id===id ? {...item,quantity:item.quantity-1}:item})) 

  }
}

  function handleRemoveFromCart(id){

return setCart([...(cart.filter((item)=> item.id!==id))])

  }



  return (
    <ecomcontext.Provider value={{cart, handleAddToCart,handleRemoveFromCart,changeQuantity}}>
    <RouterProvider router={router}></RouterProvider>
    </ecomcontext.Provider>
  )
}

export default App