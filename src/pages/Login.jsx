import { Link } from "react-router-dom"
import {auth}from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useContext, useState } from "react"
import { authContext } from "../App"

function Login() {
const[data,setData] =useState({
  email:"",
  password:"",
})

const {login}=useContext(authContext)
const [message,setMessage]=useState(false)

function handleChange(e){
  const {name,value} =e.target;
  setData({...data,[name]:value})
}

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const response =await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(response);
      login(response.user)
       setMessage(false)
    } catch (error){
     if(error.code==="auth/invalid-credential"){
      setMessage("incorrect credentials")
     }
     else{
      console.log(error)
      setMessage(false)
     }
    }
     
  }

  return (
    <>
    {message && <h3>{message}</h3>}
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} /><br/>
        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/><br/>
        <button type="submit" ><Link to="/">login</Link></button>
      </form>
      <Link to="/register"> New user ?Register</Link>
    </>
  )
}

export default Login
