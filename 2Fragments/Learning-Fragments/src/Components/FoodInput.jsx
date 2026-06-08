import styles from "./FoodInput.module.css";
const FoodInput = ({ onkeydown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter a food Item"
        className={styles.foodInput}
        onKeyDown={onkeydown}
      ></input>
    </>
  );
};
export default FoodInput;
