import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const handleClick = (event) => {
    setIndex(index + 1);
  };
  return (
    <>
      <h1>This is a counter</h1>
      <p>The counter value is::{index}</p>
      <button className=" button" onClick={handleClick}>
        Click
      </button>
    </>
  );
}

export default App;
