import Todoitem from "./Todoitem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItems() {
  const { todoitems } = useContext(TodoItemsContext);
  return (
    <>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
        ></Todoitem>
      ))}
    </>
  );
}
export default TodoItems;
