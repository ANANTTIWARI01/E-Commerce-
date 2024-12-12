import { useContext } from "react"
import { ecomContext} from "../App"
import { Link } from "react-router-dom";

function Cart() {
const {cart,handleDeleteCart} =useContext(ecomContext)



  return (
<>
{
    cart.map((product)=>{
        return(
            <div className="cart" key={product.id}>
                <img src={product.image} alt="" />
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
                <Link  className="cartDelete" onClick={()=>handleDeleteCart(product)}>Remove Item</Link>
            </div>
        )
    })
}
</>
)
}

export default Cart