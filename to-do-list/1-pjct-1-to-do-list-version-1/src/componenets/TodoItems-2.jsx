function TodoItems2() {
  let input1 = "Study";
  let date1 = "04/11/24";
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{input1}</div>
        <div class="col-4">{date1}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems2;
