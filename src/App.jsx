import React from "react";
import Message from "./assets/Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import UseState from "./assets/components/State1";
import Counter from "./assets/components/Counter";

const App = () => {
  let items = ["Nepal", "USA", "India", "China", "Russia"];
  const handleSelect = (item) => {
    console.log(item);
  };

  const handleClick = () => {
    console.log("Handle Clicked");
  };
  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Cities" onSelect={handleSelect} />
      <Alert>
        <h1>Hello world</h1>
        <p>This is an Alert</p>
      </Alert>
      <Button color="danger" onClick={handleClick}>
        My Button
      </Button>
      <UseState />
      <Counter />
    </div>
  );
};

export default App;
