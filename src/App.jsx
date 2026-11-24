import "./App.css";
import Todo from "./components/Todo";
import TodoTitle from "./components/TodoTitle";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState({ name: "minh", count: 20 });
  const increment = () => {
    setCounter(counter.count + 1);
  };
  const decrement = () => {
    setCounter((user) => ({
      ...user,
      count: user.count - 1,
    }));
  };
  const reset = () => {
    setCounter({ name: "minh", count: 20 });
  };

  return (
    <div>
      <h1>
        Counter: {counter.name} {counter.count}
      </h1>
      <button
        onClick={() => {
          setCounter((user) => ({
            ...user,
            count: user.count + 1,
          }));
          setCounter((user) => ({
            ...user,
            count: user.count + 1,
          }));
        }}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  // const [todos, setTodos] = useState([
  //   { id: 1, task: "Learn React" },
  //   { id: 2, task: "Finish ASAP Frontend" },
  //   { id: 3, task: "Land a junior job" },
  //   { id: 4, task: "Earn $100k" },
  // ]);
  // const [value, setValue] = useState("");
  // const [popupOpen, setPopupOpen] = useState(false);
  // const addTask = () => {
  //   if (value.trim() === "") return;
  //   const newTodo = {
  //     id: Date.now(),
  //     task: value,
  //   };
  //   setTodos([...todos, newTodo]);
  //   setValue("");
  // };
  // return (
  //   <>
  //     <TodoTitle />
  //     <div>
  //       <input
  //         type="text"
  //         className="box"
  //         onChange={(event) => {
  //           setValue(event.target.value);
  //         }}
  //       />
  //       <button onClick={addTask}>Add to do</button>
  //     </div>
  //     {todos.map((todo) => (
  //       <Todo key={todo.id} task={todo.task} setPopupOpen={setPopupOpen} />
  //     ))}
  //     {popupOpen && (
  //       <Popup message="Are you sure???" setPopupOpen={setPopupOpen} />
  //     )}
  //   </>
  // );
}

export default App;
