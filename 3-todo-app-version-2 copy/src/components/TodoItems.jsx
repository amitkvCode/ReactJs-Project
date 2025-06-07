import TodoItem from "./TodoItem";

const TodoItems = ({ todoData }) => {
  return (
    // import to understand map funtion

    <div className="items-container">
      {todoData.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
