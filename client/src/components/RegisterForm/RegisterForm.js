import React, { useEffect, useState } from "react";
import { Container, Row, CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../Newplaceform/NewPlaceForm.js"
import './RegisterForm.css';

export default function Login() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("submitted")
    API.saveUser(formObject).then(results => console.log(results))
  }

  return (
    
        <div className="card mb-3" style={{width: '800px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <Card.Img variant="left" src="https://i.imgur.com/kEhgjzb.jpg" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
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
                <p>We'll never share your email with anyone else.</p>
                <Input
                  name="password"
                  placeholder="Password (required)"
                  onChange={handleInputChange}
                />
                <FormBtn
                  // disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Sign Up
              </FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
