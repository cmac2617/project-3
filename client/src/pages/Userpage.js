// After user logs in.

import Navbar from "../components/Navbar/Navbar.js"
import Profile from "../components/Profile/profile"
import { Input, FormBtn, Date, Category, Search } from "../components/Newplaceform/NewPlaceForm.js"
import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Userpage() {

  const [formObject, setFormObject] = useState({});
  const [title, setTitle] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleInputChangeTitle(event) {
    setTitle(event.target.value)
    API.findPlaceTitle({ category: event.target.value}).then(results => console.log(results))
    console.log(event.target.value)
    
  }
  function handleFormSubmit(event) {
    // event.preventdefault();
    console.log("submitted")
    API.savePlace(formObject).then(results => console.log(results))
  };

  return (
    <div>
      <Navbar />
      <Profile />
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
          onChange={handleInputChange}
        />
        <FormBtn
          // disabled={!(formObject.author && formObject.title)}
          onClick={handleFormSubmit}
        >
          Submit Place
              </FormBtn>
      </form>
<form>
  <Search
  onChange={e=>handleInputChangeTitle(e)}/>
</form>
    </div>
  );

};

export default Userpage;