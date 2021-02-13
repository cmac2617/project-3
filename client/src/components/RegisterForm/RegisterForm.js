import React, { useState } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../NewPlaceForm/NewPlaceForm.js"

export default function Login() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log("submitted")
    API.saveUser(formObject).then(results => console.log(results))
  }

  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      
    </div>
    <div className="col-sm">
    <div className="Register">
      <form>
      <Input
                name="name"
                placeholder="Name (required)"
                onChange={handleInputChange}
              />
              <Input
                name="email"
                placeholder="E-mail (required)"
                onChange={handleInputChange}
              />
              <Input
                name="password"
                placeholder="Password (required)"
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
    <div className="col-sm">
      
    </div>
  </div>
</div>
    
  );
}
