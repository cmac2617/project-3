// After user logs in.
import UserNavbar from "../components/UserNavbar/UserNavbar.js"
import { Input, FormBtn, StartDate, EndDate, Category, State } from "../components/Newplaceform/Newplaceform.js"
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "./Userpage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Jumbotron from "../components/Jumbotron/Jumbotron.js"

function Userpage() {
  // UseEffect for animations.
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Functions for adding a new place to the database.
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
    console.log(formObject)
  }

  function handleFormSubmit(event) {
    event.preventdefault();
    console.log("submitted")
    API.savePlace(formObject).then(results => console.log(results))
  };

  // Functions to generate different lists by state and category on the page.
  var [category, setCategory] = useState([]);
  const [state, setState] = useState([])

  function handleInputChangeCategory(event) {
    // setCategory(event.target.value)
    API.findPlaceByCategory({ category: event.target.value }).then(results => {
      console.log(results.data)
      setCategory(results.data)
    })
      .then(console.log(category))
      .then(console.log("Test call (frontend)"))
  }

  function handleInputChangeState(event) {
    // setState(event.target.value)
    API.findPlaceByState({ state: event.target.value }).then(results => {
      console.log(results.data)
      setState(results.data)
    })
      .then(console.log(state))
      .then(console.log("Test call (frontend state)"))
  }

  // Functions to create a custom filtered list on the page.
  const [filterObject, setFilterObject] = useState([]);
  const prelimObject = {};


  function handleInputChangeStateFilter(event) {
    prelimObject.state = event.target.value;
    console.log(prelimObject);
  }

  function handleInputChangeCategoryFilter(event) {
    prelimObject.category = event.target.value;
    console.log(prelimObject);
  }

  function handleInputChangeStartDateFilter(event) {
    prelimObject.startDate = event.target.value;
    console.log(prelimObject);
  }

  function handleInputChangeEndDateFilter(event) {
    prelimObject.endDate = event.target.value;
    console.log(prelimObject);
  }

  function createFilteredList(event) {
    API.createFilteredList(prelimObject).then(results => {
      console.log(results.data)
      setFilterObject(results.data)
    })
      .then(console.log(filterObject))
  }

  return (
    <div>
      <UserNavbar handleInputChangeCategory={handleInputChangeCategory}
        handleInputChangeState={handleInputChangeState}
        handleInputChangeStateFilter={handleInputChangeStateFilter}
        handleInputChangeCategoryFilter={handleInputChangeCategoryFilter}
        handleInputChangeStartDateFilter={handleInputChangeStartDateFilter}
        handleInputChangeEndDateFilter={handleInputChangeEndDateFilter}
        createFilteredList={createFilteredList}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <Jumbotron />
          </div>
          <div className="col-2">
            
              Add your business or event!
        <Input
                name="title"
                placeholder="Title (required)"
                onChange={handleInputChange}
              />
              <Input
                name="description"
                placeholder="Description (not required)"
                onChange={handleInputChange}
              />
              <Input
                name="website"
                placeholder="website (not required)"
                onChange={handleInputChange}
              />
              <Input
                name="address"
                placeholder="Address (not required)"
                onChange={handleInputChange}
              />
              <Input
                name="phone"
                placeholder="Phone (not required)"
                onChange={handleInputChange}
              />
              <State
                name="state"
                placeholder="State (required)"
                onChange={handleInputChange}
              />
              <StartDate
                name="startDate"
                placeholder="Start Date (not required)"
                onChange={handleInputChange}
              />
              <EndDate
                name="endDate"
                placeholder="End Date (not required)"
                onChange={handleInputChange}
              />
              <Category
                name="category"
                placeholder="Category (required)"
                onChange={handleInputChange}
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
              </FormBtn>
            
          </div>
        </div>







      </div>
      <div className="col-12">
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm">
            <h2>Generate a list of businesses and events by category!</h2>
            {category.map(each => {
            return (

              <div className="card">
                <div data-aos="fade-up" className="boxes">
                  <div className="card-body">
                    <h5 className="card-title">{each.title}</h5>
                    <p className="card-text">{each.category}</p>
                    <p className="card-text">{each.description}</p>
                    <p className="card-text"><a href={each.website}>{each.website}</a></p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">Phone Number: {each.phone}</p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">State: {each.state}</p>
                    <p className="card-text">Start Date: {each.startDate}</p>
                    <p className="card-text">Address: {each.endDate}</p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>






          <div className="col-sm">
            <h2>Generate a list of events and businesses by state!</h2>
            {state.map(each => {
            return (
              <div className="card">
                <div data-aos="fade-up" className="boxes">
                  <div className="card-body">
                    <h5 className="card-title">{each.title}</h5>
                    <p className="card-text">{each.category}</p>
                    <p className="card-text">{each.description}</p>
                    <p className="card-text"><a href={each.website}>{each.website}</a></p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">Phone Number: {each.phone}</p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">State: {each.state}</p>
                    <p className="card-text">Start Date: {each.startDate}</p>
                    <p className="card-text">Address: {each.endDate}</p>
                  </div>
                </div>
              </div>
            )
          })}

          </div>
          <div className="col-sm">
            <h2>Generate a filtered list of events and businesses!</h2>
            {filterObject.map(each => {
            return (
              <div className="card">
                <div data-aos="fade-up" className="boxes">
                  <div className="card-body">
                    <h5 className="card-title">{each.title}</h5>
                    <p className="card-text">{each.category}</p>
                    <p className="card-text">{each.description}</p>
                    <p className="card-text"><a href={each.website}>{each.website}</a></p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">Phone Number: {each.phone}</p>
                    <p className="card-text">Address: {each.address}</p>
                    <p className="card-text">State: {each.state}</p>
                    <p className="card-text">Start Date: {each.startDate}</p>
                    <p className="card-text">Address: {each.endDate}</p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>
      </div>
    </div>

  );

};

export default Userpage;