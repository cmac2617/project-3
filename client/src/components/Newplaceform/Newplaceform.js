import React from "react";
import "./NewPlaceForm.css";


export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function Date(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="date" {...props} />
    </div>
  );
}

export function Category(props) {
  return (
    <div className="form-group">
      <label htmlFor="multichoice">Category</label>
      <select className="form-control" id="multichoice" {...props}>
        <option value="Bait/Tackle Shop">Bait/Tackle Shop</option>
        <option value="Bowling Alley">Bowling Alley</option>
        <option value="Business">Business</option>
        <option value="Cafe">Cafe</option>
        <option value="Car Wash">Car Wash</option>
        <option value="Church">Church</option>
        <option value="Coffee Shop">Coffee Shop</option>
        <option value="Concert">Concert</option>
        <option value="Entertainment Center">Entertainment Center</option>
        <option value="Gas Station">Gas Station</option>
        <option value="Golf Course">Golf Course</option>
        <option value="Golf Range">Golf Range</option>
        <option value="Gun Range">Gun Range</option>
        <option value="Gym">Gym</option>
        <option value="Ice Cream Shop">Ice Cream Shop</option>
        <option value="Local Meet Up">Local Meet Up</option>
        <option value="Movie Theatre">Movie Theatre</option>
        <option value="Protest">Protest</option>
        <option value="Recreation Center">Recreation Center</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Retail Store">Retail Store</option>
        <option value="Protest">Protest</option>
        <option value="Sporting Event">Sporting Event</option>
        <option value="Other">Other</option>
      </select>
    </div>
  )



}

export function State(props) {
  return (
    <div className="form-group">
      <label htmlFor="multichoice">State</label>
      <select className="form-control" id="multichoice" {...props}>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Lousiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Orgeon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
    </div>
  )
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success frmbutton">
      {props.children}
    </button>
  );
}

export function Image(props) {
  return (
    <div>
    <input type="file" id="myFile" name="filename" /><br />
</div>
  )
}