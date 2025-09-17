import React, { useState } from "react";
import Alert from "./Alert";

const Button = ({ children, color, onClick }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert>Button Clicked</Alert>}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => setAlertVisible(true)}
      >
        {children}
      </button>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => setAlertVisible(true)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
