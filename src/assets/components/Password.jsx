import React, { useState } from "react";

const Password = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show "}</button>
    </div>
  );
};

export default Password;
