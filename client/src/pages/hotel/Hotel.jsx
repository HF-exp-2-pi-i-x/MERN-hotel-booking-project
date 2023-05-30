import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import {useState,useContext} from "react";

import {AiFillCloseCircle} from "react-icons/ai";
import {FaArrowCircleLeft,FaArrowCircleRight,FaLocationArrow} from "react-icons/fa";

import { useLocation,useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

import golden from "../../assets/golden.jpg";

import room_1 from "../../assets/room_1.jpg";
import room_2 from "../../assets/room_2.jpg";
import room_3 from "../../assets/room_3.jpg";
import room_4 from "../../assets/room_4.jpg";
import room_5 from "../../assets/room_5.jpg";
import room_6 from "../../assets/room_6.jpg";


const Hotel = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const photos = [
    {
      src: room_1,
    },
    {
      src: room_2,
    },
    {
      src: room_3,
    },
    {
      src: room_4,
    },
    {
      src: room_5,
    },
    {
      src: room_6,
    },
  ];

  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false);

  const {data,loading,error} = useFetch(`/hotels/find/${id}`);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {dates,options} = useContext(SearchContext);

  // console.log(dates);

  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate,dates[0].startDate);

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction)=>{
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0?5:slideNumber-1;
    }else{
      newSlideNumber = slideNumber === 5?0: slideNumber+1;
    }
    setSlideNumber(newSlideNumber);
  }

  const handleClick = ()=>{
    if(user){
      setOpenModal(true);
    }else{
      navigate("/login");
    }
  }

  return (
    <div className="bg-image" style={{backgroundImage:`url(${golden})`,height:"auto"}}>
       <Navbar/>
       <>
        {loading?("loading"):(
            <div className="hotelContainer ">
              {
                open && 
                (
                  <div className="slider position-absolute top-25 bg-black" >
                    <div className="top-buttons d-flex justify-content-center">
                      <AiFillCloseCircle
                        className="close "
                        onClick={()=>setOpen(false)}
                        size="1.3em"
                        style={{color:"yellow"}}
                      />
                      <FaArrowCircleLeft 
                        className="arrow "
                        onClick={()=>handleMove("l")}
                        size="1.3em"
                        style={{color:"yellow"}}
                      />
                    </div>
                    <div className="sliderWrapper">
                      <img src={photos[slideNumber].src} alt="slides" className="sliderImg d-block mx-auto my-auto" style={{width:"60%"}}/>
                    </div>
                    <FaArrowCircleRight
                      className="arrow d-block mx-auto my-auto"
                      onClick={()=>handleMove("r")}
                      size="1.3em"
                      style={{color:"yellow"}}
                    />
                  </div>
                )
              }
            <div className="hotelWrapper row">
                <div className="d-grid mb-2">
                  <button className="bookNow btn btn-danger" type="button">Reserve or Book Now!</button>
                </div>
                <h1 className="hotelTitle text-center fw-bold" >{data.name}</h1>
                <div className="hotelAddress text-center mb-2">
                  <FaLocationArrow className="me-2"/>
                  <span>{data.address}</span>
                </div>
                <p className="hotelDistance text-center mb-2 fs-2" style={{color:"purple"}}>
                  Excellent location – {data.distance}m from center
                </p>
                <p className="hotelPriceHighlight text-center fs-4 fst-italic mb-5" style={{color:"gold"}}>
                  Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                </p>
                <div className="hotelImages row">
                  {photos.map((photo,i)=>(
                    <div className="hotelImgWrapper col-md-4" key={i}>
                      <img 
                        onClick={()=>handleOpen(i)}
                        src={photo.src}
                        alt="hotel images" 
                        className="hotelImg mb-2 img-fluid rounded "
                        
                      />
                    </div>
                  ))}
                </div>
                <div className="hotelDetails p-2" style={{backgroundColor:"orange"}}>
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle text-center">{data.title}</h1>
                    <p className="hotelDesc text-center">
                    {data.desc}
                    </p>
                  </div>
                  <div className="hotelDetailsPrice text-center">
                    <h1>Perfect for a {days}-night stay!</h1>
                    <span className="mb-2">
                    Located in the real heart of Krakow, this property has anexcellent location score of 9.8!
                    </span>
                    <h2 className="mb-2">
                      <b>${days*data.cheapestPrice*options.room}</b>({days} nights)
                    </h2>
                    <button 
                      className="btn btn-dark"
                      onClick={handleClick}
                    >
                    Reserve or Book Now!
                    </button>
                  </div>
                </div>
            </div>
              <MailList />
              <Footer />   
          </div>
        )}
    </>
    {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel;
