import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { authContext } from "../App";
import { useAuth } from "../context/Auth";
function Login() {

const [data,setData]=useState({
  email:"",
  password:""
})

// const {login}=useContext(authContext)
const {login}=useAuth()

const [message, setMessage]=useState(false);

const navigate=useNavigate();

function handleChange(e){
  const {name,value}=e.target;
  setData({...data,[name]:value})
}


async function handleSubmit(e){
  e.preventDefault();
  try{
    const response=await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    login(response.user)
    navigate("/")
    setMessage(false)
  } catch(error){
    if(error.code==="auth/invalid-credential"){
      setMessage("Incorrect Credentials")
    }
    else{
      setMessage(false)
    }
  }

}



  return (
    <>
    {message && <h3></h3>}
    <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} /><br />
        <button type="submit">Login</button>
    </form>
    <Link to="/register">New user ?Register</Link>
    </>
  )
}

export default Login