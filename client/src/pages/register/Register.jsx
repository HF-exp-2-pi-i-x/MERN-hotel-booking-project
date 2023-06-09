import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import golden from "../../assets/golden.jpg";
import bcrypt from "bcryptjs";

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

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    return re.test(password);
  };

  const handleChange = (e) => {
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick =async (e) =>{
    e.preventDefault();
    try{
      // valid pw in frontend
      const {password} = credentials;
      if(!validatePassword(password)){
        throw new Error("Invalid password");
      }
      // hash in client
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password,salt);
     
      await axios.post("/auth/register",{...credentials,password:hash});
      alert("successfully register, navigate to login");
      navigate("/login");

    }catch(err){
      alert(err);
    }
  }

  return (
    <div className="bg-image vh-100" style={{backgroundImage:`url(${golden})`,height:"auto"}}>

    <Navbar/>
    
    <form className="mt-3 container">
        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input 
            type="text" 
            className="form-control"
            id="username"
            onChange={handleChange}
            placeholder="Enter your username..."
           />
        </div>
        <div className="mb-3">
          <label  className="form-label fw-bold">Email</label>
          <input 
            type="email" 
            className="form-control"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email..."
           />
        </div>
        <div className="mb-3">
          <label  className="form-label fw-bold">Password</label>
          <input 
            type="password" 
            className="form-control"
            id="password"
            onChange={handleChange}
            placeholder="Your password has to contain a capital letter, lowercase letter, number and min length of 8 (e.g. Mern12345 )"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label fw-bold">Country</label>
          <input 
            type="text" 
            className="form-control" 
            id="country"
            onChange={handleChange}
            placeholder="Enter the country you live in..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">City</label>
          <input 
            type="text" 
            className="form-control"
            id="city"
            onChange={handleChange}
            placeholder="Enter the city you live in..."
           />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Phone</label>
          <input 
            type="number" 
            className="form-control"
            id="phone"
            onChange={handleChange}
            placeholder="Enter your phone number..."
           />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Profile img</label>
          <input 
            type="text" 
            className="form-control"
            id="img"
            onChange={handleChange}
            placeholder="Enter the link for your profile picture..."
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
      </div>
  )
}

export default Register;