import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Home = ()=>{
  return (
   <div>
      <Navbar/>
      <Header/>
      <div className="home-container d-flex flex-col">
        <p>hello</p>
      </div>
   </div>
  )
};

export default Home;