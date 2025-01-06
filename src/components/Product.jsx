/* eslint-disable react/prop-types */
// import { useContext} from "react";
import { Link } from "react-router-dom";
// import { ecomcontext } from "../App";
import CardQuant from "./CardQuant";
import { useEcom } from "../context/Ecom";




function Product({ product }) {
  // const {cart, handleAddToCart} = useContext(ecomcontext);
  const {cart, handleAddToCart} = useEcom();
 

  function trimContent(input, limit) {
    return input.length > limit ? input.slice(0, limit + 1) + "..." : input;
  }

  return (
    <>
      <div className="product">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link> 
        <h3 className="title">
          <Link to={`/product/${product.id}`}>
            {trimContent(product.title, 40)}
          </Link>
        </h3>
        <p className="price">${product.price}</p>
        {
          cart.find((item)=>item.id===product.id)!==undefined ? (<CardQuant id={product.id} />) : (<div><Link
          className="addToCart"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(product);

          }}
        >
          Add To Cart
        </Link></div>)
        }
        

      </div>
    </>
  );
}

export default Product;