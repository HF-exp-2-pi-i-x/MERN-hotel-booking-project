import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {

  const {user} = useContext(AuthContext); 

  console.log(user);

  const rows = [];
  
  for(const key in user){
    rows.push([key,user[key]]);
  }

  console.log(rows);

  return (
    <>
      <Navbar/>
      <div className="container-fluid mt-3">
          {rows.map(row=>{
            const rowStyle = {border:"1px black solid"};
            const colStyle = {borderLeft:"1px black solid"};

            return (

              <div className="row bg-info" style={rowStyle} >
                <div className="col text-center fs-5">
                  {row[0]}
                </div>
                <div className="col text-center fs-5" style={colStyle}>
                  {row[1]}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Profile;