import { Link, useNavigate } from "react-router-dom"
import "./Login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useState } from "react";


const Login = () => {

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })

    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const {login} = useContext(AuthContext);

    const handlelogin = async(e) => {
        e.preventDefault()
        try{
            await login(inputs);
            navigate("/")
        } catch(err){
            setErr(err.response.data)
        }
    };
    //Code that handles the login functionality

    return (

        <div className="login">
          <div className="card">
        <div className="left">
            
            </div>
        <div className="right">
        <h1>Welcome to Social Sphere!</h1>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                {err && err}
                <button onClick={handlelogin}>Login</button>
                {/* This makes the button work with the login function */}
            </form>

        <div className="bottom">
            <span>New to Social Sphere? </span>
        <Link to="/Register">
            Register
            </Link>
        </div>
            
        </div>
          </div>
        </div>
    )
}

export default Login;