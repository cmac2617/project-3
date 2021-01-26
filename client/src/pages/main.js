import API from "../utils/API";
import Login from "../components/Login/Login.js";
API.getEvents()
.then(function (response) {
    const data = JSON.stringify(response.data);
  })

function Main () {
  return (
    <>
   "Main page."
   <Login />
   </>
  )
}

export default Main;