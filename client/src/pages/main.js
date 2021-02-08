import API from "../utils/API";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import Navbar from "../components/Navbar/Navbar.js";
import { Input, FormBtn } from "../components/Login/Login.js";
// import User from "../../models/user.js"
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

  function handleFormSubmit() {
      // event.preventdefault();
      console.log("submitted")
      console.log(formObject)
      API.login(formObject).then(results => {
        console.log(results.data)
        if (results.data !== "username incorrect") {
          history.push("/userpage")
        }

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
