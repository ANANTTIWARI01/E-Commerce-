/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../App";

function Product({ product }) {
  const {  handleAddToCart } = useContext(ecomContext)
  // console.log(cart);
  // console.log(handleAddToCart);


  function trimContent(input, limit) {
    return input.length > limit ? input.slice(0, limit + 1) + "..." : input;
  }
  return (
    <>

      <div className="product">
        <img src={product.image} alt="Product Image" />
        <h3 className="title">
          <Link to={`/product/${product.id}`}>{trimContent(product.title, 40)}</Link>
        </h3>
        <p className="price">{product.price}</p>
        <Link className="addToCart" onClick={()=>handleAddToCart(product)} >Add To Cart</Link>
      </div>
    </>
  )
}

export default Product