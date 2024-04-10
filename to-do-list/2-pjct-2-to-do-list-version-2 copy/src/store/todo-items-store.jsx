import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoitems: [],
  addNewItem: [],
  DeleteItem: [],
});

const todoitemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, duedate: action.payloaditemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchItems] = useReducer(todoitemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newitemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchItems(newitemAction);

    // setTodoitems((currValue) => [
    //   ...currValue,
    //   { name: itemName, duedate: itemDueDate },
    // ]);
  };

  const DeleteItem = (todoItemName) => {
    const DeleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchItems(DeleteItemAction);

    // const newTodoItems = todoitems.filter((item) => item.name !== todoItemName);
    // setTodoitems(newTodoItems);
    // console.log(`Item deleted :${todoItemName}`);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoitems,
        addNewItem,
        DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
