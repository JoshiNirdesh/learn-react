import React, { useState } from "react";

const LikeCount = () => {
  const [like, setLike] = useState(true);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setLike(!like);
    setCount(like ? count + 1 : count - 1);
  };
  return (
    <div>
      <button onClick={handleClick}>{like ? "Like" : "Dislike"}</button>
      <p>Like :{count}</p>
    </div>
  );
};

export default LikeCount;
