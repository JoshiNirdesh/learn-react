import React from "react";
import Message from "./assets/Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";

const App = () => {
  let items = ["Nepal", "USA", "India", "China", "Russia"];
  const handleSelect = (item) => {
    console.log(item);
  };

  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Cities" onSelect={handleSelect} />
      <Alert>
        <h1>Hello world</h1>
        <p>This is an Alert</p>
      </Alert>
    </div>
  );
};

export default App;
