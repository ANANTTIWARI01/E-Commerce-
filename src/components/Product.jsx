/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../App";

function Product({ product }) {
  const { cart, handleAddToCart, handleDeleteCart } = useContext(ecomContext);
  const [isTransformed, setIsTransformed] = useState(false);

  // Trims the content of the title to fit a certain length
  function trimContent(input, limit) {
    return input.length > limit ? input.slice(0, limit) + "..." : input;
  }

  return (
    <div className="product">
      <img src={product.image} alt="Product Image" />
      <h3 className="title">
        <Link to={`/product/${product.id}`}>{trimContent(product.title, 40)}</Link>
      </h3>
      <p className="price">{product.price}</p>

      <Link
        className="addToCart"
        onClick={(e) => {
          e.preventDefault();
          setIsTransformed(!isTransformed);
        }}
      >
        {isTransformed ? (
          <div className="button-container">
            <button
              className="removeButton"
              onClick={() => {
                handleDeleteCart(product);
              }}
            >
              -
            </button>
            <h2 className="cartShow">{cart.length}</h2>
            <button
              className="addButton"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              +
            </button>
          </div>
        ) : (
          "Click Me"
        )}
      </Link>
    </div>
  );
}

export default Product;
