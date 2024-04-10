import "bootstrap/dist/css/bootstrap.min.css";
import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <center>
        <div className={css.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClicked={onButtonClicked} />
        </div>
      </center>
    </>
  );
}

export default App;
