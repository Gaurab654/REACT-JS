import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import "./App.css";

function App() {
  return (
    <div>
      <center class="todo-container">
        <AppName></AppName>
        <div class="container text-center">
          <AddTodo></AddTodo>
          <div class="item">
            <TodoItem1></TodoItem1>
            <div class="row Go-row">
              <div class="col-6">Go to College</div>
              <div class="col-4">4/10/2023</div>
              <div class="col-2">
                <button type="button" class="btn btn-danger G-button">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
export default App;
