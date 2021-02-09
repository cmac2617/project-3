// Imports
import React, { useEffect, useState } from 'react';
import { Input, FormBtn, Date, Category, State } from "../Newplaceform/NewPlaceForm.js"
import {
    Link
} from "react-router-dom";
import API from "../../utils/API";

// Component
function UserNavbar () {

    // State and functions.
    const [category, setCategory] = useState({});
    const [state, setState] = useState({});

    function handleInputChangeCategory(event) {
        setCategory(event.target.value)
        API.findPlaceByCategory({ category: event.target.value }).then(results => console.log(results))
        console.log(event.target.value)
    }

    function handleInputChangeState(event) {
        setState(event.target.value)
        API.findPlaceByState({ state: event.target.value }).then(results => console.log(results))
        console.log(event.target.value)
    }


    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#">Fun Finder</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link active" aria-current="page" href="/register">Register</a>
                        </div>
                        <div>
                            <Category
                                onChange={e => handleInputChangeCategory(e)} />
                        </div>
                        <div>
                            <State
                            onChange={e => handleInputChangeState(e)} />
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default UserNavbar