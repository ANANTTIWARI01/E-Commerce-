/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext,useContext,useState } from "react";


export const ecomContext = createContext(null);


function EcomProvider({children}) {
    const [cart , setCart] = useState([])


    function handleAddToCart(product){
    
      setCart([...cart,{...product,quantity:1}])
    }

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
    <>
  <ecomContext.Provider value={{cart, handleAddToCart,handleRemoveFromCart,changeQuantity}}>
  {children}
  </ecomContext.Provider>
    </>
  )
}


export function useEcom(){
  const context=useContext(ecomContext)
  return context
}



export default EcomProvider