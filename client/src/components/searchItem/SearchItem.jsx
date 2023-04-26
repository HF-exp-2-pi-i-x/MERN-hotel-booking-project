
const SearchItem =()=>{
  return(
    <div className="searchItem row bg-white text-dark" style={{border:"1px black solid"}}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt="somepic"
        className="siImg col-3"
        style={{height:"250px"}}
      />
      <div className="siDesc col-5 m-auto">
        <h1 className="siTitle fw-bold">Blunder Apartments</h1>
        <ul style={{listStyle:"none"}} className="text-success">
          <li className="siDistance fw-light">500m from center</li>
          <li className="siTaxiOp fw-light">Free airport taxi</li>
          <li className="siSubtitle fw-light">
            Studio Apartment with Air conditioning
          </li>
          <li className="siFeatures fw-light">
            Entire studio • 1 bathroom • 21m² 1 full bed
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
          <button className="float-end btn btn-secondary">8.9</button>
        </div>
        <div className="siDetailTexts d-flex justify-content-between">
          <span className="siPrice fw-bold">$112</span>
          <span className="siTaxOp fw-bold fst-italic">Includes taxes and fees</span>
          <button className="siCheckButton btn btn-danger">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;