import hotel from "../../assets/hotel.jpg";
import apartment from "../../assets/apartment.jpg";
import resort from "../../assets/resort.jpg";
import villa from "../../assets/villa.jpg";
import cabin from "../../assets/cabin.jpg";
import "./propertyList.scss";

const PropertyList = ()=>{
  return(
    <div className="row mt-3">
      <div className="col-md">
        <div className="card bg-dark text-white" >
          <img src={hotel}
          className="card-img"
           alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title text-center">Hotel</h1>
            <p className="card-text text-center">345 hotels</p>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="card bg-dark text-white" >
          <img src={apartment}
          className="card-img"
           alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title text-center">Apartment</h1>
            <p className="card-text text-center">777 hotels</p>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="card bg-dark text-white" >
          <img src={resort}
          className="card-img"
           alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title text-center">Resort</h1>
            <p className="card-text text-center">989 hotels</p>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="card bg-dark text-white" >
          <img src={villa}
          className="card-img"
           alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title text-center">Villa</h1>
            <p className="card-text text-center">382 hotels</p>
          </div>
        </div>
      </div>
      <div className="col-md ">
        <div className="card bg-dark text-white" >
          <img src={cabin}
          className="card-img"
           alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title text-center">Cabin</h1>
            <p className="card-text text-center">778 hotels</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PropertyList;