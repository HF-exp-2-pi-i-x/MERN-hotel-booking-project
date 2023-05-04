import berlin from "../../assets/berlin.jpg";
import kyoto from "../../assets/kyoto.jpg";
import london from "../../assets/london.jpg";
import "./featured.scss";

import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const {data,loading,error} = useFetch("hotels/countByCity?cities=berlin,london,kyoto");

  // console.log(data);

  return (
    <>
    {loading?"loading please wait": (

      <div className="row mb-2">
        <div className="col">
          <div className="card bg-dark text-white" >
            <img src={berlin}
            className="card-img"
            alt="..." />
            <div className="card-img-overlay">
              <h1 className="card-title text-center">Berlin</h1>
              <p className="card-text text-center">{data[0]} properties</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-dark text-white" >
            <img src={london}className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h1 className="card-title text-center">London</h1>
              <p className="card-text text-center">{data[1]} properties</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-dark text-white" >
            <img src={kyoto}className="card-img " alt="..." />
            <div className="card-img-overlay">
              <h1 className="card-title text-center">Kyoto</h1>
              <p className="card-text text-center">{data[2]} properties</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
};

export default Featured;
