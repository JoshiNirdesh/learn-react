import React, { useState } from "react";

const ModeDark = () => {
  const [mode, setMode] = useState(false);
  return (
    <div
      style={{
        background: mode ? "black" : "white",
        color: mode ? "white" : "black",
      }}
    >
      <h2>{mode ? "DarkMode" : "LightMode"}</h2>
      <button onClick={() => setMode(!mode)}>
        {mode ? "LighMode" : "DarkMode"}
      </button>
    </div>
  );
};

export default ModeDark;
