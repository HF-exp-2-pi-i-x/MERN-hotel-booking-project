import hotel_1 from "../../assets/hotel_1.jpg";
import hotel_2 from "../../assets/hotel_2.jpg";
import hotel_3 from "../../assets/hotel_3.jpg";
import "./featuredProperties.scss";

import useFetch from "../../hooks/useFetch";



const FeaturedProperty = ()=>{

  const hotels = [hotel_1,hotel_2,hotel_3];
  
  const {data,loading,error} = useFetch("/hotels?featured=true&limit=3");

  return (
    <div className="row mb-3">
      {loading? ("loading"):(
        <>
          {data.map((item,i)=>(
            <div className="col-lg" key={item._id}>
              <div className="card">
              <img src={hotels[i]} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title text-center fw-bold">{item.name}</h1>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="me-5 fw-bold fs-5">{item.city}</span>
                  <span className="me-5 fw-bold fs-5">Start from ${item.cheapestPrice}</span>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-dark mb-2">{item.rating}</button>
                    <span className="fs-5 fw-bold">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperty;