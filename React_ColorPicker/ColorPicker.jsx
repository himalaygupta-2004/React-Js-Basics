import React, { useState } from "react";

function ColorPicker() {
  const [state, setState] = useState("#fffff");
  function handelColor(event) {
    setState(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-picker" style={{ backgroundColor: state }}>
        <p>Selected Color: {state}</p>
      </div>
      <label>Select a color: </label>
      <input type="color" value={state} onChange={handelColor}></input>
    </div>
  );
}
export default ColorPicker;
