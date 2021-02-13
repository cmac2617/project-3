import React, { useState } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../NewPlaceForm/NewPlaceForm.js"
import { useHistory } from "react-router-dom";

export default function Login() {
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log("submitted")
    API.saveUser(formObject).then(results => {
      console.log(results)
      history.push("/")
    })
  }

  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      
    </div>
    <div className="col-sm">
    <div className="Register">
      
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
                type="password"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Register
              </FormBtn>
              
    </div>
    </div>
    <div className="col-sm">
      
    </div>
  </div>
</div>
    
  );
}
