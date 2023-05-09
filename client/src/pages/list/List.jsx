import Navbar from "../../components/navbar/Navbar";
import {useLocation} from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";


import "./list.scss"

const List =()=>{

  // get current url & stores state
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  console.log(destination);
  const [dates,setDates] = useState(location.state.dates);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);
  const [min,setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);

  const {data,loading,error,reFetch} = useFetch(
    `/hotels?city=${destination}&min=${min||0}&max=${max||999}`
  );
  // console.log(data);
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar/>
      <div className="listContainer container-fluid text-light">
        <div className="listWrapper row p-2">
          <div className="listSearch col-md-3 ">
            <h1 className="lsTitle fw-bold">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input 
              placeholder={destination} 
              type="text" 
              // onChange={(e)=>setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  className="position-absolute top-50"
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <br/>
              <br/>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionInput"
                    onChange={(e)=>setMin(e.target.value)}
                   />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input 
                  type="number" 
                  className="lsOptionInput"
                  onChange={(e)=>setMax(e.target.value)}
                   />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button 
              className="btn btn-primary"
              onClick={handleClick}
            >
            Search
            </button>
            
          </div>
          <div className="listResult col-md-9 ">
              {
                loading?(
                  "loading"
                ):(
                  <>
                    {data.map((item)=>(
                      <SearchItem item={item} key={item._id}/>
                    ))}
                  </>
                )
              }
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default List;