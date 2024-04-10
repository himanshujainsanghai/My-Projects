import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [textToShow, setTextState] = useState();
  // let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);

  // let textStateArr = useState("Food item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // or

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);

      console.log("Food value entered is :", newFoodItem);
    }
  };

  // let messageExpresion =
  //   foodItems.length === 0 ? <h3>I am still hungry .</h3> : null;
  return (
    <>
      <Container>
        <h1>Hello Fragments</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage varitems={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}

        <FoodItems varitems={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Add data in the above list to become healthy .</p>
      </Container>
    </>
  );
}

export default App;
