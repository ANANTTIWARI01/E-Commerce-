import { useContext } from "react"
import { Link } from "react-router-dom"
import { ecomContext } from "../App"
function Header() {
  const { cart } = useContext(ecomContext)
  console.log(cart);
  
  return (
    <header>
      <h1>Routing</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart <span>{cart.length}</span></Link></li>


      </ul>
    </header>
  )
}

export default Header