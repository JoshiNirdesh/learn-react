import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = ({ items, heading }) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <h3>{heading}</h3>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
