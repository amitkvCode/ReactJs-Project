import AppName from "./components/AppNane";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            26/10/2023
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Go to Collage
          </div>
          <div class="col-4">
            26/10/2023
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
        
      </div>
    </center>
  );
}

export default App;
