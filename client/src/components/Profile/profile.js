// employee profile after login is completed 
import React, { Component } from 'react';
import { Row, Col, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class Profile extends Component {
    render() {
        return (

        <div>  
            <div className="card">
  <div className="card-body">
    <h1> Welcome Back</h1>
  </div>
</div>

                    {/* heading Card  */}
                    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</div>
           
             
          
      
        )
    }

}
export default Profile