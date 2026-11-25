import "./App.css";
import Todo from "./components/Todo";
import TodoTitle from "./components/TodoTitle";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Finish ASAP Frontend" },
    { id: 3, task: "Land a junior job" },
    { id: 4, task: "Earn $100k" },
  ]);
  const [value, setValue] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const addTask = () => {
    if (value.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      task: value,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          className="box"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button onClick={addTask}>Add to do</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo.task} setPopupOpen={setPopupOpen} />
      ))}
      {popupOpen && (
        <Popup message="Are you sure???" setPopupOpen={setPopupOpen} />
      )}
    </>
  );
}

export default App;
