import css from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
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
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={css.calcButton}
          onClick={() => onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
