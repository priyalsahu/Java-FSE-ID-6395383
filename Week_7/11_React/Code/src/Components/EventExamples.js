import React, { useState } from "react";

const EventExamples = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
    showMessage();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello");
  };

  const showMessage = () => {
    console.log("This is a static message.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>🔢 Counter: {count}</h2>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <br /><br />
      <button onClick={handlePress}>OnPress</button>
    </div>
  );
};

export default EventExamples;
