import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div class="item">
        {todoItems.map((item) => (
          <TodoItem TN={item.name} TI={item.DueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
