import { Link } from "react-router-dom";
import {FaHotel} from "react-icons/fa";

const Navbar = ()=>{
  return(
      <nav className="navbar navbar-expand bg-dark bg-gradient opacity-90">
          <div className="navbar-nav container-fluid justify-content-around ">
            <div className="nav-item">
              <Link 
              to="/" 
              className="navbar-brand bg-warning"
              >
              <FaHotel className="h2"/>
              <span className="h3">Hotel 365</span>
              </Link>
            </div>

            <div className="nav-item">
              <Link 
              to="/" 
              className="btn btn-success me-5" 
              >
              Register
              </Link>
              <Link 
                to="/" 
                className="btn btn-info" 
              >
                Login
              </Link>
            </div>
          </div>
      </nav>
  )
};

export default Navbar;