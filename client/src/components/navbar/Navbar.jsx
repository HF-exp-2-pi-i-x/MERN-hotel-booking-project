import { Link,useNavigate } from "react-router-dom";
import {FaHotel} from "react-icons/fa";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const Navbar = ()=>{
  
  const {user} = useContext(AuthContext); 

  const navigate = useNavigate();

  // console.log(user);

  return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
              <Link 
              to="/" 
              className="navbar-brand "
              style={{color:"#483D8B",border:"1px solid #483D8B",borderRadius:"5px",padding:"5px",background:"gold"}}
              >
                <FaHotel className="h3"/>
                <span className="h3">Hotel 365</span>
              </Link>
           

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="ms-auto nav-item">
                  <a href="/" className="nav-link active " >Home</a>
                </li>
                <li className="nav-item">
                  <a href="/login" className={user?"nav-link disabled":"nav-link active"}>Login</a>
                </li>
                <li className="nav-item">
                  <a href="/register" className={user?"nav-link disabled":"nav-link active"}>Register</a>
                </li>
                <li className="nav-item">
                  <a href="/profile" className={user?"nav-link active":"nav-link disabled"}>Profile</a>
                </li>
                <li className="nav-item">
                  <button 
                  className={user?"btn btn-link":"btn btn-link disabled"}
                  onClick={()=>{
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                  >
                  Logout
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Our mission</a></li>
                    <li><a href="#" className="dropdown-item">Our policy</a></li>
                    <li><a href="#" className="dropdown-item">Contact us</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link disabled">{user?user.username:"visitor"}</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
  )
};

export default Navbar;