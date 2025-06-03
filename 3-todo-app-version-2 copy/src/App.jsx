import AppName from "./components/AppNane";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/container";

import "./App.css";

 
function App() {
  // Array of object used to store data;
 const todoItems = [
  {
    name: "Buy Milk",
    dueDate: "26/10/2023",

  },
  {
    name: "Go to Collage",
    dueDate: "26/10/2024",
  },
  {
    name: "Go Now",
    dueDate: "26/10/2025",
  },
 ];
  return ( <div>
    <Container>
    <center className="todo-container">
      <AppName />
      <AddTodo /> 
      <TodoItems todoData={todoItems}></TodoItems> 
    </center>
    </Container>
    <Container>
      <p>This for you to work for your dream.</p>
    </Container>
    </div>
  );
}

export default App;
