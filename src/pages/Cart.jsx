/* eslint-disable react/jsx-key */
import  { useContext } from "react";
import { ecomcontext } from "../App";
import CardzQuantity from "../components/CartQuantity"
import { Link } from "react-router-dom";


function Cart() {
  const { cart} = useContext(ecomcontext);
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
<div className="subtotal"><p>SubTotal ({cart.length}) items</p></div>
<div className="checkout"><Link to="/login">Checkout</Link></div>
      </div>

  </div>
  );
}

export default Cart;