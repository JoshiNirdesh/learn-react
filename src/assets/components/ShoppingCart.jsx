import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <button
        onClick={() => {
          addItem({ name: "apple", price: 2 });
        }}
      >
        Add Apple
      </button>
      <button
        onClick={() => {
          addItem({ name: "orange", price: 3 });
        }}
      >
        Add Orange
      </button>
      {cart.map((item, i) => (
        <li key={i}>
          {item.name}-{item.price}
        </li>
      ))}
    </div>
  );
};

export default ShoppingCart;
