/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext,useContext,useState } from "react";


export const authContext=  createContext(null);

function AuthProvider({children}) {
  const [isAuthenticated, setIsAuthenticated]=useState(false)
  const [user,setUser]=useState(null)


  function login(userData){
    setIsAuthenticated(true)
    setUser(userData);
    }
  
    function logout(){
      setIsAuthenticated(false)
      setUser(null);
    }
  return (
    
    <authContext.Provider
    value={{isAuthenticated,login,logout,user}}>
      {children}
    </authContext.Provider>
  )
}


export function useAuth(){
  const context=useContext(authContext);
  return context;
}

export default AuthProvider