import React from "react";
import Click from "./components/Click";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./Heading";
import { useState } from "react";
import Container from "./components/Container";
import LoggedIn from "./components/LoggedIn";
import Counter from "./components/Counter";
import Form from "./Form";
import Domref from "./components/Domref";
function App() {
  const personName = {
    first: "John",
    last: "Doe",
  };
  const personList = [
    { first: "John", last: "Doe" },
    { first: "Jane", last: "Doe" },
    { first: "Jack", last: "Doe" },
  ];
  const onClickHandler = (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>,
    id: number
  ) => {
    console.log("Clicked");
    console.log(event.type);
    console.log(id);
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(input);
  };
  const [input, setInput] = useState("");
  const CSSProperties = {
    backgroundColor: "red",
    color: "white",
    fontSize: "1.5rem",
    padding: "1rem",
    margin: "1rem",
    border: "1px solid black",
  };

  return (
    <div className="App">
      {/* <Greet name="Azad" messageCount={0} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList people={personList} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder Warshaw</Heading>
      <Oscar>
        <Heading>Hello Brother </Heading>
      </Oscar>
      <Click click={onClickHandler} />
      <Input value={input} onChange={onChangeHandler} />
      <Container cssProps={CSSProperties} /> */}
      {/* <LoggedIn /> */}
      {/* <Counter /> */}
      <Domref />
    </div>
  );
}

export default App;
