import css from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyed }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li
      className={`${css["lisi-container"]} list-group-item ${
        bought && "active"
      }`}
    >
      <span className={css["item-span"]}>{foodItem}</span>
      <button className={`${css.button} btn btn-info  `} onClick={handleBuyed}>
        Buy
      </button>
    </li>
  );
};
export default Item;
