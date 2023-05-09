import reactLogo from "../../assets/react.svg"
import {Link} from "react-router-dom";

const SearchItem =({item})=>{
  return(
    <div className="searchItem row bg-white text-dark" style={{border:"1px black solid"}}>
      <img
        src={reactLogo}
        alt="somepic"
        className="siImg col-3"
        style={{height:"250px"}}
      />
      <div className="siDesc col-5 m-auto">
        <h1 className="siTitle fw-bold">{item.name}</h1>
        <ul style={{listStyle:"none"}} className="text-success">
          <li className="siDistance fw-light">{item.distance}m from center</li>
          <li className="siTaxiOp fw-light">Free airport taxi</li>
          <li className="siSubtitle fw-light">
            Studio Apartment with Air conditioning
          </li>
          <li className="siFeatures fw-light">
            {item.desc}
          </li>
          <li className="siCancelOp fw-light">Free cancellation </li>
          <li className="siCancelOpSubtitle fw-light">
            You can cancel later, so lock in this great price today!
          </li>
        </ul>
      </div>
      <div className="siDetails col-4 m-auto ">
        <div className="siRating overflow-auto mb-2">
          <span className="float-start fw-bold">Excellent</span>
          <button className="float-end btn btn-secondary">{item.rating}</button>
        </div>
        <div className="siDetailTexts d-flex justify-content-between">
          <span className="siPrice fw-bold">${item.cheapestPrice}</span>
          <span className="siTaxOp fw-bold fst-italic">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton btn btn-danger">See availability</button>
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default SearchItem;