import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    img: undefined,
    city: undefined,
    phone: undefined,
    password: undefined,
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      await axios.post("/auth/register",credentials);
      alert("successfully register, navigate to login");
      navigate("/login");
    }catch(err){
      alert(err);
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
          <label  className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control"
            id="email"
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
        <div className="mb-3">
          <label  className="form-label">Country</label>
          <input 
            type="text" 
            className="form-control" 
            id="country"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input 
            type="text" 
            className="form-control"
            id="city"
            onChange={handleChange}
           />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input 
            type="number" 
            className="form-control"
            id="phone"
            onChange={handleChange}
           />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile img</label>
          <input 
            type="text" 
            className="form-control"
            id="img"
            onChange={handleChange}
           />
        </div>

        <button 
        type="submit" 
        className="btn btn-dark"
        onClick={handleClick}
        >
        Register
        </button>

      </form>
  )
}

export default Register;