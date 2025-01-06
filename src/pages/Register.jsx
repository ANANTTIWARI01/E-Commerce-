import { useState } from "react"
import { Link } from "react-router-dom"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from '../firebase'
function Register() {
 const [message,setMessage]=useState(false)
    const [data,setData]=useState({
        username:"",
        email:"",
        password:""
    })

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }
async function handleSubmit(e){
e.preventDefault()
const userCredentials=await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
);
await updateProfile(userCredentials.user,{display:data.username})
setData({username:"",
    email:"",
    password:""
});


if(userCredentials) setMessage(true)
else{
    setMessage(false)
}

}




  return (
    <>
    {message && <h3>You are logged In</h3>}
    <form action="" onSubmit={handleSubmit}>
<input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange}/>
<br />
<input type="text" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
<br />
<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
<br />
<button type="submit">Register</button>
    </form>
    <Link to='/login'>Existing user? Login</Link>
    </>
  )
}

export default Register