import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems, deleteHandler }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.date}
            key={Math.random()}
            deleteHandler={deleteHandler}
            todoItems={todoItems}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
