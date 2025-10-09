import React, { useState } from "react";

const Basic = () => {
  const [resource, setResource] = useState("");
  return (
    <div>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("post")}>Post</button>
      <button onClick={() => setResource("comment")}>Comment</button>

      <p>{resource}</p>
    </div>
  );
};

export default Basic;
