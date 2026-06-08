function TodoItem1() {
  let TN = "Buy Milk";
  let TI = "4/12/2034";
  return (
    <div>
      <div class="row Go-row">
        <div class="col-6">{TN}</div>
        <div class="col-4">{TI}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger G-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
