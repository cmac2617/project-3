import API from "../utils/API";
// import Login from "../components/Login/login.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import Navbar from "../components/Navbar/Navbar.js"
import Login from "../components/Register/register"

API.getEvents()
.then(function (response) {
    const data = JSON.stringify(response.data);
  })

function Main () {
  return (
    <>
   <Navbar />
   <Jumbotron />
   <Login/>
  
   </>
  )
}

export default Main;