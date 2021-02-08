import React, {Component} from 'react';
import { Form, Button, Modal, Nav } from "react-bootstrap";
import './Modal.css'


class LoginModal extends Component {
  // contructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="Mlog">
            Log in
          </Modal.Title>
          {/* <Nav variant="tabs" defaultActiveKey="#first">Gr
      <Nav.Item>
        <Nav.Link href="#first">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Sign Up</Nav.Link>
      </Nav.Item>
      </Nav> */}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <p>Not a member yet? <a href="/Register">Sign up.</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;