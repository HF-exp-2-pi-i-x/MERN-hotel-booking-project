import { FaBed,FaCalendarDay} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import { useState } from "react";
import {format} from "date-fns";
// react-date-range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";

import "./header.scss";

const Header = ()=>{
  
  const [destination,setDestination]=useState("");

  const [openDate,setOpenDate]=useState(false);
  const [date,setDate]=useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions,setOpenOptions] = useState(false);
  const [options,setOptions]= useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const handleOption = (name,operation)=>{
    setOptions((prev)=>{
      return {
        ...prev,
        [name]: operation==="i"? options[name]+1: options[name]-1,
      };
    });
  };

  return (
    <header>
      <br/>
      <h1 className="headerTitle text-center text-white fw-bold">Enjoy your vacation with a lifetime of discount!</h1>
      <br/>
      <h3 className="headerDesc text-center text-white fw-light fst-italic">Get rewarded for your trips</h3>
      <br/>

      <div className="headerSearch container-fluid vh-50">
        <div className="row bg-secondary">
          <div className="col-lg border d-flex align-items-center justify-content-center position-relative" style={{height:"50px"}} >
            <FaBed size="1.5em" className="me-2"/>
            <input 
              type="text" 
              placeholder="Where are you going?"
              style={{background:"transparent",border:"0",outline:"0"}}
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="col-lg border d-flex align-items-center justify-content-center" style={{height:"50px"}}>
            <FaCalendarDay size="1.5em" className="me-2"/>
            <span
              onClick={()=>setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date position-absolute top-25 start-50"
                  />
            )}
          </div>
          <div className="col-lg border d-flex align-items-center justify-content-center position-relative" style={{height:"50px"}}>
            <BsPeopleFill size="1.5em" className="me-2"/>
            <span 
            onClick={()=>setOpenOptions(!openOptions)}
            >
            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options bg-white  position-absolute top-25 start-50 d-flex justify-content-around align-items-around flex-column">
                <div className="optionItem d-flex justify-content-around align-items-center">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button 
                    disabled={options.adult<=1}
                    className="optionCounterButton me-2"
                    onClick={()=>handleOption("adult","d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber me-2">
                      {options.adult}
                    </span>
                    <button 
                    className="optionCounterButton"
                    onClick={()=>handleOption("adult","i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem d-flex justify-content-around align-items-center">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button 
                    disabled={options.children<=1}
                    className="optionCounterButton me-2"
                    onClick={()=>handleOption("children","d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber me-2">
                      {options.children}
                    </span>
                    <button 
                    className="optionCounterButton"
                    onClick={()=>handleOption("children","i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem d-flex justify-content-around align-items-center">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button 
                    disabled={options.room<=1}
                    className="optionCounterButton me-2"
                    onClick={()=>handleOption("room","d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber me-2">
                      {options.room}
                    </span>
                    <button 
                    className="optionCounterButton"
                    onClick={()=>handleOption("room","i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className=" btn btn-dark col-lg-1" style={{height:"50px"}}>Search</button>
        </div>
      </div>
    </header>
  )
};

export default Header;