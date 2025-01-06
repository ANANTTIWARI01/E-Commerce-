/* eslint-disable react/jsx-key */
import CardQuant from "../components/CardQuant";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useEcom } from "../context/Ecom";


function Cart() {
  // const { cart} = useContext(ecomcontext);
  const {cart} =useEcom();

  const [sumTotal,setSumTotal]=useState(0);

  useEffect(()=>{
      if(cart.length===1){
        setSumTotal(cart[0].price*cart[0].quantity);
      }


    else if(cart.length>1){
      setSumTotal(cart.reduce(
        (acc,item)=>{
         return acc.price*acc.quantity+item.price*item.quantity
        }
      ))
    }   
  },[cart])

  return (
     <div className="mainDiv">
      <div className="mainDiv1">
      {cart.map((item) => {
        return (
          <div className="Cart">
            <div className="cartImage">
            <img src={item.image} alt="" />
            </div>
            <div className="cartItem">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <CardQuant id={item.id} />
            </div>
          </div>

        );
      })}
      </div>

      <div className="mainDiv2">
<div className="subtotal"><p>SubTotal ({cart.length}) items</p><p>Price: ${sumTotal.toFixed(2)}</p></div>
<div className="checkout"><Link to="/login">Checkout</Link></div>
      </div>

  </div>
  );
}

export default Cart;