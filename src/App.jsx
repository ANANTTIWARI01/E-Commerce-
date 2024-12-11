import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import First from "./components/First";
// import Product from "../components/Product"

import "./App.css"
import SingleProduct from "./pages/SingleProduct";

const router = createBrowserRouter([
  {path:"/",
    element:<Home/>,
    children:[
     {
      index:true,
      element:<First/>
     }, 
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/product/:id",
        element:<SingleProduct/>
      }

    ]
  }
])



function App() {
  return  <RouterProvider router={router}></RouterProvider>
  
}

export default App
