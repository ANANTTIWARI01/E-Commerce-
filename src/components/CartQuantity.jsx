/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { ecomContext } from "../App";



function CartQuantity({id}) {
    const {handleRemoveFromCart  , changeQuantity}=useContext(ecomContext);
  const [count, setCount]=useState(1)

    function increment(){
        setCount(count+1)
        changeQuantity(id , "inc")
      }
      function decrement(){
       if(count>1){
         setCount(count-1)
        changeQuantity(id , "dec")
       }
      }
  return (
    <>
            <div className="icons" > <FaPlus className="icon"  onClick={increment} />  <button>{count}</button> 
            <FiMinus  className="icon" onClick={decrement}/> 
            <MdDeleteForever className="icon red" onClick={()=>handleRemoveFromCart(id)}/>

            </div>
      
    </>
  )
}

export default CartQuantity