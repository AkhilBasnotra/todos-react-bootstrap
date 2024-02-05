import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/todoItems";
import "./App.css";

function App() {
  let myTodos = [
    { name: "go to college", date: "04/02/2024" },
    { name: "buy milk", date: "04/02/2024" },
    { name: "watch market", date: "04/02/2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={myTodos} />
    </center>
  );
}

export default App;
