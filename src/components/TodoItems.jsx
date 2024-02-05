import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.date}
            key={Math.random()}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
