import axios from "axios";
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


const Login = () => {

  const [credentials,setCredentials] = useState(
    {
      username: undefined,
      password: undefined,
    }
  );

  // console.log(credentials);

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
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
      navigate("/");
    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  }

  return (
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input 
          type="text" 
          className="form-control" 
          id="username"
          onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input 
          type="password" 
          className="form-control" 
          id="password"
          onChange={handleChange}
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
  )
}

export default Login;