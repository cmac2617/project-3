import React from "react";

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
      <label htmlFor="multichoice">Example multiple select</label>
      <select className="form-control" id="multichoice" {...props}>
        <option value="Bait/Tackle Shop">Bait/Tackle Shop</option>
        <option value="Bowling Alley">Bowling Alley</option>
        <option value="Business">Business</option>
        <option value="Cafe">Cafe</option>
        <option value="Car Was">Car Wash</option>
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
      </select>
    </div>
  )



}

export function Search(props) {
  return (
    <div className="form-group">
      <label htmlFor="multichoice">Example multiple select</label>
      <select className="form-control" id="multichoice" {...props}>
      <option value="Bait/Tackle Shop">Bait/Tackle Shop</option>
        <option value="Bowling Alley">Bowling Alley</option>
        <option value="Business">Business</option>
        <option value="Cafe">Cafe</option>
        <option value="Car Was">Car Wash</option>
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
      </select>
    </div>
  )
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}