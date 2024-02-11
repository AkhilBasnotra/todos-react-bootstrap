import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import TodoItems from "./components/todoItems";
import "./App.css";

function App() {
  let myTodos = [
    // { name: "go to college", date: "04/02/2024" },
    // { name: "buy milk", date: "04/02/2024" },
    // { name: "watch market", date: "04/02/2024" },
  ];

  const [todo, setTodo] = useState(myTodos);

  const handleNewItem = (input, date) => {
    const newTodoItem = [...myTodos, { name: input, date: date }];
    setTodo(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo clickHandler={handleNewItem} />
      <WelcomeMessage myTodos={todo} />
      <TodoItems todoItems={todo} />
    </center>
  );
}

export default App;
