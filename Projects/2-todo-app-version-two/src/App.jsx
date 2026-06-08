import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "BuyMilk",
      DueDate: "4/12/2034",
    },
    {
      name: "Go to College",
      DueDate: "4/12/2034",
    },
  ];
  return (
    <div>
      <center class="todo-container">
        <AppName></AppName>
        <div class="container text-center">
          <AddTodo></AddTodo>
          <TodoItems todoItems={todoItems}></TodoItems>
        </div>
      </center>
    </div>
  );
}
export default App;
