import React from "react";
import Message from "./assets/Message";
import ListGroup from "./assets/components/ListGroup";

const App = () => {
  let items = ["Nepal", "USA", "India", "China", "Russia"];

  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};

export default App;
