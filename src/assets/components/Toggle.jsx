import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h2>{show ? "Hello" : "GoodBye"}</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default Toggle;
