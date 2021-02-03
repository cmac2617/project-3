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

  export function Category() {
    return(
<div className="form-group">
  <label for="multichoice">Example multiple select</label>
    <select className="form-control" id="multichoice">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
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