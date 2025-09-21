import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text : {text}</p>
    </div>
  );
};

export default Input;
