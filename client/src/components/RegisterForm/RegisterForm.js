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
<<<<<<< HEAD
    <div className="Register login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
      </Form>
=======
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
>>>>>>> 6f2f64d9bbb4a431e51ca8fd285eb70037651ccb
    </div>
  );
}
