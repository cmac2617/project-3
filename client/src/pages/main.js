import API from "../utils/API";
import React, { useEffect, useState } from "react";
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

  function handleFormSubmit(object) {
    // event.preventdefault();
    // if (!email || !password)
    //   return (res.status(400).json({ msg: "Not all fields are filled in." }));
    //   const user = User.findOne({email: email});
    // // const isMatch;
    // if (formObject.password = user.password)
    // API.savePlace(formObject).then(results => console.log(results))
  }

  return (
    <>
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
        <FormBtn
          // disabled={!(formObject.author && formObject.title)}
          onClick={handleFormSubmit}
        >
          Submit Place
        </FormBtn>
      </form>
    </>
  );
}

export default Main;
