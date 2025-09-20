import React, { useState } from "react";

const State1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default State1;
