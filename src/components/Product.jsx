/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Product({ product }) {
    function trimContent(input,limit){
        return input.length>limit ?input.slice(0,limit+1)+"...":input;
    }
  return (
    <>
    
    <div className="product">
        <img src={product.image} alt="Product Image" />
        <h3 className="title">
<Link to={`/product/${product.id}`}>{trimContent(product.title,40)}</Link>
</h3>
        <p className="price">{product.price}</p>
        <Link className="addToCart">Add To Cart</Link>
    </div>
    </>
  )
}

export default Product