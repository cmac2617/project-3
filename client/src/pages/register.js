import "../App.css";
import React, { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm.js";
import Navbar from "../components/Navbar/Navbar.js";
function Register() {
  return (
    <>
      <Navbar />
      <RegisterForm />
    </>
  );
}
export default Register;