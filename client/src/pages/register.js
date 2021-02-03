import "../App.css";
import React, { useEffect, useState } from "react";
import Register from "../components/Register/Register.js";
import Navbar from "../components/Navbar/Navbar.js";

function Register() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Register />
    </>
  );
}

export default Register;
