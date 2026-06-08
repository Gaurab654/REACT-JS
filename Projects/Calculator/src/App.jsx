import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import Button from "./components/Buttons.jsx";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}

export default App;
