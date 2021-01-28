import API from "../utils/API";
import Login from "../components/Login/Login.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import Navbar from "../components/Navbar/Navbar.js"
import { Input, FormBtn } from "../components/Newplaceform/Newplaceform.js"
// API.getEvents()
// .then(function (response) {
//     const data = JSON.stringify(response.data);
//   })

function Main () {
// Function to submit a new place.

function handleFormSubmit (event) {
  event.preventdefault();
  API.savePlace({
    title: "A new PLACE"

  })
}
  return (
    <>
   <Navbar />
   <Jumbotron />
   <form>
              <Input
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Place
              </FormBtn>
              </form>

   </>
  )
}

export default Main;