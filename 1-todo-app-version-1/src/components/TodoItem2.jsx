function TodoItem2() {
  let todoName = 'Go to Collage';
  let todoDate = '26/10/2023';
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>

  );
}

export default TodoItem2;
