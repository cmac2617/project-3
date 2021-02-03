import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export function Input(props) {
  return (
    <form action="login" method="post">
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    </form>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}
