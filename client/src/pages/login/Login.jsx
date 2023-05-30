import axios from "axios";
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import golden from "../../assets/golden.jpg";



const Login = () => {

  const [credentials,setCredentials] = useState(
    {
      username: undefined,
      password: undefined,
    }
  );

  
  const {loading,error,dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
  }

  const handleClick = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",credentials);
      console.log(res);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
      navigate("/");
    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  }

  return (
      <div className="bg-image vh-100" style={{backgroundImage:`url(${golden})`,height:"auto"}}>
        <Navbar/>
        <form className="container mt-5">
          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input 
            type="text" 
            className="form-control" 
            id="username"
            onChange={handleChange}
            placeholder="Enter your username..."
            required
            />
          </div>
          <div className="mb-3">
            <label  className="form-label fw-bold">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="password"
            onChange={handleChange}
            placeholder="Enter your password..."
            required
            />
          </div>
          <button 
          disabled={loading}
          onClick={handleClick}
          className="btn btn-dark"
          >
          Login
          </button>
          {error && <span>{error.message}</span>}
        </form>
        </div>
  )
}

export default Login;