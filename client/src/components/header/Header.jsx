import { FaBed } from "react-icons/fa";

const Header = ()=>{
  return (
    <header>
      <br/>
      <h1 className="headerTitle text-center text-white fw-bold">Enjoy your vacation with a lifetime of discount!</h1>
      <br/>
      <h3 className="headerDesc text-center text-white fw-light fst-italic">Get rewarded for your trips</h3>
      <br/>

      <div className="headerSearch container-fluid vh-50">
        <div className="row">
          <div className="col-lg border d-flex align-items-center justify-content-around" style={{height:"50px"}} >
            <FaBed size="1.5em"/>
            <input 
              type="text" 
              placeholder="Where are you going?"
              style={{background:"transparent",border:"0",outline:"0"}}
            />
          </div>
          <div className="col-lg border" style={{height:"50px"}}>two</div>
          <div className="col-lg border" style={{height:"50px"}}>three</div>
          <button className=" btn btn-outline-dark col-lg-1" style={{height:"50px"}}>submit</button>
        </div>
      </div>
    </header>
  )
};

export default Header;