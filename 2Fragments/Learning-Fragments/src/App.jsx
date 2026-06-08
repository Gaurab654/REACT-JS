import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import React from "react";
import FoodItems from "./Components/FoodItems";
import FoodInput from "./Components/FoodInput";

import "./App.css";
import ErrorMessage from "./Components/ErrorMsg";
import Container from "./Components/Container";

function App() {
  //let fi = [];

  const [fi, setFi] = useState([
    "Dal",
    "Roti",
    "Green Vegetables",
    "Papaya",
    "Rice",
    "Chicken Curry",
  ]);

  const InputHandler = (event) => {
    console.log("the event" + event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      console.log(newFoodItem);
      let newItem = [...fi, newFoodItem];
      setFi(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food">Healthy Foods</h1>
        <ul className="list-group">
          <FoodInput onkeydown={InputHandler}></FoodInput>

          <ErrorMessage items={fi}></ErrorMessage>
          <FoodItems items={fi}></FoodItems>
        </ul>
      </Container>
      <Container>
        <p>
          This is passed as children to the container component.<br></br> When
          you apply it to a container, the items inside become flex items and
          can be aligned easily in rows or columns.
        </p>
      </Container>
      <Container>
        Nepal is a landlocked country in South Asia located between India and
        China. Its capital city is Kathmandu. Nepal is famous for its rich
        culture, diverse geography, and natural beauty, including the Himalayas
        and Mount Everest, the highest peak in the world. Nepal has a
        multicultural and multilingual society, with many ethnic groups and
        languages.
      </Container>
    </>
  );
}

export default App;
