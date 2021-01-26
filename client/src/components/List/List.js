import React, { Component, useEffect } from "react";
import { useState, UseEffect } from "react";

function List() {
    const [events, showEvents] = useState([])
    useEffect(() => {
        fetch("API-ROUTE")
        .then((data => data.json()))
        .then((data => setUsers(data.results)))
    }, [])
// Display lists on the page

return(
    <div>
        {events.map((each, index) => {
            return(
                <p key={index}>{each.name.first} {each.name.last}</p>
            )
        })}
    </div>
)
}