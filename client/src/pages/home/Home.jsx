import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import ProperyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";


const Home = ()=>{
  return (
   <div>
      <Navbar/>
      <Header/>
      <div className="home-container container-fluid">
       <Featured/>
       <h1 className="headerTitle text-center text-white fw-bold mb-2"> Browse by property type</h1>
       <ProperyList/>
       <h1 className="headerTitle text-center text-white fw-bold mb-2"> Hotels guests like</h1>
       <FeaturedProperties/>
       <MailList/>
       <Footer/>
      </div>
   </div>
  )
};

export default Home;