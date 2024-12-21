import { useContext } from "react"
import { authContext } from "../App"

function Myprofile() {
    const {user} =useContext(authContext)
    console.log(user);
    
  return (
    <div>
      
    </div>
  )
}

export default Myprofile