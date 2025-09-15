import React from "react";

const ListGroup = () => {
  const items = ["Nepal", "USA", "India", "China", "Russia"];
  return (
    <>
      {items.map((items) => (
        <li>{items}</li>
      ))}
    </>
  );
};

export default ListGroup;
