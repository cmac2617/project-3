// Imports
import React, { useEffect, useState } from 'react';
import { Input, FormBtn1, StartDate, EndDate, Category, State } from "../NewPlaceForm/NewPlaceForm.js"
import {
    Link
} from "react-router-dom";
import API from "../../utils/API";
import "./UserNavbar.css"

// Component
function UserNavbar({ handleInputChangeCategory,
    handleInputChangeState,
    handleInputChangeStateFilter,
    handleInputChangeCategoryFilter,
    handleInputChangeStartDateFilter,
    handleInputChangeEndDateFilter,
    createFilteredList
}) {
    return (
        <div>


            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#">The People's Directory</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link active" aria-current="page" href="/register">Register</a>
                        </div>
                        <div className="dropdown">
                            <Category
                                onChange={handleInputChangeCategory} />
                        </div>
                        <div className = "dropdownlast">
                            <State
                                onChange={handleInputChangeState} />
                        </div>
                        <div className="label">
                            Apply Filters!
                        </div>
                        <div className = "dropdown">
                            <State
                                onChange={handleInputChangeStateFilter} />
                        </div>
                        <div className = "dropdown">
                            <Category
                                onChange={handleInputChangeCategoryFilter} />
                        </div>
                        <div className = "dropdown">
                            <StartDate
                                onChange={handleInputChangeStartDateFilter} />
                        </div>
                        <div className = "dropdown">
                            <EndDate
                                onChange={handleInputChangeEndDateFilter} />
                        </div>
                        <div>
                            <FormBtn1
                            onClick = {createFilteredList} />
                        </div>
                        
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default UserNavbar;
