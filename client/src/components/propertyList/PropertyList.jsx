import hotel from "../../assets/hotel.jpg";
import apartment from "../../assets/apartment.jpg";
import resort from "../../assets/resort.jpg";
import villa from "../../assets/villa.jpg";
import cabin from "../../assets/cabin.jpg";
import "./propertyList.scss";

import useFetch from "../../hooks/useFetch";

const PropertyList = ()=>{

  const {data,loading,error} = useFetch("/hotels/countByType");

  const images = [hotel,apartment,resort,villa,cabin];

  // console.log(data);


  return(
    <>
      {loading ? "loading" : (

        <div className="row mb-2">
       
          <>
            {data && images.map((img,i)=>(

              <div className="col-md" key={i}>
                <div className="card bg-dark text-white" >
                  <img src={img}
                  className="card-img"
                  alt="..." />
                  <div className="card-img-overlay">
                    <h1 className="card-title text-center">{data[i]?.type}</h1>
                    <p className="card-text text-center">{data[i]?.count} {data[i]?.type}</p>
                  </div>
                </div>
              </div>
            )
            )}
          </>
        </div>
      )}
    </>
  )
}

export default PropertyList;