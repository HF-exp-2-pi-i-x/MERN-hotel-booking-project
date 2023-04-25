import hotel_1 from "../../assets/hotel_1.jpg";
import hotel_2 from "../../assets/hotel_2.jpg";
import hotel_3 from "../../assets/hotel_3.jpg";
import "./featuredProperties.scss";


const FeaturedProperty = ()=>{
  return (
    <div className="row mb-3">
      <div className="col-lg">
          <div className="card">
          <img src={hotel_1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1 className="card-title text-center fw-bold">Hotel 1</h1>
            <div className="d-flex justify-content-center align-items-center">
              <span className="me-5 fw-bold fs-5">Madrid</span>
              <span className="me-5 fw-bold fs-5">Start from $120</span>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-dark mb-2">9.6</button>
                <span className="fs-5 fw-bold">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg">
          <div className="card">
          <img src={hotel_2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1 className="card-title text-center fw-bold">Hotel 2</h1>
            <div className="d-flex justify-content-center align-items-center">
              <span className="me-5 fw-bold fs-5">Sydney</span>
              <span className="me-5 fw-bold fs-5">Start from $110</span>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-dark mb-2">9.9</button>
                <span className="fs-5 fw-bold">GOOD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg">
          <div className="card">
          <img src={hotel_3} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1 className="card-title text-center fw-bold">Hotel 3</h1>
            <div className="d-flex justify-content-center align-items-center">
              <span className="me-5 fw-bold fs-5">Paris</span>
              <span className="me-5 fw-bold fs-5">Start from $180</span>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-dark mb-2">10.0</button>
                <span className="fs-5 fw-bold">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;