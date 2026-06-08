import styles from "./Buttons.module.css";
const Buttons = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttoncontainer}>
        {buttonsName.map((item) => (
          <button
            key={item}
            className={styles.button}
            onClick={(item) => onButtonClick()}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default Buttons;
