import styles from "./App.module.css";
import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Buttons.jsx";

function App() {
  const [i, setInitial] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);

    if (buttonText === "C") {
      setInitial("");
    } else if (buttonText === "=") {
      const res = eval(i);
      setInitial(res);
    } else {
      const nD = i + buttonText;
      setInitial(nD);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={i}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;
