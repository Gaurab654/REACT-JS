import Item from "./Item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <>
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)} //takes true or false
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </>
  );
};
export default FoodItems;
