import { useEffect, useState } from "react"
import{Navigate} from "react-router-dom"
import Checkout from "../pages/Checkout"
function ProtectedRoute() {
    const [isAuthenticated , setIsAuthenticated]=useState(false)

    useEffect(()=>{
        if(localStorage.getItem("user")===null) setIsAuthenticated(true)
    },[])


return !isAuthenticated ? <Navigate to="/login" replace />: <Checkout/>
}

export default ProtectedRoute;