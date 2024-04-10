import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ varitems }) => {
  let [activeItems, setItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setItems(newItems);
  };
  return (
    <ul className="list-group">
      {varitems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyed={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
