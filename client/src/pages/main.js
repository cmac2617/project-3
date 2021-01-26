import API from "../utils/API"
API.getEvents()
.then(function (response) {
    const data = JSON.stringify(response.data);
  })

function Main () {
  return (
   "Main page."
  )
}

export default Main;