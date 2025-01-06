import { useEffect, useState } from "react";
import Checkout from "../pages/Checkout";
import { Navigate } from "react-router-dom";

function ProtectedRoute() {

const [isAuthenticated, setIsAuthenticated]=useState(false);
useEffect(()=>{
if(localStorage.getItem("user")!==null) setIsAuthenticated(true);
},[])


  return !isAuthenticated ? <Navigate to="/login" replace /> : <Checkout/>
}

export default ProtectedRoute