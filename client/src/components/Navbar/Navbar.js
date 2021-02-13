import React, { Component } from 'react';
import './Navbar.css';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>


                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="#">The People's Directory</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                
                                <Link className="nav-link active" to="/" >Home</Link>
                                <Link className="nav-link active" to="/register">Register</Link>
                                
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }

}
export default Navbar
