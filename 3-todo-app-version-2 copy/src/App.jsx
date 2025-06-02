import AppName from "./components/AppNane";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

 
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
      <TodoItem todoDate={'26/10/2023'} todoName={'Buy Milk'}></TodoItem>
      <TodoItem todoDate={'26/10/2023'} todoName={'Go to Collage'}></TodoItem>
      </div>
    </center>
  );
}

export default App;
