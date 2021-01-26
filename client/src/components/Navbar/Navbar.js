import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component { 
    render() {
        return(
            <div>


<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">Fun Finder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Register</a>
        <a class="nav-link" href="#">Login</a>
      </div>
    </div>
  </div>
</nav>
              
    
            </div>
        )
    }

}
 export default Navbar