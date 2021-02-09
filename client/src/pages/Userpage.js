// After user logs in.

import UserNavbar from "../components/UserNavbar/UserNavbar.js"
import Profile from "../components/Profile/profile"
import { Input, FormBtn, Date, Category, State } from "../components/Newplaceform/NewPlaceForm.js"
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "../App.css"

function Userpage() {

  const [formObject, setFormObject] = useState({});
  const [title, setTitle] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleInputChangeTitle(event) {
    setTitle(event.target.value)
    API.findPlaceTitle({ category: event.target.value }).then(results => console.log(results))
    console.log(event.target.value)

  }
  function handleFormSubmit(event) {
    // event.preventdefault();
    console.log("submitted")
    API.savePlace(formObject).then(results => console.log(results))
  };

  return (
    <div>
      <UserNavbar />
      <div className="container-fluid">
      <div className="row">
    <div className="col-8">col-8</div>
    <div className="col-4">
    <form>Add your business or event!
        <Input
          name="title"
          placeholder="Title (required)"
          onChange={handleInputChange}
        />
        <Input
          name="description"
          placeholder="Description (not required)"
          onChange={handleInputChange}
        />
        <Input
          name="address"
          placeholder="Address (not required)"
          onChange={handleInputChange}
        />
        <Input
          name="phone"
          placeholder="Phone (not required)"
          onChange={handleInputChange}
        />
        <State
          name="state"
          placeholder="State (required)"
          onChange={handleInputChange}
        />
        <Date
          name="startDate"
          placeholder="Start Date (not required)"
          onChange={handleInputChange}
        />
        <Date
          name="endDate"
          placeholder="End Date (not required)"
          onChange={handleInputChange}
        />
        <Category
          name="category"
          placeholder="Category (required)"
          onChange={handleInputChange}
        />
        <FormBtn
          // disabled={!(formObject.author && formObject.title)}
          onClick={handleFormSubmit}
        >
          Submit Place
              </FormBtn>
      </form>
    </div>
  </div>
      
    </div>
    </div>
  );

};

export default Userpage;