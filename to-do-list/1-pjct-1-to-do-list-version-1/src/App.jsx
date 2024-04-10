import AppName from "./componenets/AppName";
import AddTodo from "./componenets/AddTodo";
import TodoItems1 from "./componenets/TodoItems-1";
import TodoItems2 from "./componenets/TodoItems-2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems1></TodoItems1>
        <TodoItems2></TodoItems2>
      </center>
    </>
  );
}

export default App;
