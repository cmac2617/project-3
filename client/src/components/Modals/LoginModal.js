import API from "C:/Users/REiKO/project-3/client/src/utils/API.js";
import React, { Component, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button, Modal, Nav } from "react-bootstrap";
import { Input, FormBtn } from "../Login/Login";
import './Modal.css'


// class LoginModal extends Component {
//   constructor(props) {
//     super(props);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
function LoginModal(props) {

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

  // render() {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="Mlog">
          Log in
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Input
              name="email"
              placeholder="Enter your email address."
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Input
              name="password"
              placeholder="Enter your password."
              onChange={handleInputChange}
            />
          </Form.Group>
          <button
            type="button"
            onClick={handleFormSubmit}
          >
            Submit Place
        </button>
        </Form>
        <p>Not a member yet? <a href="/Register">Sign up.</a></p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  // };
}

export default LoginModal;