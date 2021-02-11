// Imports
import React, { useEffect, useState } from 'react';
import { Input, FormBtn, Date, Category, State } from "../NewPlaceForm/NewPlaceForm.js"
import {
    Link
} from "react-router-dom";
import API from "../../utils/API";

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
                                onChange={handleInputChangeCategory} />
                        </div>
                        <div>
                            <State
                                onChange={handleInputChangeState} />
                        </div>
                        <div>
                            <State
                                onChange={handleInputChangeStateFilter} />
                        </div>
                        <div>
                            <Category
                                onChange={handleInputChangeCategoryFilter} />
                        </div>
                        <div>
                            <Date
                                onChange={handleInputChangeStartDateFilter} />
                        </div>
                        <div>
                            <Date
                                onChange={handleInputChangeEndDateFilter} />
                        </div>
                        <button
                            type="button"
                            onClick={createFilteredList}
                        >
                            Filter
        </button>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default UserNavbar;
