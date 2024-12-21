import { Link } from "react-router-dom"
import { authContext, ecomContext } from "../App"
import { useContext } from "react"
function Header() {
  const { cart } = useContext(ecomContext)
  const { isAuthenticated, logout } = useContext(authContext)
  return (
    <header>
      <h1>Ecommerce</h1>
      <ul>

        {isAuthenticated ?
          <>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart({cart.length})</Link></li>
            <li><button onClick={logout}>Logout</button></li>
            <li><Link to="/myprofile">My Profile</Link></li>

          </> : <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        }
      </ul>
    </header>
  )
}

export default Header