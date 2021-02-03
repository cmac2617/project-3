// After user logs in.

import Navbar from "../components/Navbar/Navbar.js"
import Profile from "../components/Profile/profile"
import { Input, FormBtn, Date, Category } from "../components/Newplaceform/Newplaceform.js"
import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Userpage () {

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }

    function handleFormSubmit (event) {
      // event.preventdefault();
      console.log("submitted")
      API.savePlace(formObject).then(results => console.log(results))
    };
    return (
<>
     <Navbar />
     <Profile/>
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
                placeholder="start Date (not required)"
                onChange={handleInputChange}
              />
              <Category 
              name="Category"
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
      
  };
  
  export default Userpage;