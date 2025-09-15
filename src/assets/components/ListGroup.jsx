import React from "react";

const ListGroup = () => {
  let items = ["Nepal", "USA", "India", "China", "Russia"];
  return (
    <>
      {items.length === 0 && <p>Items not found</p>}
      {items.map((items) => (
        <li key={items}>{items}</li>
      ))}
    </>
  );
};

export default ListGroup;
