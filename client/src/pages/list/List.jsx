import Navbar from "../../components/navbar/Navbar";
import {useLocation} from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";


import "./list.scss"

const List =()=>{

  // get current url & stores state
  const location = useLocation();
  const destination = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar/>
      <div className="listContainer container-fluid text-light">
        <div className="listWrapper row p-2">
          <div className="listSearch col-md-3 ">
            <h1 className="lsTitle fw-bold">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  className="position-absolute top-50"
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
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
            <button className="btn btn-primary">Search</button>
            
          </div>
          <div className="listResult col-md-9 ">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List;