import API from "../utils/API";
import Login from "../components/Login/Login.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import Navbar from "../components/Navbar/Navbar.js"
API.getEvents()
.then(function (response) {
    const data = JSON.stringify(response.data);
  })

function Main () {
  return (
    <>
   <Navbar />
   <Jumbotron />
   </>
  )
}

export default Main;