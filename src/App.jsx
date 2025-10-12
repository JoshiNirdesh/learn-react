import React from "react";
import Message from "./assets/Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import UseState from "./assets/components/State1";
import Counter from "./assets/components/Counter";
import Toggle from "./assets/components/Toggle";
import Input from "./assets/components/Input";
import Password from "./assets/components/Password";
import FormHandling from "./assets/components/FormHandling";
import ToDo from "./assets/components/ToDo";
import LikeCount from "./assets/components/LikeCount";
import ShoppingCart from "./assets/components/ShoppingCart";
import ModeDark from "./assets/components/ModeDark";
import Quiz from "./assets/components/Quiz";
import { Route, Routes } from "react-router-dom";
import Learn from "./assets/useEffect/Basic";
import Basic from "./assets/useEffect/Basic";
import CleanUp from "./assets/useEffect/CleanUp";
import FetchApi from "./assets/useEffect/FetchApi";
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
      <Toggle />
      <Input />
      <Password />
      <FormHandling />
      <ToDo />
      <LikeCount />
      <ShoppingCart />
      <ModeDark />
      <Quiz />
      <Basic />
      <CleanUp />
      <FetchApi />
    </div>
  );
};

export default App;
