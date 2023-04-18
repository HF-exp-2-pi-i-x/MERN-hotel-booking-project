import { Link } from "react-router-dom";

const Navbar = ()=>{
  return(
    <nav className="navbar navbar-light bg-primary navbar">
      <Link 
        to="/" 
        className="navbar-brand bg-dark ms-1" 
        style={{color:"white",textDecoration:"none"}}
      >
        Hotel 365
      </Link>
      <Link 
        to="/" 
        className="navbar-brand bg-dark ms-1" 
        style={{color:"white",textDecoration:"none"}}
      >
        Register
      </Link>
      <Link 
        to="/" 
        className="navbar-brand bg-dark ms-1" 
        style={{color:"white",textDecoration:"none"}}
      >
        Login
      </Link>
    </nav>
  )
};

export default Navbar;