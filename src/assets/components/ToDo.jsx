import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, task]);
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
