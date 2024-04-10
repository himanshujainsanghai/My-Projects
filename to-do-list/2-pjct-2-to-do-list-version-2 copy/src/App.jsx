import AppName from "./componenets/AppName";
import AddTodo from "./componenets/AddTodo";
import TodoItems from "./componenets/TodItems";
import "./App.css";
import WelcomeMessage from "./componenets/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems></TodoItems>
        <WelcomeMessage></WelcomeMessage>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
