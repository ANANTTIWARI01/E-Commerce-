import { useContext } from "react"
import { ecomContext} from "../App"
function Cart() {
const {cart} =useContext(ecomContext)



  return (
<>
{
    cart.map((product)=>{
        return(
            <div className="cart" key={product.id}>
                <img src={product.image} alt="" />
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
            </div>
        )
    })
}
</>
)
}

export default Cart