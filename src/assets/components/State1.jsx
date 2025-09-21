import React, { useState } from "react";

const State1 = () => {
  const someValue = () => {
    console.log("Calculation");
    return 10;
  };
  const [state, setState] = useState({
    count: someValue(),
    firstName: "Hari",
    lastName: "Shrestha",
  });

  const increment = () => {
    setState({ ...state, count: state.count + 1 });
    console.log(state.count);
    console.log(state.firstName);
  };
  return (
    <>
      <h3>{state.count}</h3>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default State1;
