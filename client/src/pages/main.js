// HOME PAGE


import API from "../utils/API";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
<<<<<<< HEAD
import Navbar from "../components/Navbar/Navbar.js"
import { Input, FormBtn } from "../components/Newplaceform/Newplaceform.js"

=======
import Navbar from "../components/Navbar/Navbar.js";
import { Input, FormBtn } from "../components/Login/Login.js";
// import User from "../../models/user.js"
>>>>>>> 6f2f64d9bbb4a431e51ca8fd285eb70037651ccb
// API.getEvents()
// .then(function (response) {
//     const data = JSON.stringify(response.data);
//   })

function Main() {
  // Function to submit a new place.
  let history = useHistory();
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    // API.savePlace({
    //   title: titleN,
    //   location: locationA
    // }).then(results => console.log(results))
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

<<<<<<< HEAD
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};
  return (
    <>
    {/* navigation bar */}
   <Navbar />
   {/* jumbotron */}
   <Jumbotron />
   <Login />
   
   <form>
              <Input
                name="title"
                placeholder="Title (required)"
                onChange={handleInputChange}
              />
              <Input
                name="location"
                placeholder="Location (required)"
                onChange={handleInputChange}
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Place
              </FormBtn>
              </form>
=======
  function handleFormSubmit() {
      // event.preventdefault();
      console.log("submitted")
      console.log(formObject)
      API.login(formObject).then(results => {
        console.log(results.data)
        if (results.data !== "username incorrect") {
          history.push("/userpage")
        }
>>>>>>> 6f2f64d9bbb4a431e51ca8fd285eb70037651ccb

      })
  };
  // function doTest() {
  //   API.test(formObject).then(results => console.log(results))
  // }

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <form>
        <Input
          name="email"
          placeholder="Enter your email address."
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="Enter your password."
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={handleFormSubmit}
        >
          Submit Place
        </button>
      </form>
    </div>
  );
}

export default Main;
