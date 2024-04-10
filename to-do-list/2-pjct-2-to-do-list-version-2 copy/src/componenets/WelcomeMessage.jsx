import css from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoitems } = useContext(TodoItemsContext);
  return (
    todoitems.length === 0 && <p className={css.welcome}>Enjoy your Day!</p>
  );
};
export default WelcomeMessage;
