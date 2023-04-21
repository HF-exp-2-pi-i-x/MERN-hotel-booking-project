import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";


const Home = ()=>{
  return (
   <div>
      <Navbar/>
      <Header/>
      <div className="home-container container-fluid">
       <Featured/>
      </div>
   </div>
  )
};

export default Home;