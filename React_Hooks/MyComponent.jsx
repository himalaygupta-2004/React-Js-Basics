import React, { useState } from "react";
function MyComponent() {
  //array destructuring
  //setName is a setter
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployment] = useState(false);
  const updateName = () => {
    setName("noddy");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateEmoloyment = () => {
    setEmployment(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>set Name</button>

      <p>Age: {age} </p>
      <button onClick={updateAge}>set Age</button>

      <p>Employment Status : {isEmployed ? "Yes" : "No"} </p>
      <button onClick={updateEmoloyment}>Status</button>
    </div>
  );
}
export default MyComponent;
