import API from "../utils/API";
import React, { useEffect, useState } from "react";
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
const [titleN, setTitle] = useState()
const [locationA, setLocation] = useState()

useEffect(() => {
  // API.savePlace({ 
  //   title: titleN, 
  //   location: locationA
  // }).then(results => console.log(results))
})

function handleFormSubmit (event) {
  event.preventdefault();
  console.log("submitted")
  API.savePlace({
    title: titleN,
    location: locationA
  }).then(results => console.log(results))
}

function handleInputChange(event) {
  const { name, value } = event.target;
  setTitle(value)
};
  return (
    <>
   <Navbar />
   <Jumbotron />
   <form>
              <Input
                name="title"
                placeholder="Title (required)"
                onChange={handleInputChange}
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