import React, { useEffect, useState } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count changed");
  }, [count]);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Basic;
