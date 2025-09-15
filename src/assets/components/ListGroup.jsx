import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = () => {
  let items = ["Nepal", "USA", "India", "China", "Russia"];
  const handleClick = (event) => {
    console.log("Clicked");
  };
  return (
    <>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li className="list-group-item" key={items} onClick={handleClick}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
