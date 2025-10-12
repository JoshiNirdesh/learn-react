import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("effect");
    return () => console.log("cleanup ");
  }, [show]);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Toggled</p>}
    </div>
  );
};

export default CleanUp;
